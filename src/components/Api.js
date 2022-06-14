import axios from 'axios'
import React, { Component } from 'react'

class Api extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        post:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            this.setState({
                post:response.data
            })
        })
        .catch((err) =>{
            console.log(err);
        })
    }
  render() {
      const {post} = this.state
    return (
      <div>
          <h1>Posts</h1>
          {
              post.length ?
              post.map((post) =>
                  <p key={post.id}>{post.title}</p>
              ) : null
          }
      </div>
    )
  }
}

export default Api