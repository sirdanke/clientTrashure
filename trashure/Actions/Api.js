import axios from 'axios'
let url = 'http://localhost:3000'
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

export function sendRawData(object) {
    console.log(object.latitude,"===masuk");
    
    return dispatch => {
        axios
            .post(`http://localhost:3000/`, {
                path : object.base64,
                location : object.latitude
            })
            .then(({data})=> {
                console.log(data, "=====");
                
                dispatch({type : 'SUCCESS_SEND_DATA'})
            })
            .catch(({response})=> {
                // dispatch({type})
            })
    }
}