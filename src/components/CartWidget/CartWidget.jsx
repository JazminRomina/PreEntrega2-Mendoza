import image from "../../assets/carrito.png"
import styles from "./CartWidget.module.css"

export const CartWidget = (props) => {
  return (
    <div className={styles.carrito}>
      <div className={styles.carritoSeparar}>
      <img className={styles.imgCarrito} src={image} alt="carrito de compras" />
      </div>
      <div className={styles.carritoSeparar}>
      <p className={styles.numerito}>{props.amount}</p>
      </div>
    </div>
  )
}