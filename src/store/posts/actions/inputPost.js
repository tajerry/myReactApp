export const POST_INPUT_TYPING = 'POST_INPUT_TYPING';
export const POST_INPUT_CLEAR = 'POST_INPUT_CLEAR';
export const inputPost = (inputs) => ( {
    type: POST_INPUT_TYPING,
    payload: inputs
});
export const inputPostClear = () => ( {
    type: POST_INPUT_CLEAR
});

