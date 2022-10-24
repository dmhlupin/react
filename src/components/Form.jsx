import { useState } from "react"

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

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" value={value} onChange = {handleInput}></input>
            <button type="submit">Send message</button>
        </form>
    )
}