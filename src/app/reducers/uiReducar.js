import { types } from "../types/types";

const initialState = {
    authError: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_ERROR:
            return {
                ...state, 
                authError: true
            }    
        default:
            return state;
    }
}


