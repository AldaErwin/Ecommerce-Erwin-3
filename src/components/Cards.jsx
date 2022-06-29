import React from 'react';

import Card from './Card'

function Cards(props) {
    return (
    
        props.products.map((product, index) =>
            <Card
                key={index}
                title={"iPhone " + product.iPhoneModel + " | " + product.color + " | " + product.storage}
                color={product.color}
                image={product.image}
                stock={product.stock}
                price={product.price}
                id={product.id}
                iPhoneModel={product.iPhoneModel}
            />
        )
            )
}

export default Cards



