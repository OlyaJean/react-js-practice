import React, { useState } from 'react'

const ArrayOfObjects = () => {
    
    const [cars,setCars] = useState([])
    const [yearCar, setYearCar] = useState(new Date().getFullYear())
    const [modelCar,setModelCar] = useState('')
    const [colorCar,setColorCar] = useState('')
    function addColor(event){
        setColorCar(event.target.value)
    }
    function addModel(event){
         setModelCar(event.target.value)
    }
    function addYear(event){
         setYearCar(event.target.value)
    }
    function addHandle(){
      const listOfCars = {model:modelCar,
                          color: colorCar,
                        year: yearCar
      }
      setCars(l => [...l, listOfCars])
      setYearCar(new Date().getFullYear())
      setModelCar('')
        setColorCar('')
      
    }
  return (
    <div>
        <h1>List of Cars</h1>
        <ul>
          {cars.map((car,index)=> <li key={index}>{car.model} {car.color} {car.year}</li>)}
        </ul>
        <input type="number" value={yearCar} onChange={addYear}/>
        <input type="text" value={modelCar} onChange={addModel}/>
        <input type="text" value={colorCar} onChange={addColor}/>
        <button onClick={addHandle}>add</button>
      
    </div>
  )
}

export default ArrayOfObjects
