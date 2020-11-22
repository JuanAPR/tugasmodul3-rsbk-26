import React, {Component} from "react";
class Child1 extends Component {
    state = {
        nama: "Irgantara"
    }
    componentDidMount(){
        alert('Mount ketrigger')
    }
    ubahNama = () => {
        this.setState((state) => {
            if (state.nama === "Irgantara"){
                return {nama : "Juan Pablo"}
            } else {
                return {nama : "Irgantara"}
            }
        })
    }
    componentWillUnmount(){
        alert('I will be gone ...')
    }
    render(){
        return(
            <div>
                <h4>Kelompok ini</h4>
                <h4>{this.state.nama}</h4>
                <br/>
                <button onClick={this.ubahNama}>Another one!</button>
            </div>
        );
    }
}
export default Child1;