import {userConstants} from '../types/index';

export const userActions ={
   register
}

function register(user) {
    console.log(user)
    return dispatch => {
        dispatch(request(user));
    };

    function request(user) {
        console.log(user)
         return { 
             type: userConstants.REGISTER_REQUEST,
              user 
            }
        }
    
}
