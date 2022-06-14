import React, { useMemo } from 'react'
import { useState } from 'react'

function Usememo() {
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);

    const counterOne = () =>{
        setCount1(count1 + 1)
    }


    const counterTwo = () =>{
        setCount2(count2 + 1)
    }
    const isEven = useMemo(() =>{
        let i = 0
        while(i < 200000000)i++
        return count1 % 2 === 0;
    } , [count1])
  return (
    <div>
        <br/>
        <button onClick={counterOne}>count1 -- {count1}</button>
        {isEven ? "Even" : "odd"}
        <br/>
        <button onClick={counterTwo}>count2 -- {count2}</button>

    </div>
  )
}

export default Usememo