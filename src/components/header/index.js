import React from 'react'
import Nav from '../navigation'
import styles from './index.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                {/* <Nav href="#" title="logo" /> */}
                <Nav href="#" title="Zoo news" />
                <Nav href="#" title="All Pets" />
                <Nav href="#" title="Profile" />
                <Nav href="#" title="Logout" />
                <Nav href="#" title="Register" />
                <Nav href="#" title="Login" />
            </ul>
        </header>
    )
}

export default Header