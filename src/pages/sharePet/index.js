import React from 'react'
import styles from './index.module.css'
// import Posts from './components/posts'
import Title from '../../components/title'
import Container from '../../components/container'
import Submit from '../../components/submit-button'

const SharePet = () => {
    return (
        <Container>
            <Title title="Добавете домашния си любимец" />
            {
                <section className={styles.create}>
                    <form action="#" method="post">
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
                            <Submit title="Добави" />
                            {/* <input class="button" type="submit" class="submit" value="Add Pet" /> */}
                        </fieldset>
                    </form>
                </section>
            }
        </Container>
    )
}

export default SharePet;