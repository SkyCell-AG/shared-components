const getContainerNumberFromGRAI = (code) => {
    return `${code.slice(code.length - 9, code.length - 6)}-${code.slice(code.length - 5, code.length)}`
}

export default getContainerNumberFromGRAI
