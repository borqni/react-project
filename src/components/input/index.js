import React from 'react'
import styles from './index.module.css'
// import Title from '../../components/title'
// import Submit from '../../components/submit-button'
// import Container from "../../components/container";

const Input = ({ label, id, value, onChange, type }) => {
    return (
        <p className={styles.field}>
            <label htmlFor={id}>
                {label}:
                <input type={type || 'text'} value={value} onChange={onChange} id={id} />
            </label>
        </p>
    )
}

export default Input