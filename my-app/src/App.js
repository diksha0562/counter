import React from 'react';
import {connect} from 'react-redux';
import Comp1 from './Comp1';
import {handleIncAction, handleDecAction} from './actions/index';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:0,
            count3:0,
            currIndex:1
        }
        this.handle_increament = this.handle_increament.bind(this);
        // this.handleDec = this.handleDec.bind(this);
    }
    componentWillReceiveProps(nextProps){

        console.log('nextProps', nextProps);
        switch (this.state.currIndex) {
            case 1: 
            this.setState({count1:nextProps.counter_value});
            break;
            case 2:           
            this.setState({count2:nextProps.counter_value});
            break;
            case 3: 
            this.setState({count3:nextProps.counter_value});
            break;
        }

       // console.log('props',this.props);
        // this.setState({count: nextProps.counter_value});
    }
    handle_increament(num){
        
        console.log('before props',this.props);
        switch (num) {
            case 1: 
            this.setState({currIndex:num},()=>{ this.props.handleIncAction(this.state.count1); });
            break;
            case 2: 
            this.setState({currIndex:num},()=>{ this.props.handleIncAction(this.state.count2); }); 
            break;
            case 3: 
            this.setState({currIndex:num},()=>{ this.props.handleIncAction(this.state.count3); });
            break;
        }

       
        
        // console.log('after props',this.props);
        // this.setState({count: this.props.counter_value});
    }
    render(){
        return(
            <div>
                <Comp1 heading="Adult" id="1" count_value={this.state.count1} handle_increament={this.handle_increament}/>
                <Comp1 heading="Children" id="2" count_value={this.state.count2} handle_increament={this.handle_increament}/> 
                <Comp1 heading="Seniors" id="3" count_value={this.state.count3} handle_increament={this.handle_increament}/>
                </div>
        )
    }
}
const mapStateToProps = state => ({

    counter_value:state.counter_value.counter_value
  })
export default connect(null,{handleIncAction}) (App);