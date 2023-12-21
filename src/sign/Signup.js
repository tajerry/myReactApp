import '../App.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {signUp, userRef} from "../services/firebase";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {push} from "firebase/database";
export  default function Signup () {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
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
            await signUp(inputs.email, inputs.password, inputs.name);
            navigate('/signin');
            push(userRef, {...inputs});
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
                <TextField id="outlined-basic" label="name"  variant="outlined" name="name"   onChange={handleInputs}/>
                <label>Email</label>
                <TextField id="outlined-basic" label="Email"  variant="outlined" type='email' name="email"   onChange={handleInputs}/>
                <label>Текст</label>
                <TextField id="outlined-multiline-static"  label="Password"  variant="outlined" type="password" name="password" onChange={handleInputs}/>
                <Button className={"submit"}  type={"submit"} onClick={handlerForm} variant="contained">Зарегистрироваться</Button>
            </form>
            {error && <p style={{color: 'red'}}>Login or password is FALIED</p>}
        </div>
    );
}
