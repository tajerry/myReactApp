import '../App.css';
import {useEffect, useRef} from "react";

import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import MessageContainer from "../containers/MessageContainer";
function Form({handleInputs, handlerForm, chatId}) {
    const autoFocusInput = useRef(null);
    useEffect(() =>
        {
            if(autoFocusInput.current){
                autoFocusInput.current.focus()
            }
        }, []
    )
    return(
        <div className={'Form'}>
            <form className={'formForm'} action="">
                <label>Имя</label>
                <TextField id="outlined-basic" label="Author"  variant="outlined" name="author" ref={autoFocusInput}  onChange={handleInputs}/>
                <label>Текст</label>
                <TextField id="outlined-multiline-static" multiline rows={4} chatId={chatId}  label="Text"  variant="outlined" name="text" onChange={handleInputs}/>
                <Button className={"submit"}  type={"submit"} onClick={handlerForm} variant="contained">Отправить</Button>
            </form>
            <MessageContainer chatId={chatId}/>
        </div>
    );
}
export default Form;

