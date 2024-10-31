import React, { useState } from 'react'

const ObjectState = () => {

    const [car,setCar] = useState({model:"Mersedes",
                                    year:2024
})

const yearHandler = (event) => {
setCar(c => ({...c, year: event.target.value}))
}
const modelHandler = (event) => {
    setCar(c => ({...c, model: event.target.value}))
    }

  return (
   
    <div>
      <p>My favorite car is {car.model} {car.year}</p>
      <input type="text" name="" id="" placeholder='model' value={car.model} onChange={modelHandler}/>
      <input type="number" value={car.year} placeholder='year' onChange={yearHandler}/>
    </div>
  )
}

export default ObjectState
