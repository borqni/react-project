const getPost = async () => {
    const promise = await fetch('http://localhost:9999/api/post') //
    const posts = await promise.json()
    return posts
}

export default getPost