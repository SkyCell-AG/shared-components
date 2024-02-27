import 'jest-enzyme'
import {
    configure,
} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'
import {
    createSerializer,
} from 'enzyme-to-json'
import chalk from 'chalk'

configure({
    adapter: new Adapter(),
})

const originalConsoleError = global.console.error

expect.addSnapshotSerializer(createSerializer({
    mode: 'shallow',
}))

beforeEach(() => {
    global.console.error = (...args) => {
        const propTypeFailures = [
            /Failed prop type/,
            /Warning: Received/,
        ]

        if (
            propTypeFailures
                .some((p) => {
                    return p.test(args[0])
                })
        ) {
            throw new Error(
                [
                    chalk.red.bold('PropTypes caused test failure:'),
                    chalk.red(args[0]),
                ].join(
                    '\n',
                ),
            )
        }

        originalConsoleError(...args)
    }
})
