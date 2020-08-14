import React, { Component } from 'react'
import styles from './index.module.css'

const Button = ({ title, href }) => {
    return (
        <a className={styles.btn} href={href}>{title}</a>
    )
}

export default Button