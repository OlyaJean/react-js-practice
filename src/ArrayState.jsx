import React, { useRef, useState } from 'react'

const ArrayState = () => {

    const [fruits,setFruits] = useState(['Apple','Pear','Mango','Coconut'])
const addF = useRef()
    function addFruit(){
       
     setFruits(f => [...f, addF.current.value])
      
    }
    function delFruit(index){
      setFruits(fruits.filter((_, i) => i !== index))
    }
  return (
   
    <div>
      <ul>{fruits.map((fruit,index)=><li key={index} onClick={()=> delFruit(index)}>{fruit}</li>)}</ul>
      <input type="text" ref={addF}/>
      <button onClick={addFruit}>add fruit</button>
    </div>
  )
}

export default ArrayState
