import React , {useState} from 'react'

const App = () => {
  const [count , setCount]= useState(0)

  const dec = () =>{
    setCount(count-1)
  }

  return (
    <div style={{margin:"20px 200px"}}>
      <button onClick={(e)=>setCount(count +1)}> + </button>
      <h1> {count} </h1>
      <button onClick={dec} > - </button>  
      <button onClick={(e)=>setCount(0)} >Rest</button>
    </div>
  )
}

export default App


