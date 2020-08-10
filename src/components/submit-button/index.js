import React, { Component } from 'react'
import styles from './index.module.css'

const Submit = ({ title, onClick }) => {
    return (
        <button type="submit" onClick={onClick} >{title}</button>
    )
}

export default Submit