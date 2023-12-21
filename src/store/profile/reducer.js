import {TOGGLE} from "./actions/toogle";
import {COUNT} from "./actions/count";
import {CHANGE_NAME} from "./actions/change_name";
import {IS_AUTH} from "./actions/auth";
import {LOG_OUT} from "./actions/log_out";
import {PROFILE_INPUT_CLEAR, PROFILE_INPUT_TYPING} from "./actions/inputProfile";
import {SET_PROFILE} from "./actions/setProfile";

const initialState = {
    showName: false,
    name: 'Default',
    count: 0,
    isAuth:false,
    profile: {}
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case PROFILE_INPUT_TYPING:
            return {...state,
                inputProfile: {...state.inputPost, ...action.payload}}
        case PROFILE_INPUT_CLEAR:
            return {...state,
                inputProfile: {}}
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        case TOGGLE:
            return{
                ...state,
                showName: !state.showName
            }
        case COUNT:
            return{
                ...state,
                count: state.count + 1
            }
        case CHANGE_NAME:
            return{
                ...state,
                name: action.payload
            }
        case IS_AUTH:
            return { ...state, isAuth: action.payload }
        case LOG_OUT:
            return { ...state,
                isAuth: false,
            }
        default:
            return state
    }
}

