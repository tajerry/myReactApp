import '../App.css';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {List, ListItem, ListItemText} from "@mui/material";
import {useEffect, } from "react";
import {getPostsFirebase} from "../store/posts/actions/getPostsFirebase";
function ItemMessage({}){
    const posts = useSelector(state => state.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsFirebase());
    }, []);
    // получаем параметры
    const params = useParams();
    const item = posts.filter(post => post.id === params.id)[0];
    if (!item){
        return  <h2>Нет сообщений</h2>
    }
    return (
        <div className={'itemMessage'}>
            <List  sx={{maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ListItem>
                        <div>
                            <Link to={'/message/'+ item.id}>
                                <ListItemText primary={`ID: ${item.id} `}/>
                            </Link>
                            <ListItemText primary={`CHAT_ID: ${item.chatId} `}/>
                            <ListItemText primary={`Автор: ${item.author} `}/>
                            <ListItemText primary={`Текст: ${item.text}`} />
                        </div>
                    </ListItem>
            </List>
        </div>

    )
}
export default ItemMessage
