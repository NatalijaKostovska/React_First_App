import React,{Component} from 'react';

class UncontrolledComponent extends React.Component {

    constructor(props){
        super();
        this.nameInput = React.createRef();
        this.lastName = React.createRef();
    }
    handleSubmit=()=>{
        this.nameInput.current.select();
        document.execCommand('copy');
        alert(`Name : ${this.nameInput.current.value} and LastName : ${this.lastName.current.value}`)
    };


    render() {
        return(

            <div>
                <h1>Fifth example</h1>
                <p>Uncontrolled component</p>
                <label>Name</label>
                <input ref={this.nameInput}/>
                <label>LastName</label>
                <input ref={this.lastName} />
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
export default UncontrolledComponent