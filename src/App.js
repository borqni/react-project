import React from 'react'
import Header from './components/header'
import Posts from './components/posts'
import Pets from './components/pets'
import Footer from './components/footer'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app} >
      <Header />
      <Posts />
      <Pets />
      <Footer />
    </div>
  );
}

export default App;