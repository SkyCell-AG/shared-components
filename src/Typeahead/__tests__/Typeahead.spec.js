import React from 'react'
import {
    shallow,
} from 'enzyme'

import InputSingleline from 'InputSingleLine'
import Typeahead from '../Typeahead'

jest.mock('WithStatusHandler', () => { return (a) => { return a } })
jest.mock('InputSingleLine', () => {
    return () => {
        return <div>inputsingleline</div>
    }
})

describe('Typeahead', () => {
    let wrapper
    const onChange = jest.fn()

    beforeEach(() => {
        wrapper = shallow(
            <Typeahead
                onChange={onChange}
                options={[
                    {
                        label: 'label1',
                        value: 'value1',
                    },
                    {
                        label: 'label2',
                        value: 'value2',
                    },
                ]}
                openOptions={jest.fn()}
                setSearchPhrase={jest.fn()}
                searchPhrase="searchPhrase"
                optionsVisible
                closeOptions={jest.fn()}
                valueField="value"
                labelField="label"
                value="some value"
                name="textinput"
            />,
        )
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('options closed', () => {
        wrapper.setProps({
            optionsVisible: false,
        })

        expect(wrapper.find('.active')).not.toExist()
        expect(wrapper.find(InputSingleline).props().value).toBe('some value')
    })

    it('onChange', () => {
        const event = {
            target: {
                dataset: {
                    value: 'simulated value',
                },
            },
        }

        wrapper.find({
            'data-value': 'value1',
        }).simulate('click', event)

        expect(onChange).toBeCalledWith('simulated value', {
            target: {
                name: 'textinput', value: 'simulated value',
            },
        })
    })
})
