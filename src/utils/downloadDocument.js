const downloadDocument = (response, name) => {
    const contentType = response.headers['content-type']
    const file = new Blob([response.data], {
        type: contentType,
    })

    const url = window.URL.createObjectURL(file)
    const link = document.createElement('a')

    link.href = url
    const fileName = `${name}.${contentType.split('/')[1]}`

    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
}

export default downloadDocument
