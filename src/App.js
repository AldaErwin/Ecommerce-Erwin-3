import {React, useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'

import CardContainer from './components/CardContainer'
import ItemDetailContainer from './components/ItemDetailConteiner'
import FalseFetch from './components/FalseFetch'
import Chart from './components/Chart'
import CartContextProvider from './components/CartContext'


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        FalseFetch()
            .then(datos => setData(datos))
            .catch(err => console.log(err))
    },[]);                                                                  

    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
        <Routes>
            <Route path="/" element = {<CardContainer products={data} />}/>
            <Route path="/iPhone/Model/" element = {<CardContainer products={data} />}/>
            <Route path="/iPhone/Model/:nroModeloiPhone" element = {<CardContainer products={data} />}/>
            <Route path="/iPhone/Model/:nroModeloiPhone/:nroIdiPhone/Detail" element = {<ItemDetailContainer phoneModel={data}/>}/>
            <Route path="/Chart" element = {<Chart/>}/>
        </Routes> 
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default App