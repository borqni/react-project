import React from 'react';
import Header from './components/header'
import Footer from './components/footer'

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app} >
      <Header />
      <Footer/>
    </div>
  );
}

export default App;