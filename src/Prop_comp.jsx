import React from 'react'
import propTypes from 'prop-types'//proptypes are controlling the correct data type would be passed through props

const Prop_comp = (props) => {
    const style_h1 = {
        color:'red'
    }
    const style_p = {
        color:'blue'
    }
  return (
    <div className='profile'>
      <h1 style={style_h1}>{props.name}</h1>
      <p style={style_p}>{props.age}</p>
    </div>
  )
}
Prop_comp.propTypes = {
    name:propTypes.string,
    age:propTypes.number
}

Prop_comp.defaultProps = {   //default prop in case some prop will be missing
    name:'Guest',
    age:0
}
export default Prop_comp
