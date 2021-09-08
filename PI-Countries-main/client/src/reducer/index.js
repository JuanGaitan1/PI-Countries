
const inicioState = {
    paises: [],
    allPaises: []
}
//guardo dos veces los paises para que cuando los busque en options no se me pise paises con los paises filtrados
function rootReducer (state = inicioState, action) {
    switch(action.type){
    case 'GET_PAISES':
        return{
            ...state,
            paises: action.payload,
            allPaises : action.payload
        }
    case 'FILTER_BY_CONTINENTE':
    const allPai = state.allPaises
        const estadoFiltrado = action.payload === 'All' ? allPai : allPai.filter(el => el.continente === action.payload)
        return{
            ...state,
            paises: estadoFiltrado
        }
    case 'FILTER_BY_POBLACION':
    const poblacion = action.payload === 'desendente' ? state.paises.sort((a,b) => a.poblacion - b.poblacion) :
        state.paises.sort((a,b) => b.poblacion - a.poblacion)
        return{
            ...state,
            paises: poblacion
        }
    case 'FILTER_BY_ALFA':
        const alfaNombre = action.payload === 'asc' ? state.paises.sort(function (a, b) {
        if (a.name > b.name) {
        return 1;     
        }
        if (b.name > a.name) {
        return -1;
        }
        return 0;
        }) : state.paises.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
        })
        return {
            ...state,
            paises: alfaNombre
        }
        default:
            return state;
    }
    
}

export default rootReducer