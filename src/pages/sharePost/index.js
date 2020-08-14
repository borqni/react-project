import React, { useState } from 'react'
import styles from './index.module.css'
import Container from '../../components/container'
import Title from '../../components/title'
import Posts from '../../components/posts'
import Submit from '../../components/submit-button'
import getCookie from '../../utils/cookie'
import Input from '../../components/input'

const SharePost = () => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState([])

    const onSubmit = async () => {
        await fetch('http://localhost:9999/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setDescription('')
        setTitle('')
    }

    return (
        <Container>
            <Title title="Добавете статия" />
            <section className={styles.create}>

                <fieldset>
                    <legend>Добавете статия</legend>
                    <p className="title">
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            label="Заглавие"
                            id="title" />
                    </p>
                    <p className="description">Статия:  
                        <textarea  name="description" rows="5" cols="33" />
                    </p>
                    <Submit title="Добави" onClick={onSubmit} />

                </fieldset>
            </section>

        </Container>
    )
}

export default SharePost