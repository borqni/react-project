import React from 'react'
import Nav from '../navigation'
import styles from './index.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <section className={styles.left}>
                    <Nav href="#" title="Новини" />
                    <Nav href="#" title="Добави новина" />
                    <Nav href="#" title="Животни" />
                    <Nav href="#" title="Добави животно" />
                </section>
                <section className={styles.right}>
                    <Nav href="#" title="Профил" />
                    <Nav href="#" title="Изход" />
                    <Nav href="#" title="Регистрация" />
                    <Nav href="#" title="Вход" />
                </section>
            </ul>
        </header>
    )
}

export default Header