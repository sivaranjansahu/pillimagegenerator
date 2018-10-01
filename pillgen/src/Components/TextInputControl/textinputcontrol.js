import React from 'react'

const textinputcontrol = (props) => {
  return (
    <div style={styles.input}>
        <input onChange={(val)=>props.pillTextChangeHandler(val)}/>
    </div>
  )
}

const styles = {
  input:{
    margin:"20px"
  }
}

export default textinputcontrol
