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
                    {/* <div> */}
                    <section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section>
                    <section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section><section className={styles.pets}>
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className={styles.img}><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                        </div>
                    </section>


                    {/* </div> */}
                </div>
            </Container >
        )
    }
}

export default Pets