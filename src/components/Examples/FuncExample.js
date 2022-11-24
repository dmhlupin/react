import { useEffect, useState } from "react"

export const FuncCounter = () => {

    const [count, setCount] = useState(0);

    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];

    const changeCount = (event) => {
        setCount((prevState) => prevState + 1);
    }


    useEffect(() => {
        console.log('like didMount')
    }, []);

    useEffect(() => {
        console.log('like didMount + did update')
    },);

    useEffect(() => {
        console.log('like didMount + count update')
    }, [count]);

    useEffect(() => {
        console.log('like didMount + count update');
        return () => {
            console.log('before update count');
        }
    }, [count]);

    useEffect(() => {
        return () => {
            console.log('like will unmount')
        };
    }, [])

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={changeCount}>Click!</button>
        </div>
    )
}