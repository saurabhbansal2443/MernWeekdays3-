import React , {useState } from 'react'

const CounterFunction = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={()=> {setCounter(counter +1)}}>Incremnet  </button>
      <span> {counter}</span>
    <button onClick={()=> {setCounter(counter -1)}} > Decremnet </button>
        </div>
  )
}

export default CounterFunction
