import {List, ListItem, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";

function Profile ({count, user, setShowName, showName, setCount, handleChange, setName, name}){
    return(
        <div className={'profile'}>
            <List  sx={{maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem
                    disableGutters
                >
                    <div style={{padding:'20px', margin:'0 auto' }}>
                        <ListItemText primary={`Имя: ${user.name} `}/>
                        <ListItemText primary={`Email: ${user.email} `}/>
                        <ListItemText primary={`ID: ${user.id}`} />
                        <Button id={user.id} >Delete</Button>
                    </div>
                </ListItem>
            </List>
            <h4>Profile</h4>
            <input
                type="checkbox"
                onChange={setShowName}
            />
            <span>Show name</span>
            {showName && <div>{name}</div>}
            <h4 onClick={setCount}>+</h4>
            <div>{count}</div>
            <input type="text"  onChange={handleChange}/>
            <button onClick={setName}>Ввести имя</button>
        </div>
    )
}
export default Profile

