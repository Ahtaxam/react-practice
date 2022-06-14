import React from 'react'

function User(props) {
  return (
    <div>
        {props.name(true)}

    </div>
  )
}

export default User