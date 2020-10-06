import React,{Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()

            });
        },1000);
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
    }
    componentWillUnmount() {
        if(this.time){
            clearInterval(this.time)
        }
    }

    // onTimeOut(){
    //     this.setState({open:false});
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }
    //
    //
    // componentWillUnmount() {
    //     clearInterval(this.intervalID);
    // }

    render() {
        const {time} = this.state;
        const {open} = this.state;
        return (
            <>
                <p>
                    <span className="label" open={open} onTimeOut={this.onTimeOut} message={"safsd"} timeout={5000}>Time:   </span>
                    {time}


                </p>
            </>
        );
    }

}
export default Clock;