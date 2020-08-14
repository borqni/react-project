import React, { Component } from 'react'
import Container from '../../components/container'
import styles from './index.module.css'
import Pet from '../../components/pet'
import Title from '../../components/title'
import Submit from '../../components/submit-button'

class Pets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
    }

    getPets = async () => {
        const promise = await fetch('http://localhost:3000/pets')
        const pets = await promise.json()

        this.setState({
            pets
        })
    }

    renderPets() {
        const { pets } = this.state

        return pets.map(pet => {
            return (
                <Pet key={pet._id} {...pet} />
            )
        })
    }

    componentDidMount() {
        this.getPets()
    }

    render() {
        return (
            <Container>

                <Title title="Нашите домашни любимци" />
                {/* <nav className={styles.petsNav}>
                    <Nav href="#" title="Всички" />
                    <Nav href="#" title="Котки" />
                    <Nav href="#" title="Кучета" />
                    <Nav href="#" title="Други" />
                </nav> */}
                <h4>За да добавите домашния си любимец трябва да имате регистрация и да сте влезли в профила си</h4>
                <div className={styles.container}>
                    {this.renderPets()}
                    {/* <div> */}
                    <section className={styles.pets}>
                        <h3>Name: Пешо</h3>
                        <p>Category: Други</p>
                        <p className={styles.img}><img src="https://miau.bg/files/lib/600x350/ferret1-porche.jpg" /></p>
                        <p class="description">This is not my pet Gosho</p>
                        <div class="pet-info">
                            <i class="fas fa-heart"></i><Submit title="Харесай" />
                            <Submit title="Коментирай" />
                        </div>
                    </section>

                    {/* </div> */}
                </div>
            </Container >
        )
    }
}

export default Pets