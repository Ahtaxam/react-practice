import React, { Component } from 'react'
import Memo from './Memo';
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ahtasham"
      }
    }

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState({
    //             name:"Ahtasham"
    //         })
    //     }, 2000);
    // }
  render() {
      console.log("******** ParentComponent Rendering ********");
    return (
        <React.Fragment>
            <div>
            ParentComp
            </div>
            <br/>
            <Memo name = {this.state.name}></Memo>
            {/* <PureComp name = {this.state.name}></PureComp> */}
        </React.Fragment>
    )
  }
}

export default ParentComp