import React, { Component } from 'react'
import { Progress } from 'reactstrap';
import Experience from './Experience';


export default class Skills extends Component {
	render() {
		return (
			<div className='skills ' id='skills'>

				<div className='boxss'>
					<h4>my Skills</h4>
					<hr></hr>
					<div className='progres'>
						<span>HTML5 </span>
						<Progress striped value="90" color='dark'>90%</Progress>
					</div>

					<div className='progres'>
						<span>CSS3 </span>
						<Progress striped value="85" color='dark'>25%</Progress>
					</div>
					<div className='progres'>
						<span>Javascript / jQuery </span>
						<Progress striped value="75" color='dark'>25%</Progress>
					</div>
					<div className='progres'>
						<span>photoshop </span>
						<Progress striped value="60" color='dark'>60%</Progress>
					</div>
					<div className='progres'>
						<span>nodejs </span>
						<Progress striped value="75" color='dark'>75%</Progress>
					</div>
					<div className='progres'>
						<span>react </span>
						<Progress striped value="85" color='dark'>85%</Progress>
					</div>
					<div className='progres'>
						<span>git && github </span>
						<Progress striped value="75" color='dark'>75%</Progress>
					</div>
					<div className='progres'>
						<span>mongodb </span>
						<Progress striped value="90" color='dark'>90%</Progress>
					</div>
				</div>
			</div>
		)
	}
}
