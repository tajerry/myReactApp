import {ADD_CHAT} from "./actions/add_chat";
import {CHAT_INPUT_CLEAR, CHAT_INPUT_TYPING} from "./actions/inputChat";
import {DELETE_CHAT} from "./actions/removeChat";
const initialState = {
    chatList: [],
    inputChat: {},
};
export const chatsReducer = (state = initialState, action) =>{
    switch (action.type){
        case CHAT_INPUT_TYPING:
            return {...state,
                inputChat: {...state.inputChat, ...action.payload}}
        case CHAT_INPUT_CLEAR:
            return {...state,
                inputChat: {}
            }
        case ADD_CHAT:
            return {
                ...state,
                chatList: action.payload
            }
        case DELETE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter(chat => chat.id !== action.payload)
            }
        default:
            return state;
    }
}
