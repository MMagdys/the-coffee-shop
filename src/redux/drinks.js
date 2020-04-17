import * as ActionTypes from './ActionTypes';


export const Drinks = (state = {
                    isLoading: true,
                    errmsg: null,
                    drinks: []
        }, action) => {

    switch (action.type) {

        case ActionTypes.ADD_DRINKS:
            return{...state, isLoading: false, errmsg: null, drinks: action.payload}

        case ActionTypes.DRINKS_LOADING:
            return{...state, isLoading: true, errmsg: null, drinks: []}

        case ActionTypes.DRINKS_fAILED:
            return{...state, isLoading: false, errmsg: action.payload, drinks: []}

        default:
            return state;
    }
};