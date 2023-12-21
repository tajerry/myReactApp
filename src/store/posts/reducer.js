import {POST_INPUT_CLEAR, POST_INPUT_TYPING} from "./actions/inputPost";
import {SET_POST} from "./actions/setPost";
import {DELETE_POST} from "./actions/deletePost";

const initialState = {
    posts:[],
    inputPost: {}
}
export const postReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_INPUT_TYPING:
            return {...state,
                inputPost: {...state.inputPost, ...action.payload}}
        case POST_INPUT_CLEAR:
            return {...state,
                inputPost: {}}
        case SET_POST:
            return {
                ...state,
                posts: action.payload
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        default: return state;
    }
}

