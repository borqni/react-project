const getPet = async () => {
    const promise = await fetch('http://localhost:9999/api/pet') //
    const pets = await promise.json()
    return pets
}

export default getPet