import React from 'react'
import styles from './index.module.css'
// import Posts from './components/posts'
import Header from '../header'
import Footer from '../footer'

const Container = (props) => {
    return (
        <div className={styles.app} >
            <Header />

            <div className={styles.container}>
                {/* <Aside/> */}
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

export default Container;