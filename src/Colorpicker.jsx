import React, { useState } from 'react'

const Colorpicker = () => {
    const [color,setColor] = useState("#FFFFFF")
    function colorHandler(event){
        setColor(event.target.value)
    }
  return (
    <div style={{backgroundColor:color}}>
      <p>Your color is: {color} </p>
      <input type="color" value={color} onChange={colorHandler}/>
    </div>
  )
}

export default Colorpicker
