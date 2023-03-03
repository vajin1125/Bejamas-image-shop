import React from 'react'

function CheckBox(props:any) {
	const $ = (selector:any) => {
		return document.querySelector(selector)
	}

	return (
		<div className="checkbox-holder">
			<input type="checkbox" name={props.name} 
				className="hidebx" 
				id={props.count} 
				value={props.value} 
        onChange={(e) => props.func(() => {
					let form = $('#filterForm')
					let concatArray:any = []
					for (let i = 0; i < form.length; i++) {
						if (form[i].checked) concatArray = [...concatArray, form[i].value]
					}
					
					return [concatArray]
				})}
			/>
			<label htmlFor={props.count} className="form-checkbox">{props.value}</label>
		</div>
	)
}

export default CheckBox
