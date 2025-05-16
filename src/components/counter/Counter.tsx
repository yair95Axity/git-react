import React, { useState } from 'react'
import styles from './Counter.module.css'

export const Counter = () => {
 
    const [counter, setCounter] = useState(0);

    return (
        <div className={styles.counter}>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
    );
}
