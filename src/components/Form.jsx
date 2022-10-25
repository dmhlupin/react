import { Button, TextField, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react"

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleInput = (event) =>{
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    }

    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current?.focus();
    }, []);

    

    return (
        <form onSubmit = {handleSubmit}>
            <Stack 
                margin={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                
                <TextField 
                    required 
                    value={value} 
                    onChange={handleInput} 
                    variant="filled" 
                    id="filled-required" 
                    label="Введите сообщение:" 
                    size="small" 
                    inputRef={inputRef}
                    fullWidth>
                </TextField>
                <Button type="submit" variant="outlined" size="large" endIcon={<SendIcon />} >Отпарвить</Button>
                
            </Stack>
        </form>
    )
}