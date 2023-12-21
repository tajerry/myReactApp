import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ChatContainer from "../containers/ChatContainer";
import ProfileContainer from "../containers/ProfileContainer";
import Message from "../views/Message";
import ItemChat from "./ItemChat";
import ItemMessage from "./ItemMessage";
import GistsList from "./GistsList";
import Signup from "../sign/Signup";
import Signin from "../sign/Signin";
import {PrivateRoutes} from "../routes/PrivateRoutes";
import {useDispatch, useSelector} from "react-redux";
import {logOff} from "../store/profile/actions/log_out_firebase";
function Routed (){
    const {isAuth} = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logOff());
    }
    return (
    <BrowserRouter>
        <div style={{width:'1000px', display:'flex', }}>
            <div style={{padding:'20px' }}><Link to='account'>Account</Link></div>
            <div style={{padding:'20px' }}><Link to='chat'>Chat</Link></div>
            <div style={{padding:'20px' }}><Link  to='gists'>Gists</Link></div>
            {!isAuth &&
                <div style={{padding:'20px' }}><Link to='signin'>Signin</Link></div>
            }
            {!isAuth &&
                <div style={{padding:'20px' }}><Link to='signup'>Signup</Link></div>
            }
            {isAuth && <div>
                <div style={{padding:'20px' }}><Link onClick={logOut} to='signin'>Signout</Link></div>
            </div>}

        </div>
        <Routes>
            <Route
                path="account"
                element={<PrivateRoutes component={<ProfileContainer/>} />}
            />
            <Route path="signin" element={<Signin/>} />
            <Route path="signup" element={<Signup/>} />
            <Route
                path="gists"
                element={<PrivateRoutes component={<GistsList/>} />}
            />
            <Route path="message"   >
                <Route index element={<Message/>} />
                <Route path=':id' element={<ItemMessage />} />
            </Route>
            <Route path="chat"   >
                <Route index element={<ChatContainer />} />
                <Route path=':id' element={<ItemChat/>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}
export default Routed


