import { useState, createContext, React } from 'react'

export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const[cartList,setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        const inCart = cartList.find((itemInCart) => itemInCart.id === item.id)

        if (inCart){
            setCartList(
                cartList.map((itemInCart) => {
                    if (itemInCart.id === item.id) {
                        return {...inCart, cantItem: inCart.cantItem + cantidad}
                    } else return itemInCart;
                })
            )
        } else {
            setCartList( [...cartList, {...item, cantItem: cantidad}])
        }
    }
        

    const quitarItem = (item) => {
        const inCart = cartList.find((itemInCart) => itemInCart.id === item.id)

        if (inCart.cantItem === 1) {
            setCartList(
                cartList.filter((itemInCart) => itemInCart.id !== item.id)
            )
        } else {
            setCartList(
                cartList.map((itemInCart) => {
                if (itemInCart.id === item.id){
                return {...inCart, cantItem: inCart.cantItem - 1}
                }else return itemInCart;
            })
            )
        }
    }
       
    const precioTotal = () => {
        return cartList.reduce((contador,item) => contador + (item.cantItem * item.price), 0)
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            quitarItem,
            precioTotal
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;