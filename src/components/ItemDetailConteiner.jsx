import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import '../App.css';

import ItemCounter from './ItemCounter';

function ItemDetailContainer() {
    const {id} = useParams(); // Obtengo el Id que se lee desde el Link de RouterDom, al la hora de hacer click en el componente Card
    const [producto, setProducto] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, 'Productos', id) 
        getDoc(queryItem) // promesa
        .then(resp => setProducto(  {id: resp.id, ...resp.data()}  ))
    }, [])

    
    return (
        <div className="container">
            <div className="row -d flex align-items-center text-center">
                <img className="Producto col-12 col-sm-12 col-md-6 col-lg-6" src={producto.image} alt="" />
                <div className="Producto col-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="my-5" >{"iPhone " + producto.iPhoneModel + " | " + producto.color + " | " + producto.storage}</h2>
                    <p  className="my-5" >
                    El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB.
                    </p>
                    <h3>Stock: {(producto.stock)}</h3>
                    <ItemCounter
                    item={producto}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetailContainer


