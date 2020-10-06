import React,{Component} from 'react';

class EventHandler extends Component{
    handleClick = (event) => {
        event.preventDefault();
        console.log("It was clicked!");
        alert("it was clicked")
    }
    render(){

        return(
            <div>
                <h1>Third example</h1>
                <p>Controlled component</p>
                <button type="button" onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
export default EventHandler;