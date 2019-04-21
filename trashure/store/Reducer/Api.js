
const initialState = {
    error: false,
    loading: false,
    allData: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'IS_LOADING':
            return { ...state, loading: true }
        case 'IS_ERROR':
            return { ...state, error: true }
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false }
        case 'GET_DATA_SUCCESS':
            return { ...state, loading: false, allData: payload }
        default:
            return state
    }
}