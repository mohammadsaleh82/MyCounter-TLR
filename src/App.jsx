 import { useState } from 'react';
// import './App.css';
import styles from './App.module.css'
import Counter from './Components/Counter';

function App() {
  const [count,setCount]=useState(0)

  const increaseCount=()=>{
    setCount(count+1)
  }
  const decreaseCount=()=>{
    setCount(count-1)
  }
  const resetCount=()=>{
    setCount(0)
  }
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
       <h1>شمارنده من</h1>
      </header>
      <Counter inc={increaseCount} dec={decreaseCount} reset={resetCount} count={count} />
    </div>
  );
}

export default App;
