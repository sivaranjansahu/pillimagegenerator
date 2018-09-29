import React from 'react'

const textinputcontrol = (props) => {
  return (
    <div>
        <input onChange={(val)=>props.pillTextChangeHandler(val)}/>
    </div>
  )
}

export default textinputcontrol
