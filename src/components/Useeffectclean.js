import React, { useEffect, useState } from 'react'

function Useeffectclean() {
    const [width , setWidth] = useState(window.screen.width);
    const currentWidth = () =>{
        console.log(window.innerWidth);
        setWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize' , currentWidth);
        return () =>{
            window.removeEventListener('resize' , currentWidth)
        }
    })
  return (
    <div>
        <h2>{width}</h2>

    </div>
  )
}

export default Useeffectclean