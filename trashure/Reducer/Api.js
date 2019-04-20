
const initialState = {
    error: false,
    loading: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'IS_LOADING':
            return { ...state, loading: true }
        case 'IS_ERROR' :
            return  {... state, error: true}
        case 'LOGIN_SUCCESS' : 
            return { ...state, loading: false}
        default:
            return state
    }
}