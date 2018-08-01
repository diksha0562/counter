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
            currState:undefined
        }
        this.handle_increament = this.handle_increament.bind(this);
        // this.handleDec = this.handleDec.bind(this);
    }
    componentWillReceiveProps(nextProps){

        console.log('nextProps', nextProps);
        
        console.log('props',this.props);
        // this.setState({count: nextProps.counter_value});
        switch (nextProps.id) {
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
    }
    // componentWillMount(){
    //     console.log('componentWillMount') 
    // }
    // componentDidMount(){
    //     console.log('componentDiDMount')
    // }
    // shouldComponentUpdate(){
    //     return true
    // }
    // componentWillUpdate(a){
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate(a){
    //     //
    //     // this.setState({count1:5})
    //     console.log('componentDidUpdate')
    // }
    // componentWillUnmount(a){
    //     console.log('componentWillUnmount')
    // }

    handle_increament(num,count){
        
        this.props.handleIncAction(count, num);
        // switch (num) {
        //     case 1:
        //     this.setState({currState:1}, ()=>this.props.handleIncAction(this.state.count1)) 
        //     break;
        //     case 2: 
        //     this.setState({currState:2},()=>this.props.handleIncAction(this.state.count2)) 
        //     break;
        //     case 3:
        //     this.setState({currState:3},()=>this.props.handleIncAction(this.state.count3))    
        //     break;
        // }
        // this.setState({count: this.props.counter_value});
    }
    render(){
        return(
            <div>
                <Comp1 heading="Adult" id="1" count_value={this.state.count1} handle_increament={this.handle_increament.bind(this,1)}/>
                <Comp1 heading="Children" id="2" count_value={this.state.count2} handle_increament={this.handle_increament.bind(this,2)}/> 
                <Comp1 heading="Seniors" id="3" count_value={this.state.count3} handle_increament={this.handle_increament.bind(this,3)}/>
                </div>
        )
    }
}
const mapStateToProps = state => ({

    counter_value:state.counter_value,
    id: state.id

  })
const mapDispatchToProps = dispatch => ({
    handleIncAction: (count, num) => dispatch(handleIncAction(count,num))
})
export default connect(mapStateToProps,mapDispatchToProps) (App);