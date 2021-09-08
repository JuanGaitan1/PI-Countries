import axios from 'axios';


export function getPaises() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/paises");
        return dispatch({
            type:'GET_PAISES',
            payload: json.data
        })
    } 
}
export function filtradoPaises(payload) {
    return{
        type:'FILTER_BY_CONTINENTE',
        payload
    }
}
export function filtradoPoblacion(payload) {
    return{
        type: 'FILTER_BY_POBLACION',
        payload
    }
}
export function filtradoAlfa(payload) {
    return{
        type: 'FILTER_BY_ALFA',
        payload
    }
}