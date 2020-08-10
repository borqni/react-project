import React, { Component } from 'react'
import styles from './index.module.css'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";
import Pet from "../../components/pet";
import UserContext from "../../Context";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            pets: null,
            image: null
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.userId)
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json()

        this.setState = ({
            username: user.username,
            image: user.image,
            pets: user.pets && user.pets.length
        })
    }

    logout = () => {
        this.context.logout()
        this.props.history.push('/')
    }

    render() {
        const { image, username, pets } = this.state

        return (
            <Container>
                <div >
                    <img src={image} />
                    <div className={styles.profileInfo}>
                        <p>Username: {username}</p>
                        <p >Has {pets} pets </p>
                        <div className={styles.myPets}>
                            {/* pets.map(pet) */}
                        </div>
                    </div>
                    <button onClick={this.logout}>Logout</button>
                </div>
                <Pet />
            </Container>
        )
    }
}

export default Profile