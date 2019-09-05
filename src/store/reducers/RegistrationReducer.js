import {userConstants} from '../actions/types/index';

export function Registration(state={},action){
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return{registering:true};
            default:
                return state
    }
}