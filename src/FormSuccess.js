import React from 'react'

export class FormSuccess extends React.Component {
	render() {
		return (
			<div className="form-content-right">
				<div className="form-success">
				We have received your request!
				</div>
				<img src="img/mars.png" alt="success" className="form-img-2"/>
			</div>
		)
	}
}

export default FormSuccess