import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"Ahtasham"
      }
      this.changeName = this.changeName.bind(this)
    }

    changeName(val){
        alert(`hello ${this.state.name} from ${val}`)
    }
  render() {
    return (
      <div>
          <Child handler = {this.changeName}></Child>
      </div>
    )
  }
}

export default Parent