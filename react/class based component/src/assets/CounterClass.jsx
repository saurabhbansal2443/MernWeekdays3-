import React from "react";
class CounterClass extends React.Component {
    constructor (  ){
        console.log("Constructor called ");
        super();
        this.state = {
            counter : 1 ,
            counter2 : 10 
        }
    }

    componentDidMount(){
        console.log(" Component did mount called ");
    }
    render(){
        return (<>

        { console.log( " Render called ")}
            <button onClick={()=>{
                this.setState({
                    counter : this.state.counter +1 
                })
            }} >Incremnet  </button>
            <span>{this.state.counter } </span>
          <button  onClick={()=>{
                this.setState({
                    counter : this.state.counter - 1 
                })
            }}  > Decremnet </button>
          </>

        )
    }
}
export default CounterClass