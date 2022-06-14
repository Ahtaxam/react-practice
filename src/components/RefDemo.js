import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
    
    }
    handleInput = () =>{
        alert(this.inputRef.current.value)
    }
    focusInput = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <input type='text' ref={this.inputRef}/>
          <button onClick={this.handleInput}>Values</button>
          <button onClick={this.focusInput}>Focus</button>
      </div>
    )
  }
}

export default RefDemo