import '../App.css';
import {IconButton, List, ListItem, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
function Message(messageList, deleteMessage) {
    if (messageList.messageList){
        return(
            <div className={'messageList'}>
                <List  sx={{maxWidth: 360, bgcolor: 'background.paper'}}>
                    {messageList.messageList.map((value, id) => (
                        <ListItem
                            key={id}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                </IconButton>
                            }
                        >
                            <div>
                                <Link to={'/message/'+ value.id}>
                                    <ListItemText primary={`ID: ${value.id} `}/>
                                </Link>
                                <ListItemText primary={`CHAT_ID: ${value.chatId} `}/>
                                <ListItemText primary={`Автор: ${value.author} `}/>
                                <ListItemText primary={`Текст: ${value.text}`} />
                                <Button id={value.id} onClick={messageList.deleteMessage}>Delete</Button>

                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}
export default Message;

