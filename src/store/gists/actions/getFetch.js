import {setLoading} from "./setLoading";
import {setGists} from "./setGists";
import {setError} from "./setError";
export const getFetch =  () => async(dispatch, getState) => {
    dispatch(setLoading(true))
    try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
        if(response.ok) {
            const data = await response.json();
            dispatch(setGists(data));
        }
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false))
    }
}
