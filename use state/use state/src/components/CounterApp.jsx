import React, {useState} from 'react'

const CounterApp = () => {
    const[count, setCount]=useState(0);
    function inc(){
        setCount(count +1)
    }
    function dec(){
        if(count > 0){
        setCount(count -1)
        }
    }
  return (
    <div style={{textAlign: 'center',border: '1px solid white', width: '300px', height: '300px'}}>
          <h1>Counter App</h1>
          <button onClick={inc}>ADD +</button>
          <br/>
          <span>{count}</span>
          <br/>
          <button onClick={dec}>SUB -</button>
    </div>
  )
}

export default CounterApp
