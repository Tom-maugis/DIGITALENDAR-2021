import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export const FAQ = props => {
	return (
		<Col xs={12} md={6}>
			<div style={{ fontWeight: 'bold' }}>{props.q}</div>
			<div>{props.children}</div>
		</Col>
	)
}
const FAQs = () => (
	<Card style={{ marginTop: 10 }}>
		<Card.Header>
			<h2>Command table</h2>
		</Card.Header>
		<Card.Body>
			<Container fluid style={{ textAlign: 'left' }}>
				<Row>
				<FAQ>
					<a href="https://google.com" class="btn btn-primary">Go to Google</a>warawarawarawarawarawarawarawara
					<br></br>
					
				</FAQ>
				<FAQ>
				<a href="https://google.com" class="btn btn-primary">Go to Google</a>warawarawarawarawarawarawarawarawara
					<br></br>
				</FAQ>
				<FAQ>
						
				</FAQ>
				</Row>
				
				<Row>
				<FAQ>
				<a href="https://google.com" class="btn btn-primary">Go to Google</a>
				alalalallalalalalalalalalallalalalalalalalalallalalalalal
					<br></br>
				</FAQ>
				<FAQ>
				<a href="https://google.com" class="btn btn-primary">Go to Google</a>warawarawarawarawarawarawarawara
					<br></br>
				</FAQ>
				</Row>
			</Container>
		</Card.Body>
	</Card>
)

export default FAQs
