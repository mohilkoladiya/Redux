import Redux, { createStore, applyMiddleware } from 'redux'
const thunkMiddleware = require('redux-thunk').default;
import Axios from 'axios'

const intialState = {
    loading: false,
    users: [],
    error: ''
}

const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR';

const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}

const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }

        case USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error:''
        }
        case USER_ERROR: return {
            loading: false,
            users: [],
            error:action.payload
        }
    }
}
const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(userRequest())
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //response.data
            const users = response.data.map((user)=> user.name)
            dispatch(userSuccess(users))
        })
        .catch(error=>{
            //error.message
            dispatch(userError(error.message))
        })
    }
} 
const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});  
store.dispatch(fetchUser());