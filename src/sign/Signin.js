import '../App.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fireBaseAuth, signIn, signUp, userRef} from "../services/firebase";
import {CircularProgress, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {auth} from "../store/profile/actions/auth";
import {push} from "firebase/database";
import {getProfileFirebase} from "../store/profile/actions/getProfileFirebase";
function Signin () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfileFirebase());
    }, [dispatch]);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleInputs = (event) => {
        setInputs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value

        }));

    }
    const handlerForm  = async  (event) => {
        event.preventDefault();
        try {
            setError('');
            setLoading(true);
            dispatch(auth(true));
            await signIn(inputs.email, inputs.password);
            navigate('/account');
            const user = fireBaseAuth.currentUser;
            push(userRef, {user});
        }
        catch (error){
            setError(error)
        }
        finally {
            setLoading(false);
            setInputs({
                email:'',
                password:''
            });
        }
    }
    return(
        <div className={'Form'}>
            <form className={'formForm'} action="">
                <label>Имя</label>
                <TextField id="outlined-basic" label="Email" value={inputs.email}  variant="outlined" type='email' name="email"   onChange={handleInputs}/>
                <label>Текст</label>
                <TextField id="outlined-multiline-static"  label="Password" value={inputs.password}  variant="outlined" type="password" name="password" onChange={handleInputs}/>
                <Button className={"submit"}  type={"submit"} onClick={handlerForm} variant="contained">Вход</Button>
            </form>
        </div>
    );
}
export  default Signin;
