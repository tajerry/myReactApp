import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Form from "./Form";
import {inputPost, inputPostClear} from "../store/posts/actions/inputPost";
import {push} from "firebase/database";
import {postRef} from "../services/firebase";
function ItemChat(){
    // получаем параметры
    const dispatch = useDispatch();
    const params = useParams();
    const chats = useSelector(state => state.chatsReducer.chatList);
    const inputs = useSelector((store) => store.postReducer.inputPost);
    const handlerForm = (event) => {
        event.preventDefault();
        const chatId = params.id;
        inputs.chatId = chatId;
        push(postRef, {
            ...inputs
        });
        dispatch(inputPostClear());
    }
    const handleInputs = (event) => {
        dispatch(inputPost( {
            [event.target.name]: event.target.value
        }));
    }
    return (
        <Form chatId={params.id}  handleInputs={handleInputs} handlerForm={handlerForm} >
            <h2>Чат  Chat </h2>
        </Form>
    )
}
export default ItemChat
