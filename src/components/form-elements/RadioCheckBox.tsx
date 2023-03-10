import React from 'react'

function RadioCheckBox(props:any) {
  return (
    <div className="checkbox-holder">
      <input type="radio" name={props.name} 
        className="hidebx" 
        id={props.count} 
        value={props.value} 
        onChange={(e) => props.func((prevState:any) => [props.value])}
      />
      <label htmlFor={props.count} className="form-checkbox">{props.text}</label>
    </div>
  )
}

export default RadioCheckBox
