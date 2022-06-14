// import React, { useCallback, useEffect, useState } from 'react'
// import Childcall from './Childcall';
// import Count from './Count';

// function Callback() {
//     const [count , setCount] = useState(40);
//     const [sallery , setSallery] = useState(50000);
//     useEffect(() =>{
//         // console.log('useEffect');
//     },[])
//     const counter1 = useCallback(() =>{
//         setCount(count + 1)
//     },[count]) 
    
//     const counter2 = useCallback(() =>{
//         setSallery(sallery + 1)
//     },[sallery])
//   return (
//     <div>
//         <Count text = "count" count = {count}></Count>
//         <Childcall clickHandler = {counter1}>Count</Childcall>
//         <br/>
//         <Count text = "sallery" count = {sallery}></Count>
//         <Childcall clickHandler = {counter2}>Sallery</Childcall>

//     </div>
//   )
// }

// export default Callback


//             ------------------------------               //
