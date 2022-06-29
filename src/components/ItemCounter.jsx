import { React, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { toast } from 'react-toastify';
import {CartContext} from '../context/CartContext'
import swal from 'sweetalert';

//  Eliminado GrFormTrash
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function ItemCounter(props) {
    
    const [itemCount, setItemCount] = useState(0);      // Estado inicial del Contador
    const [itemInChart, setItemInChart] = useState(0);  
    const [itemId] = useState(props.item);   // Id del item que se esta mostrando

    console.log(itemId)
    const test = useContext(CartContext);

    let stock = 10;
    const Incrementar = () => {                                 // si el boton se pulsa, Incrementa el State del Contador
        if (stock > itemCount) {
            setItemCount(itemCount + 1)
            noti()
        }
    }
    const Decrementar = () => {                                 // si el boton se pulsa, Decrementa el State del Contador
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }
    const Vaciar = () => { setItemCount(0) }                      // si el boton se pulsa, vuelve a 0 el State del Contador
    const noti = () => toast.success('😄 Se agregó un producto!!!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        });
    const AgregarAlCarrito = () => {                            //  Con un Switch muestro un Mje al usuario para hacerle saber cuantos items agrego al carrito           
        

        switch (itemCount) {
            case 0:
                swal("Error al agregar! ⛔️", "Seleccione los Productos que quiere agregar al carrito")
                break;
            case 1:
                swal({
                    title: "Producto agregado con éxito",
                    text: "Clickea abajo para ir al carrito",
                    icon: "success",
                    button: "OK" ,
                  })
                setItemInChart(itemCount);
                test.addToCart(itemId,itemCount);
                break;
            default:
                swal({
                    title: "Productos agregado con éxito",
                    text: "Clickea abajo para ir al carrito",
                    icon: "success",
                    button: "OK",
                  })
                setItemInChart(itemCount);
                test.addToCart(itemId,itemCount);
                break;
        }
    }

    return (
        itemInChart === 0                          // Operador Ternario para saber si llegan los datos y que estos aparezcan o de lo contrario se dibuje un <p>
            ?
            <div className="container py-3">
                <div className="row d-flex justify-content-center">


                    <button onClick={Decrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar btn-outline-primary">
                        <span><GrFormSubtract /></span>
                    </button>

                    <button onClick={Vaciar} className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger">
                        <span>{itemCount}</span>
                    </button>

                    <button onClick={Incrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar btn-outline-success">
                        <span id="spanIncrementar"><GrFormAdd /></span>
                    </button>

                    <button onClick={AgregarAlCarrito} className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito btn-outline-primary">
                        <span><HiOutlineShoppingCart /></span>
                    </button>
                </div>
            </div>
            :
            <div className="container py-3">
                <div className="row d-flex justify-content-center text-center">
                    <Link to='/Chart'><button className="btn-outline-success col-10 col-sm-10 col-md-10 col-lg-10 py-2"><span>Ir al Checkout</span></button></Link>
                </div>
            </div>

    )
}



export default ItemCounter
