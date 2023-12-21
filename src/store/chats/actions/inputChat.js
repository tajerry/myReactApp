import {POST_INPUT_CLEAR} from "../../posts/actions/inputPost";

export const CHAT_INPUT_TYPING = 'CHAT_INPUT_TYPING';
export const CHAT_INPUT_CLEAR = 'CHAT_INPUT_CLEAR';
export const inputChat = (inputChat) => ( {
    type: CHAT_INPUT_TYPING,
    payload: inputChat
});
export const inputChatClear = () => ( {
    type: CHAT_INPUT_CLEAR
});
