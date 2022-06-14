import React, { Component } from 'react'
import Counter from './Counter'

class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            name:"Ahtasham",
            age:18
        }
      this.changeName = this.changeName.bind(this)
    }
  
    changeName(val) {
      console.log(val);
      this.setState((previous) =>({
        age : previous.age + 1
        })
      )
    }
  render() {
    return (
      <div>
        <h4>{this.state.age}</h4>
        {/* <h4> {this.state.age} </h4> */}
        <button onClick={() =>this.changeName('Ahtasham')}>Change Name</button>
        <Counter name = "counter running...">
          <p>This is counter Children Paragraph</p>
        </Counter>
      </div>
    )
  }
}

export default Welcome