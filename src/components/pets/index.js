import React, { Component } from 'react'
// import Nav from '../navigation'
import Pet from '../pet'
import styles from './index.module.css'

class Pets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
    }

    getPets = async () => {
        const promise = await fetch('http://localhost:3000/api/pets')
        const pets = await promise.json()

        this.setState({
            pets
        })
    }

    renderPets() {
        const { pets } = this.state

        return pets.map(pet => {
            return (
                <Pet key={pet._id} {...pet}/>
            )
        })
    }

    componentDidMount() {
        this.getPets()
    }

    render() {
        const { pets } = this.state

        return (
            <div className={styles.main}>
                <h1 >Нашите домашни любимци</h1>
                {/* <nav className={styles.petsNav}>
                    <Nav href="#" title="Всички" />
                    <Nav href="#" title="Котки" />
                    <Nav href="#" title="Кучета" />
                    <Nav href="#" title="Други" />
                </nav> */}
                <div key={pets}>
                    {this.renderPets()}
                </div>
            </div >
        )
    }
}

export default Pets