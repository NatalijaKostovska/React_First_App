import React,{Component} from 'react';

class Refs extends React.Component {

    constructor(props){
        super();
        this.nameInput = React.createRef();
    }
    handleFocus=()=>{
        this.nameInput.current.select();
        document.execCommand('copy');
    };
    // handleCopy=()=>{
    //     document.execCommand('copy');
    // };

    render() {
        return(

            <div>
                <h1>Second example</h1>
                <p>Uncontrolled component</p>
                <input ref={this.nameInput} defaultValue="John"/>
                <button type="button" onClick={this.handleFocus}>Focus</button>
            </div>
        )
    }
}
export default Refs