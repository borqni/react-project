import React, { Component } from 'react'
import styles from './index.module.css'

const Submit = ({ title, onClick }) => {
    return (
        <button type="submit" className={styles.submit} onClick={onClick} >{title}</button>
    )
}

export default Submit