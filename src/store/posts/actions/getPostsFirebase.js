import {postRef} from "../../../services/firebase";
import {onValue} from "firebase/database";
import {setPost} from "./setPost";

export const getPostsFirebase = () => async (dispatch, getState) => {
    try {
        await  onValue(postRef, (snapshot) => {
            const data = snapshot.val();
            if (data){
                const newPosts = Object.entries(data).map((item) => ({
                    id: item[0],
                    ...item[1]
                }));
                dispatch(setPost(newPosts));
            }
        });
    }
    catch (error){
        console.log(error);
    }
}
