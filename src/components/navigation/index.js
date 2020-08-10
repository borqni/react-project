import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Nav = ({ title, href }) => {
    return (
        <div className={styles.li}>
            <Link href={href} className={styles.a}>
                {title}
            </Link>
        </div>
    )
}

export default Nav