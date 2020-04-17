import * as ActionTypes from './ActionTypes';
import {DRINKS} from '../shared/drinks'


export const addComment = (drinkId, rating, author, comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: {
        drinkId: drinkId,
        rating: rating,
        author: author,
        comment: comment
    }
});


export const fetchDrinks = () => (dispatch) => {

    dispatch(drinksLoading(true));

    setTimeout(() =>{
        dispatch(addDrinks(DRINKS));
    }, 200);
};


export const drinksLoading = () => ({
    type: ActionTypes.DRINKS_LOADING
});


export const drinksFailed = (errmsg) => ({
    type: ActionTypes.DRINKS_fAILED,
    payload: errmsg
});


export const addDrinks = (drinks) => ({
    type: ActionTypes.ADD_DRINKS,
    payload: drinks
});