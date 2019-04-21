import axios from 'axios'
let url = 'http://35.237.249.100'

// 
//  U S E R
// 
export function UserLogin(email, password) {
    return dispatch => {
        dispatch({ type: 'IS_LOADING' })
        return axios
            .get(`${url}`)
            .then(({ data }) => {
                dispatch({ type: 'LOGIN_SUCCESS' })
            })
            .catch(({ response }) => {
                console.log(response, "=====");

                // dispatch({type : 'LOGIN_FAILED', payload: response.data.message})
            })
    }
}
// 
//  T R A S H
// 
export function fecthData() {
    return dispatch => {
        dispatch({ type: 'IS_LOADING' })
        return axios
            .get(`${url}`, {
                headers: {
                    Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmMwYzY3OTQ5ZmY4MGVkOWE3MWY4YSIsIm5hbWUiOiJBZGkgUHJhc2V0eWEgUHV0cmEiLCJlbWFpbCI6ImFkaXBAbWFpbC5jb20iLCJpYXQiOjE1NTU4Mjc4NDN9.a-DhYHcovPC44zmRtPh0K3nUK4nRVsM_yxj1uhWIlzY'
                }
            })
            .then(({ data }) => {
                console.log('--------');
                console.log();

                dispatch({ type: "GET_DATA_SUCCESS", payload: data.data })
            })
            .catch(({ response }) => {
                console.log(response, "=====");

                // dispatch({type : 'LOGIN_FAILED', payload: response.data.message})
            })
    }
}

export function sendRawData(object) {
    console.log(JSON.stringify(object.base64), "===masuk");

    return dispatch => {
        try {
            axios
                .post(`${url}/`, { path: object.base64 },
                    {
                        headers: {
                            Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmMwYzY3OTQ5ZmY4MGVkOWE3MWY4YSIsIm5hbWUiOiJBZGkgUHJhc2V0eWEgUHV0cmEiLCJlbWFpbCI6ImFkaXBAbWFpbC5jb20iLCJpYXQiOjE1NTU4Mjc4NDN9.a-DhYHcovPC44zmRtPh0K3nUK4nRVsM_yxj1uhWIlzY'
                        }
                    })
                .then(({ data }) => {
                    console.log(data, "==DATA===");

                    dispatch({ type: 'SUCCESS_SEND_DATA' })
                })
                .catch(error => {
                    // console.log(JSON.stringify(error.response), "===ERROR==");

                    // dispatch({type})
                })
        } catch (error) {
            console.log(error, "===ERROR CATCH===");

        }
    }
}