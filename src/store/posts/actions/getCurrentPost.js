export const GET_POST = 'GET_POST';

export const getCurrentPost = (id) => ({
    type: GET_POST,
    payload: id
});
