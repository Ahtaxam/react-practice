import React, { useState } from 'react'

function Counter(props) {
    const [count , setCount] = useState(0);
    const {name} = props
    const changeCount = (val) =>{
      console.log(val);
        setCount(count+1)
    }
  return (
    <div>
        {name}
        <br></br>
        {props.children}
        {count}
        <button onClick={() =>changeCount("ali")}>change Counte</button>
    </div>
  )
}

export default Counter