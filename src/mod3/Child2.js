import React, {Component} from "react";
class Child2 extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        alert('Mount ketrigger cuk')
    }
    numberUp = () => {
        this.setState((state) => {return {number: state.number + 1}})
    }
    numberDown = () =>{
        this.setState((state) => {return{number: state.number - 1}})
    }
    componentWillUnmount(){
        alert('Ntar ilang ini cuk')
    }
    render(){
        return(
            <div>
                <h4>A Counting</h4>
                <button onClick={this.numberUp}>Nambahi</button>
                <button onClick={this.numberDown}>Ngurangi</button>
                <br/>
                <p>{this.state.number}</p>
            </div>
        );
    }
}
export default Child2;