import {chatRef, postRef} from "../../../services/firebase";
import {onValue} from "firebase/database";
import {addChat} from "./add_chat";

export const getChatsFirebase = () => async (dispatch, getState) => {
    try {
        await  onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            if (data){
                const newChats = Object.entries(data).map((item) => ({
                    id: item[0],
                    ...item[1]
                }));
               dispatch(addChat(newChats));
            }
        });
    }
    catch (error){
        console.log(error);
    }
}
