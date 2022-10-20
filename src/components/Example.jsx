import { useState } from "react"

function Child(props) {
    return (
        <span> {props.count} </span>
    )
}


function Button(props) {
    return (
        <div> 
            <button className="button" onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export function Example() {
    const [count, setCount] = useState(0);

    const plusCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const minusCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <div>
            <Child count={count} />
            <Button onClick={plusCount} name = "plus 1" />
            <Button onClick={minusCount} name = "minus 1" />
        </div>
    )
}