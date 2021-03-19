import * as ActionTypes from '../actionTypes';

const initialState = {
    isLoading: true,
    errMess: null,
    movies: []
};

export const Movies = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MOVIES:
            return { ...state, isLoading: false, errMess: null, movies: action.payload };

        case ActionTypes.MOVIES_LOADING:
            return { ...state, isLoading: true, errMess: null, movies: [] }

        case ActionTypes.MOVIES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};