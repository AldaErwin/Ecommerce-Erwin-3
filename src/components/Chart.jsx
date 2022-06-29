import { React, useContext } from 'react'
import { Figure } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { GoTrashcan } from 'react-icons/go'




function Chart() {
    const test = useContext(CartContext);
    
    function QuitarItem(id){
        const quitarPorId = test.cartList.find(modelId => modelId.item === id) 

        test.cartList.splice(test.cartList.indexOf(quitarPorId),1)   // El Metodo splice me deja borrar el un objeto sabiendo su index en el array y tambien recibe el segundo parametro en este caso "1" para borrar solo ese onjeto
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
                                    <div className='col-sm'>
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
                                                alt={item.name}
                                                src={item.image} 
                                            />
                                        </Figure>
                                        </th>
                                        <td className=''>{item.name}</td>
                                        <td className=''>{item.color}</td>
                                        <td className=''>{item.cantItem}</td>
                                        <td className=''>{'$'}{item.price * item.cantItem}</td>
                                        <td> 
                                            <button onClick={() => QuitarItem(item.id)} className='btn text-danger' id='basura'><GoTrashcan size={"1.7em"}/></button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
                </>
            :
            <>
            <h1 className="text-center pt-3">Carrito</h1>
            <p className="text-center pt-3">Aun no se agregaron productos al carrito</p>          
            </>
    )

}

export default Chart

