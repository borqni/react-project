import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './index.module.css'
import Container from "../../components/container";
import Submit from '../../components/submit-button'
import Input from "../../components/input";
import Pet from "../../components/pet";
import UserContext from "../../Context";

const Profile = () => {
    const [username, setUsername] = useState(null)
    const [pets, setPets] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    const getData = useCallback(async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        } else {
            const user = await response.json()
            setUsername(user.username)
            setPets(user.pets && user.pets.length)
        }
    }, [params.userid, history])

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <Container>
            <div >
                {/* <img src={image} /> */}
                <div className={styles.profileInfo}>
                    <p>Username: {username}</p>
                    <p >Has {pets} pets </p>
                    <div className={styles.myPets}>
                        {/* pets.map(pet) */}
                    </div>
                </div>
                <button onClick={logOut}>Logout</button>
            </div>
            <Pet />
        </Container>
    )
}

export default Profile