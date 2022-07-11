import { React, useContext, useState } from 'react'
import { Figure} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { GoTrashcan } from 'react-icons/go'
import { addDoc, collection, getFirestore } from 'firebase/firestore';




function Chart() {
    const test = useContext(CartContext);
    const {quitarItem, precioTotal} = useContext(CartContext);
    const [OrdenesHisto,setOrdenesHisto] = useState([]);
    console.log(test.cartList)

    function generarOrden(e){
        e.preventDefault()
        let orden= {}

        orden.buyer = {name: 'Erwin', email:'E@gmail.com', phone:'123456789'}
        orden.total = precioTotal()
        orden.items = test.cartList.map(itemInCart => {
            const id = itemInCart.id
            const nombre = itemInCart.iPhoneModel
            const precio = itemInCart.price*itemInCart.cantItem
            const cantidad = itemInCart.cantItem

            return {id, nombre, precio, cantidad}
        })

        const db = getFirestore()
        const orderCollection = collection(db, 'Ordenes')
        addDoc(orderCollection, orden)
        .then(resp => setOrdenesHisto(resp.id))

    }
    
    
   
    
    return (
        test.cartList.length > 0       // Operador Ternario para saber si llegan los datos y que estos aparezcan o de lo contrario se dibuje un <p>
            ?
            
                <>
                <div className='container-xl'>
                    <div className='table-responsive'>
                        <div className='table-wrapper'>
                            <div className='table-title container align-items-center text-center'>
                                <div className='row'>
                                    <div className='col-x-sm'>
                                        <h2><b>Carrito</b></h2>
                                    </div>
                                </div>
                            </div>
                            <table className='table table-striped table-hover align-items-center text-center'>
                            <thead>
                                <tr>
                                    <th className=''>Imágen</th>
                                    <th className=''>Nombre</th>
                                    <th className=''>Color</th>
                                    <th className=''>cantidad</th>
                                    <th className=''>Subtotal</th>
                                    <th className=''>Acción</th>
                                </tr>
                            </thead>
                            <tbody className='align-items-center text-center'>
                                {
                                    test.cartList.map((item, index) =>
                                    <tr className='align-items-center text-center'>
                                        <th >
                                        <Figure>
                                            <Figure.Image
                                                width={100}
                                                height={120}
                                                alt={item.iPhoneModel}
                                                src={item.image} 
                                            />
                                        </Figure>
                                        </th>
                                        <td className=''>{item.iPhoneModel}</td>
                                        <td className=''>{item.color}</td>
                                        <td className=''>{item.cantItem}</td>
                                        <td className=''>{'$'}{item.price*item.cantItem}</td>
                                        <td> 
                                            <button onClick={() => quitarItem(item)} className='btn text-danger' id='basura'><GoTrashcan size={"1.7em"}/></button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                                <tfoot>
                                        <tr>
                                            <th className=''></th>
                                            <th className=''></th>
                                            <th className=''></th>
                                            <th className=''>Total: </th>
                                            <th className=''> {'$'}{precioTotal()}</th>
                                            <th className=''><button onClick={generarOrden} className='btn border btn-primary'> Comprar</button></th>
                                        </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>    
                <h2 ><b>Ultima orden:</b></h2>
                <h2 ><b>ID: {OrdenesHisto}</b></h2>
                </>
            :
            <>
            <h1 className="text-center pt-3">Carrito</h1>
            <p className="text-center pt-3">Aun no se agregaron productos al carrito</p>          
            </>
    )

}

export default Chart

