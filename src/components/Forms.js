import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        password:'',
        topic:''
      }
    }

    // handleUserName =  (event) =>{
    //     this.setState({
    //         name:event.target.value
    //     })
    // }

    // handlePassword =  (event) =>{
    //     this.setState({
    //         password:event.target.value
    //     })
    // }

    // handleTopic =  (event) =>{
    //     this.setState({
    //         topic:event.target.value
    //     })
    // }

    handleInput = (e) =>{
        const key = e.target.name;
        console.log(key);
        this.setState({
          [key]:e.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`Name: ${this.state.name}\nPassword: ${this.state.password}
Topic: ${this.state.topic}`);
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Username</label>
                  <input type="text"
                  name='name'
                  value={this.state.name}
                  onChange = {this.handleInput}
                  />
              </div>

              <div>
                  <label>Password</label>
                  <input type="password"
                  name='password'
                  value={this.state.password}
                  onChange = {this.handleInput}
                  />
              </div>

              <div>
                  <label>Topic</label>
                  <select value={this.state.topic} 
                  onChange={this.handleInput}
                  name='topic'
                  >
                      <option value="react">React</option>
                      <option value="angular">Angular</option>
                      <option value="vue">Vue</option>
                  </select>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

export default Forms