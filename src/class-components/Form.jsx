import React from "react";

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'Dmitry'
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })

    }

    render(){
        return <form>
            <p>Count: {this.state.count}</p>
            <button type="button" onClick={this.handleClick}>Click</button>

            <hr />
            <p>Name: {this.state.name}</p>
            <input type="text" onChange={this.handleChangeName}/>
            
        </form>
    }
}