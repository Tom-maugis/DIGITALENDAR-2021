import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<footer>
			<hr />
			<Container style={{ textAlign: 'left' }}>
				<Row>
					<Col>
						<FontAwesomeIcon icon="file-code" size="sm" /> About
						<br />
					
						<a
							href="https://github.com/openintents/calendar-web"
							target="_blank"
							rel="noopener noreferrer"
						>
							Original&nbsp;code
						</a>
						<br />
						<a href="/terms" target="_blank" rel="noopener noreferrer">
							Terms
						</a>
						<br />
						&copy; {new Date().getFullYear().toString()} | v
						{process.env.REACT_APP_VERSION}
					</Col>
					<Col>
						<FontAwesomeIcon icon="question" /> Support <br />
						<a
							href="https://www.producthunt.com/posts/oi-calendar"// lien vers un support de ta confection
							target="_blank"
							rel="noopener noreferrer"
						>
							ProductHunt
						</a>
						<br />
						<a
							href="http://www.openintents.org/contact/"// ton mail + ajoute les devs originaux
							target="_blank"
							rel="noopener noreferrer"
						>
							Email&nbsp;Form
						</a>
						<br />
						<a
							href="https://github.com/openintents/calendar-web/#app-developers" // ici met un lien vers ton discord + numéro de tel et ajoute les devs originaux
							target="_blank"
							rel="noopener noreferrer"
						>
							Developers
						</a>
						<br />
						<a
							href="https://github.com/openintents/calendar-web/issues?q=is%3Aissue+is%3Aopen+label%3Abug" //ici met un lien vers les erreurs qui arrivent des fois 
							target="_blank"
							rel="noopener noreferrer"
						>
							Known&nbsp;Issues
						</a>
						
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
