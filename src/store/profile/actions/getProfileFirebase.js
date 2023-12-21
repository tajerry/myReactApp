import {fireBaseAuth, userRef} from "../../../services/firebase";
import {onValue} from "firebase/database";
import {setProfile} from "./setProfile";
export const getProfileFirebase = () => async (dispatch, getState) => {
    try {
        await  onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data){
                const newProfiles = Object.entries(data).map((item) => ({
                    id: item[0],
                    ...item[1]
                }));
                const user = fireBaseAuth.currentUser;
                const currentUser = newProfiles.filter((profile => profile.email === user.email));
                dispatch(setProfile(currentUser));
            }
            else{console.log('Error')}
        });
    }
    catch (error){
        console.log(error);
    }
}
