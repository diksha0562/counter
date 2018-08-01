import React from 'react';

class Comp1 extends React.Component{
    constructor(props){
        super(props);
    this.state={count:0}
        this.handleInc = this.handleInc.bind(this);
        // this.handleDec = this.handleDec.bind(this);
    }
    
    handleInc(){
        this.props.handle_increament(this.props.count_value);
        // this.setState({count: this.props.counter_value});
    }
    render(){
        return(
            <div>
                {this.props.heading}
                <div>
                <input id={this.props.id} type="button" value="+" onClick={this.handleInc}/>
                {this.props.count_value}
                </div>
                </div>
        )
    }
}


export default Comp1;