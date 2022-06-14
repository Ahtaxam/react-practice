import React from 'react'

function Count({count , text}) {
    console.log('Rendering ' , text);
  return (
    <div>
        <h2>{text} --- {count}</h2>
    </div>
  )
}

export default React.memo(Count)