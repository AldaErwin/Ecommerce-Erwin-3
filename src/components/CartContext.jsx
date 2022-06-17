import { useState, createContext, React } from 'react'

export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const[cartList,setCartList] = useState([]);

    const addToCart = (item, cantItem) => {
        setCartList([
            ...cartList,                    // Sin el Spread Operator, el array se sobreescribe cada vez que llegan datos
            {
                item:item.id,
                name:item.iPhoneModel,
                image:item.image,
                price:item.price,
                color:item.color,
                cantItem:cantItem
            }
        ])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}
        >

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;