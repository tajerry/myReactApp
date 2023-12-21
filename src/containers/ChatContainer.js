import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../store/chats/actions/add_chat";
import {inputChat, inputChatClear} from "../store/chats/actions/inputChat";
import Chat from "../views/Chat";
import {onValue, push, remove} from "firebase/database";
import {chatRef, getChatById} from "../services/firebase";
import {useEffect, useState} from "react";
import {getChatsFirebase} from "../store/chats/actions/getChatsFirebase";
import {removeChat} from "../store/chats/actions/removeChat";

const ChatContainer = () => {
    const dispatch = useDispatch();
    const inputsChat = useSelector((store) => store.chatsReducer.inputChat);
    const chats = useSelector((store) => store.chatsReducer.chatList);
    useEffect(() => {
        dispatch(getChatsFirebase());
    }, []);
    const handlerFormChat = (event) => {
        event.preventDefault();
        push(chatRef, {
            ...inputsChat
        });
        dispatch(inputChatClear());
    }
    const deleteChat = (e) => {
        const id = e.target.id;
        remove(getChatById(id));
        dispatch(removeChat(id));
    }
    const handleInputChat = (event) => {
        dispatch(inputChat({[event.target.name]: event.target.value}));
    }
    return(
        <Chat deleteChat={deleteChat} handlerFormChat={handlerFormChat} chats={chats} handleInputChat={handleInputChat}/>
    )
}
export default ChatContainer
