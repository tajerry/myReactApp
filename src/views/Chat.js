import '../App.css';
import {List, ListItem, ListItemText, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
const Chat = ({handleInputChat, handlerFormChat, chats, deleteChat}) =>{
    if(chats){
        return(
            <div>
                <div className={'Form'}>
                    <form className={'formForm'} action="">
                        <label>Название чата</label>
                        <TextField id="outlined-basic" label="Chat" variant="outlined" name="chat" onChange={handleInputChat}   />
                        <Button className={"submit"} type={"submit"} onClick={handlerFormChat} variant="contained">Добавить</Button>
                        <div className={'chat'}>
                            <List  sx={{maxWidth: 360, bgcolor: 'background.paper' }}>
                                {chats.map((value, id) => (
                                    <ListItem
                                        key={id}
                                        disableGutters
                                    >
                                        <div style={{padding:'20px', margin:'0 auto' }}>
                                            <Link to={'/chat/'+ value.id}>
                                                <ListItemText primary={`Имя: ${value.chat} `}/>
                                                <ListItemText primary={`ID: ${value.id}`} />
                                            </Link>
                                            <Button id={value.id} onClick={deleteChat}>Delete</Button>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Chat;

