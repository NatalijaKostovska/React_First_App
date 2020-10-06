import React,{Component} from 'react';

class LogIn extends Component{

    constructor(props){
        super();
    }
    state ={
        firstName:'',
        lastName:''
    };
    handleSubmit=(event)=>{

        event.preventDefault();
        alert(`the form is submited. First name is ${this.state.firstName} last name is ${this.state.lastName}`);
    };
    handleFirstNameChange=(event)=>{
        this.setState({
            firstName:event.target.value
        });
    };
    handleLastNameChange=(event)=>{
        this.setState({
            lastName:event.target.value
        });
    };
    render() {
        const {firstName,lastName} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>First example</h1>
                <input value={firstName} onChange={this.handleFirstNameChange}/>
                <input value={lastName}  onChange={this.handleLastNameChange}/>
                <button type="submit">Submit</button>
            </form>
        );
    }

}
export default LogIn;