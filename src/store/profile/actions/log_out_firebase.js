import {loginOut} from "../../../services/firebase";
import {logOut} from "./log_out";


export const logOff = () => async (dispatch) => {
    try {
        await loginOut();
        dispatch(logOut());
    }
    catch (error){
        console.log(error);
    }

}
