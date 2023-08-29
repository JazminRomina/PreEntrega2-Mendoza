import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const params = useParams()

  useEffect(() => {
    const getProds = () => {
      fetch('/data/prod.json')
        .then((resp) => resp.json())
        .then((data) => {
          findProd(data)
        })
    }
    const findProd = (data) => {
      const findProd = data.find(prod => prod.id === parseInt(params.id))
      setDetail(findProd)
    }
    getProds()
  }, [params.id])

  return (
    <ItemDetail itemId={detail}/>
  )
}
