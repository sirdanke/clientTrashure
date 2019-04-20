import axios from 'axios'

export function UserLogin(email, password) {
    return dispatch => {
        dispatch({ type : 'IS_LOADING'})

       return  axios
            .get(`http://localhost:3000/user?email=${email}`)
            .then(({data})=> {
                dispatch({type : 'LOGIN_SUCCESS'})
            })
            .catch(({response})=> {
                console.log(response, "=====");
                
                // dispatch({type : 'LOGIN_FAILED', payload: response.data.message})
            })
    }
}