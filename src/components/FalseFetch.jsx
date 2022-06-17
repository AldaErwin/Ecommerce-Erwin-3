import {data} from '../Utils/FalseJson'

//  Se simula la solicitud de datos (Delay de 3 segundos)


let is_ok = true;

const FalseFetch = () => {                               // Simulamos el delay de una request a una api, por eso utilizamos esta funcion y solicitamos la data desde un archivo local
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (is_ok){
            resolve(data);
        } else {
            reject("Error");
        }
    },1000)
    })
}

export default FalseFetch

