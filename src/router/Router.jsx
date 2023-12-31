import {NavBar} from '../components/NavBar/NavBar'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'

export function Router () {
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    )
}