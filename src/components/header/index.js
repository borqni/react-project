import React, { Component } from 'react'
import Nav from '../navigation'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'
import { Link } from 'react-router-dom'

class Header extends Component {

    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <header className={styles.header}>
                {
                    links.map(nav => {
                        return (
                            <Nav
                                key={nav.title}
                                href={nav.link}
                                title={nav.title}
                                type="header"
                            />
                        )
                    })
                }
            </header>
        )
    }
}

export default Header