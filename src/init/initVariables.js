import NoEnvVarError from './NoEnvVarError'

const EnvVariables = new Map()

const initVariables = (variables) => {
    Object.keys(variables).forEach((key) => {
        EnvVariables.set(key, variables[key])
    })
}

export const getVariable = (key) => {
    if (!EnvVariables.has(key)) throw new NoEnvVarError(`No variable defined with key='${key}'`)
    return EnvVariables.get(key)
}

export default initVariables
