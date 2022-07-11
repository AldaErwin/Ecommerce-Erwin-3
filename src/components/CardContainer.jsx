import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import '../App.css';

import Cards from './Cards'

//  Se dibujan los datos en CardConteiner por eso (se solicitan Cards)

function CardContainer() {
    const {nroModeloiPhone} = useParams("");  
    const [productos,setProductos] = useState([]);
    console.log(productos)
    
    /* useEffect(() => {
        
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        getDocs(queryCollection)
            .then(data => setProductos (data.docs.map (item => ({id: item.id, ...item.data()}))))
            
     },[]) */
   
     useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
     
        if (nroModeloiPhone) {
            // filtrado
            const queryCollectionFilter = query( queryCollection, where( 'iPhoneModel', '==', nroModeloiPhone) ) 
            getDocs(queryCollectionFilter)
            .then( data => setProductos( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
        } else {
            getDocs(queryCollection)
            .then( data => setProductos( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
        }
     }, [nroModeloiPhone])



        /* if(nroModeloiPhone !== undefined){
            const filterByName = props.products.filter(function (product) { 
                return product.iPhoneModel === nroModeloiPhone              
            })
            setProductos(filterByName);
        } else{
            setProductos(props.products);                                    // si es undefined, la data viene sin filtro desde props

        }

    },[nroModeloiPhone, props.products]); */


    

    return (
        <div className="container">
            <div className="row">
                <Cards
                    products={productos}
                />

            </div>
        </div>
    )
}

export default CardContainer


