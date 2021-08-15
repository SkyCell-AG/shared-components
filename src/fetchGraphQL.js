function fetchGraphQL(
    text,
    variables,
) {
    return fetch(`${process.env.REACT_APP_GRAPHQL}`, {
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
        .then((res) => {
            return res.json()
        })
}

export default fetchGraphQL
