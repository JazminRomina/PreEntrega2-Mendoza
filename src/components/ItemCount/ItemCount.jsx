import { useState } from "react"
import styles from './ItemCount.module.css'

export const ItemCount = () => {
  const [count, setCount] = useState(0)

  const maxCart = () => {
    setCount(count+1)
  }

  const minCart = () => {
    count <= 0 ? setCount(0) : setCount(count-1)
  }

  const addCart = () => {
    setCount(0)
  }

  return (
    <div>
        <div className={styles.boxBtn}>
            <button className={styles.btnMaxMin} onClick={minCart}>-</button>
            <p className={styles.number}>{count}</p>
            <button className={styles.btnMaxMin}  onClick={maxCart}>+</button>
            <button className={styles.btnAdd} onClick={addCart}>Add</button>
        </div>
    </div>
  )
}
