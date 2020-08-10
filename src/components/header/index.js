import React from 'react'
import Nav from '../navigation'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Header = () => {
    const links = getNavigation()

    return (
        <header className={styles.header}>
            {
                links.map(nav => {
                    return (
                        <Nav key={nav.title} href={nav.link} title={nav.title} type="header" />
                    )
                })
            }
        </header>
    )
}

export default Header