import React, { Component } from 'react'
import Footer from './Footer.js'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';


export default class Contact extends Component {
	render() {
		return (
			<div className='contact' id='contact'>
				<h1>contact us</h1>
				<hr></hr>
				<Row>
					<Col l="6" xs="12" className='col-md-6 col-xs-6-l'>

						<div className='social'>
							<h4>My profiles in social media:</h4>
							<a href="https://twitter.com/hesham_alamam"><i className="fab fa-twitter-square"></i></a>
							<a href="https://www.facebook.com/mahmoudhassan993"><i className="fab fa-facebook-square"></i></a>
							<a href="https://github.com/heshamalamam73"><i className="fab fa-github-square"></i> </a>
							<a href="https://stackoverflow.com/users/10776569/hesham-alamam"><i className="fab fa-stack-overflow"></i></a>
							<a href="https://www.linkedin.com/in/mahmoud-hassan-okily-3ab3a7b6/"><i className="fab fa-linkedin"></i></a>
						</div>
					</Col>
					<Col l="6" xs="12" className='col-md-6 col-xs-6-l'>
						<h6 id='messageTitle'>Write a message</h6>
						<Form>
							<FormGroup>
								<Label for="examplePassword">your name</Label>
								<Input
									type="text"
									name="name"
									id="examplePassword"
									placeholder="name"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="exampleEmail">your Email</Label>
								<Input
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="email"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="exampleText">your message</Label>
								<Input type="textarea" name="text" id="exampleText" placeholder="message" />

							</FormGroup>

							<Button>send a message</Button>



						</Form>
					</Col>
				</Row>

			</div>
		)
	}
}
