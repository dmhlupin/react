// import { useState } from "react"

// export const Counter = () => {

//     const [count, setCount] = useState(0);

//     // const countState = useState(0);
//     // const count = countState[0];
//     // const setCount = countState[1];

//     const changeCount = (event) => {
//         setCount((prevState) => prevState + 1);
//     }

//     return (
//         <div>
//             <h4>{count}</h4>
//             <button onClick={changeCount}>Click!</button>
//         </div>
//     )
// }

// ------ То же на классах ---------------

import React from "react";


export class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {                  // Только конструктор позволяет изменять стейт напрямую!
            count: 0,
            name: "Dmitry",
        }
    }


    componentDidMount() {                       // метод при окончании монтирования компонента
        console.log('child did mount');
    }

    componentDidUpdate(prevProps, prevState) {   // метод при обновлении компонента
        console.log("child did update", prevProps, prevState);
    }

    componentWillUnmount() {                    // метод при размонтировании компонента
        console.log('child will unmount');
    }

    render() {
        console.log('child render');
        return (
            <div>
                <h4>Child component</h4>
            </div>
        )
    }
}

export class Counter extends React.Component {
    // state = {
    //     count: 0,
    //     name: "Dmitry",
    // };

    constructor(props) {
        super(props);
        this.state = {                  // Только конструктор позволяет изменять стейт напрямую!
            count: 0,
            name: "Dmitry",
            showChild: false,
        }
    }


    increase = () => {
        console.log('increase', this.state.count);          // стейт обновляется не мгновенно (асинхрон), поэтому для использования 
                                                            // актуального значения стейта нужно! использовать в качестве первого аргумента функцию 
                                                            // с предыдущим состоянием стейта
        this.setState((oldState) => ({ 
                count: oldState.count + 1
            }), () => {
            console.log('2nd state', this.state.count);  // вывод обновленного значения в колбэке - втором аргументе setState
        });      
    }

    decrease = () => {
        console.log('decrease', this.state.count);
        this.setState((oldState) => ({
                count: oldState.count - 1
            }), () => {
            console.log('2nd state', this.state.count);  // вывод обновленного значения в колбэке - втором аргументе setState
        });
        
    }

    toggleChild = () => {
        this.setState((oldState) => ({
            showChild: !oldState.showChild,
        }));
    }

    componentDidMount() {                       // метод при окончании монтирования компонента
        console.log('Component did mount');
        this.timeout = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {   // метод при обновлении компонента
        console.log("component did update", prevProps, prevState);
    }

    componentWillUnmount() {                    // метод при размонтировании компонента
        console.log('component will unmount');
        clearTimeout(this.timeout); // очистка таймаута
    }

    render() {
        console.log('render');
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.increase}>Increase!</button>
                <button onClick={this.decrease}>Decrease!</button>
                <button onClick={this.toggleChild}>Toggle!</button>
                {this.state.showChild && <Child />}   {/*Условный рендеринг */}
            </div>
        )
    }
}