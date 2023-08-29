import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({itemId}) => {
  return (
    <div className={styles.divProd}>
        <div className={styles.divContainer}>
            <img className={styles.prodImg} src={itemId.imagen} alt={itemId.nombre} />
        </div>
        <div className={styles.divContainer}>
            <p className={styles.titleProd}>{itemId.nombre}</p>
            <p className={styles.descProd}>Price: ${itemId.precio}</p>
            <p className={styles.descProd}>Category: {itemId.categoria}</p>
            <p className={styles.descProd}>Description: {itemId.descripcion}</p>
            <ItemCount/>
        </div>
    </div>
  )
}
