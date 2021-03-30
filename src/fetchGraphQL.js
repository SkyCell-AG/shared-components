async function fetchGraphQL(text, variables) {
    const response = await fetch(`${process.env.REACT_APP_GRAPHQL}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    })

    return response.json()
}

export default fetchGraphQL
