import React, { useState, useCallback, useEffect } from 'react'
// import styles from './index.module.css'
import Pet from '../pet'
import getPet from '../../utils/pet'


const Pets = (props) => {
    const [pets, setPets] = useState([])

    const getPets = useCallback(async () => {
        const pets = await getPet(props)
        setPets(pets)
    }, [props])

    const renderPets = () => {
        return pets.map((pet, index) => {
            return (
                <Pet key={pet._id} index={index} {...pet} />
            )
        })
    }

    useEffect(() => {
        getPets()
    }, [props.updatedPet, getPets])

    return (
        <div >
            {renderPets()}
        </div>
    )
}

export default Pets