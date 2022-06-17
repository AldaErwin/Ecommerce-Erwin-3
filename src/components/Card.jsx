import React from 'react'
import {Link} from 'react-router-dom'

import ItemCounter from './ItemCounter'

//Card se construye con los datos de Arriba y se le suma un componente ItemCounter

// tiene 2 Links, de Router Dom, uno para darle funcionalidad a la imagen y otro para redireccionar al detail

function Card (props){
        return (
            <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                <Link to={`/iPhone/Model/${props.iPhoneModel}/${props.id}/Detail`}>  {/*//Link para Routear los Details de los Modelos */} 
                <div className="overflow-hidden">
                    <img className="w-100 cardImage" src={props.image} alt="" />
                </div>
                </Link>
                    <span>{props.title}</span>
                    <span>Stock: {props.stock}</span>
                    <ItemCounter
                    item={props}
                    />
            </div>
        )
}



export default Card





