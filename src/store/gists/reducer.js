import {SET_GISTS} from "./actions/setGists";
import {SET_LOADING} from "./actions/setLoading";
import {SET_ERROR} from "./actions/setError";
import {REMOVE_GISTS} from "./actions/removeGists";

const initialState = {
    gists:[],
    loading:false,
    error: null
}
export const gistsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_GISTS:
            return {
                ...state,
                gists:  action.payload
            }
        case REMOVE_GISTS:
            return {
                ...state,
                gists: []
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

