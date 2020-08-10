import React, { Component } from 'react'
import Container from '../../components/container'
import styles from './index.module.css'
import Pet from '../../components/pet'
import Title from '../../components/title'

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
                <div className={styles.container}>
                    {this.renderPets()}
                </div>

            </Container >
        )
    }
}

export default Pets