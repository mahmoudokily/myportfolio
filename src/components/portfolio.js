import React, { Component } from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default class Portfolio extends Component {
	render() {
		return (
			<div className='portfolio' id='portfolio'>
				<h3>portfolio</h3>
				<hr></hr>
				<div className='grid'>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card>
						<CardImg top width="100%" src="https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
						<CardBody>
							<CardTitle>Card Title</CardTitle>
							<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
				</div>

			</div>
		)
	}
}
