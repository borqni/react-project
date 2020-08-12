import React, { useState } from 'react'
import styles from './index.module.css'
import Container from '../../components/container'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Pets from '../../components/pets'
import getCookie from '../../utils/cookie'

const SharePet = () => {
    const [createPet, setPet] = useState('')
    const [updatedPet, setUpdatedPet] = useState([])

    const onSubmit = async () => {
        await fetch('http://localhost:9999/api/pet', {
            method: 'POST',
            body: JSON.stringify({
                description: createPet
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setPet('')
        setUpdatedPet([...updatedPet, 1])
    }

    return (
        <Container>
            <section className={styles.create}>
                <Title title="Добавете домашния си любимец" />
                {/* <form action="#" method="post"> */}
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p class="field">
                        <label for="name">Name</label>
                        <span class="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span class="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span class="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label for="category">Category</label>
                        <span class="input">
                            <select type="text" name="category">
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Other</option>
                            </select>
                            <span class="actions"></span>
                        </span>
                    </p>
                    <Submit title="Добави" onClick={onSubmit} />
                    {/* <input class="button" type="submit" class="submit" value="Add Pet" /> */}
                </fieldset>
                {/* </form> */}
            </section>
            <Pets />
        </Container>
    )
}

export default SharePet;