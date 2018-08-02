import React from 'react';

class Comp1 extends React.Component{
    constructor(props){
        super(props);
       
        this.handleInc = this.handleInc.bind(this);
        // this.handleDec = this.handleDec.bind(this);
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
    }
    componentDidMount(){
        console.log('============')
    }
    handleInc(){
        this.props.handle_increament(Number(this.props.id));
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