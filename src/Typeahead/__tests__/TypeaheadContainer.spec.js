import React from 'react'
import {
    mount,
} from 'enzyme'

import useRemoteData from 'hooks/useRemoteData'

import TypeaheadContainer from '../TypeaheadContainer'
import Typeahead from '../Typeahead'

jest.mock('hooks/useRemoteData')
jest.mock('../Typeahead', () => {
    return () => {
        return <div>empty</div>
    }
})

describe('TypeaheadContainer', () => {
    it('child props', () => {
        const loadLabel = jest.fn().mockResolvedValue({
            data: [{
                id: 'value-id',
                label: 'value-label',
            }],
        })

        const loadOptions = jest.fn().mockResolvedValue({
            data: [
                {
                    id: 'id1',
                    label: 'label1',
                    field: 'field',
                },
                {
                    id: 'id2',
                    label: 'label2',
                },
            ],
        })

        const loadOptionsBySearchPhrase = jest.fn()

        useRemoteData
            .mockReturnValueOnce([
                {
                    data: ['option'],
                },
                loadOptionsBySearchPhrase,
            ])
            .mockReturnValueOnce([{
                state: 'of load label',
            }])

        const wrapper = mount(<TypeaheadContainer
            labelField="label"
            valueField="id"
            loadOptions={loadOptions}
            loadLabel={loadLabel}
            value="some value"
        />)

        const child = wrapper.find(Typeahead)

        expect(child.props()).toMatchSnapshot()
    })
})
