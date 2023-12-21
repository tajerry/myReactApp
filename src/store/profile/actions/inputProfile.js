export const PROFILE_INPUT_TYPING = 'PROFILE_INPUT_TYPING';
export const PROFILE_INPUT_CLEAR = 'PROFILE_INPUT_CLEAR';
export const inputProfile = (inputs) => ( {
    type: PROFILE_INPUT_TYPING,
    payload: inputs
});

