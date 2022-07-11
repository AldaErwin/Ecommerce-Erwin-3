import {React} from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import CardContainer from './components/CardContainer'
import ItemDetailContainer from './components/ItemDetailConteiner'
import Chart from './components/Chart'
import CartContextProvider from './context/CartContext'
import 'react-toastify/dist/ReactToastify.css';



function App() {                                                                

    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/" element = {<CardContainer/>}/>
                        <Route path="/iPhone/Model/" element = {<CardContainer />}/>
                        <Route path="/iPhone/Model/:nroModeloiPhone" element = {<CardContainer />}/>
                        <Route path="/iPhone/Model/:nroModeloiPhone/:id/Detail" element = {<ItemDetailContainer/>}/>
                        <Route path="/Chart" element = {<Chart/>}/>
                    </Routes> 
            </BrowserRouter>
            <ToastContainer />
        </CartContextProvider>
    )
}

export default App