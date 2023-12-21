import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleShowName} from "../store/profile/actions/toogle";
import {upCount} from "../store/profile/actions/count";
import {changeName} from "../store/profile/actions/change_name";
import {List, ListItem, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import {getProfileFirebase} from "../store/profile/actions/getProfileFirebase";
import Profile from "../views/Profile";
function ProfileContainer (){
    const {showName, profile, count, name} = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();
    const user = profile[0];
    const [value, setValue] = useState('');
    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);
    const setCount = useCallback(() => {
        dispatch(upCount);
    }, [dispatch]);
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const setName = useCallback(() => {
        dispatch(changeName(value));
    }, [value]);
    useEffect(() => {
        dispatch(getProfileFirebase());
    }, []);
    return(
        <Profile showName={showName} count={count} name={name} user={user} setShowName={setShowName} setCount={setCount} handleChange={handleChange} setName={setName} />
    )
}
export default ProfileContainer

