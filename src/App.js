import React from 'react';
import {connect} from 'react-redux';
import Comp1 from './Comp1';
import {handleIncAction, handleDecAction} from './actions/index';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.handle_increament = this.handle_increament.bind(this);
        // this.handleDec = this.handleDec.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({count: nextProps.counter_value});
    }
    handle_increament(){
        this.props.handleIncAction(this.state.count);
        // this.setState({count: this.props.counter_value});
    }
    render(){
        return(
            <div>
                <Comp1 heading="Adult" id="1" count_value={this.state.count} handle_increament={this.handle_increament}/>
                <Comp1 heading="Children" id="1" />
                <Comp1 heading="Seniors" id="1"/>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    counter_value:state.counter_value.counter_value
  })
export default connect(mapStateToProps,{handleIncAction}) (App);