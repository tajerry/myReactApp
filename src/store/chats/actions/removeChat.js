
export const DELETE_CHAT = 'DELETE_CHAT';
export const removeChat = (id) => ({
    type: DELETE_CHAT,
    payload: id
});
