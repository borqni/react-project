import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, value, onChange, type }) => {
    return (
        <div className={styles.field}>
            <label htmlFor={id}>
                {label}: 
                <input type={type || 'text'} value={value} onChange={onChange} id={id} />
            </label>
        </div>
    )
}

export default Input