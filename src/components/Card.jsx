import React from 'react'
import {Link} from 'react-router-dom'

import ItemCounter from './ItemCounter'



function Card (props){
        return (
            <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                <Link to={`/iPhone/Model/${props.iPhoneModel}/${props.id}/Detail`}>
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





