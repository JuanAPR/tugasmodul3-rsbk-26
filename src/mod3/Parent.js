import {Component} from "react";
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class Parent extends Component {
    state = {
        component1: false,
        component2: false
    }
    componentDidUptade(prevProps, prevState, snapshot){
        alert(`Component updated. prevState child1: ${prevState.component1} -- prevState child2: ${prevState.component2}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Are you sure.?');
    }
    changecomp1 = () =>{
        this.setState((state) => {
            return {component1: !this.state.component1}
        })
    }
    changecomp2 = () => {
        this.setState((state) => {
            return {component2: !this.state.component2}
        })
    }
    render(){
        return (
            <div>
                {this.state.component1 ? <Child1/>:''}
                <button onClick={this.changecomp1}>{this.state.component1 ? 'HIDE' : 'SHOW'} the first one</button>
                <br/>
                {this.state.component2 ? <Child2/>:''}
                <button onClick={this.changecomp2}>{this.state.component2 ? 'HIDE' : 'SHOW'} the second one</button>
            </div>
        );
    }
}
export default Parent;