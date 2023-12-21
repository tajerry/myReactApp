import '../App.css';
import Message from "../views/Message";
import {useEffect } from "react";
import {getPostById} from "../services/firebase";
import { remove} from "firebase/database";
import {getPostsFirebase} from "../store/posts/actions/getPostsFirebase";
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../store/posts/actions/deletePost";
function MessageContainer(chatId) {
    const messages = useSelector((store) => store.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsFirebase());
    }, []);
    const deleteMessage = (e) => {
        const id = e.target.id;
        remove(getPostById(id));
        dispatch(deletePost(id));
    }
    const messageList = messages.filter(message => message.chatId === chatId.chatId);
        return(
            <Message deleteMessage={deleteMessage} messageList={messageList} />
        );
}
export default MessageContainer;

