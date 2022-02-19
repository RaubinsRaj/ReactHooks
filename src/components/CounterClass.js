import React, { Component } from 'react'

class CounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    clickhandler = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <div>

          <button onClick={this.clickhandler}>ClickCounter{this.state.count}</button>
      </div>
    )
  }
}

export default CounterClass