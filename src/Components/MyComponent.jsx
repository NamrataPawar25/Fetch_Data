import React, { useEffect } from 'react'

function MyComponent(){
    useEffect(()=>{
        console.log("Component Mounted");
    },[])
  return (
    <h1>Hello World</h1>
  )
}

export default MyComponent