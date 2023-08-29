import styles from "./ItemListContainer.module.css"
import {useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const params = useParams()

  useEffect(() => {
    const getProds = () => {
      fetch('/data/prod.json')
        .then((resp) => resp.json())
        .then((data) => {
          filterProd(data)
        })
    }

    const filterProd = (data) => {
      const filter = data.filter(prod => prod.categoria === params.id)
      if(filter.length > 0) return setProducts(filter)
      setProducts(data)
    }
    getProds()
  }, [params.id])

  return (
    <div className={styles.gridProd}>
      {
        products.map(item => (
          <div key={item.id} className={styles.prodDiv}>
            <div>
              <img className={styles.imgProd} src={item.imagen} alt={item.nombre} />
            </div>
            <div className={styles.detailProd}>
              <p className={styles.titleProd}>{item.nombre}</p>
              <p className={styles.desProd}>{item.descripcion}</p>
              <Link to={`/item/${item.id}`}>
                <button className={styles.botonProd}>View More</button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}
