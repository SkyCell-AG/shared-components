import NotInitializedVariableError from './NotInitializedVariableError'

const EnvVariables = new Map()

const initVariables = (...variables) => {
    variables.forEach(({
        key, value,
    }) => {
        EnvVariables.set(key, value)
    })
}

export const getVariable = (key) => {
    if (!EnvVariables.has(key)) throw new NotInitializedVariableError(`No variable defined with key='${key}'`)
    return EnvVariables.get(key)
}

export default initVariables
