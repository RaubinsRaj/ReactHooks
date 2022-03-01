import React, { Component } from 'react'

export class CounterClassOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name: ''
      }
    }
    componentDidMount(){
     document.title= `Click ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count != this.state.count ){
        console.log("updating doc title");
        document.title= `Click ${this.state.count} times`
        console.log(document.title);
        }
    }

  render() {
    return (
      <div>
          <label>Name</label>
          <input type='text' 
          value={this.state.name} 
          onChange={e=>this.setState({name:e.target.value})}>
          </input>
          <div>
          <button onClick= {()=>this.setState({count: this.state.count+1})}>Click{this.state.count}</button>
      </div>
      </div>
    )
  }
}

export default CounterClassOne