import React from 'react'
import styles from './index.module.css'

const Nav = ({ title, href }) => {
    return (
        <li className={styles.li}>
            <a href={href} className={styles.a}>
                {title}
            </a>
        </li>
    )
}

export default Nav