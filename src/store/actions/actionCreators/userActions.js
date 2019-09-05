import {userConstants} from '../types/index';

export const userActions ={
    login,
    logout,
    register,
    getall,
    delete:_delete
}

function register(user){
    return dispatch =>{
        dispatch(request(user))
    }

    function request(user){
        return{
            type:userConstants.REGISTER_REQUEST,
            user
        }
    }
}