import React from 'react'
import { useParams } from 'react-router';

import '../App.css';

import ItemCounter from './ItemCounter';

function ItemDetailContainer(props) {
    const {nroIdiPhone} = useParams(); // Obtengo el Id que se lee desde el Link de RouterDom, al la hora de hacer click en el componente Card
    const filterById = props.phoneModel.find(modelId => modelId.id === parseInt(nroIdiPhone))  // Con el Metodo Find, extraigo un objeto de la lista que vino por props y obtengo el que tenga el id que vino por Params 
    return (
        <div className="container">
            <div className="row -d flex align-items-center text-center">
                <img className="Producto col-12 col-sm-12 col-md-6 col-lg-6" src={filterById.image} alt="" />
                <div className="Producto col-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="my-5" >{"iPhone " + filterById.iPhoneModel + " | " + filterById.color + " | " + filterById.storage}</h2>
                    <p  className="my-5" >
                    El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB.
                    </p>
                    <h3>Stock: {filterById.stock}</h3>
                    <ItemCounter
                    item={filterById}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer


