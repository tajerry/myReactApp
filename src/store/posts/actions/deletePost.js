import {POST_INPUT_TYPING} from "./inputPost";

export const DELETE_POST = 'DELETE_POST';

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});
