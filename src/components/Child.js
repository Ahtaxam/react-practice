import React, { useState } from 'react'

function Child(props) {
  const [isLoading , setLoading] = useState(true);
  const names = ['ali' , 'javed' , 'israr']
    const {handler} = props;
    function runHandler(val){
        handler(val)
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    const nameList = names.map((name , index) => <h3 key={index}>{name}</h3>)
  return (
    <div>
      {nameList}
      {isLoading ? <h2>In Parent</h2>:<h2>In child</h2>}
      <button onClick={() => runHandler('ali child')}>Show Box</button>
    </div>
  )
}

export default Child