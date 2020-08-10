import React, { Component } from 'react'
import styles from './index.module.css'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";
import Pet from "../../components/pet";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            pets: null,
            image: null
        }
    }

    componentDidMount() {
        this.getUser(this.props.match.params.userId)
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:3000/api/user?id=${id}`)

        if (!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json()

        this.setState = ({
            username: user.username,
            pets: user.pets.length
        })
    }

    render() {
        const { image, username, pets } = this.state

        return (
            <Container>

                <div className={styles.profile}>
                    <img className={styles.profileImg} src={image} />
                    <div className={styles.profileInfo}>
                        <p>Username: <small>{username}</small></p>
                        <p className={styles.infoType}>Has {pets} pets </p>
                        <div className={styles.myPets}>
                            {/* pets.map(pet) */}
                            <p>{pets}</p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Profile