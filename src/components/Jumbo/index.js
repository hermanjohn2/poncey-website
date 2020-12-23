import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './style.css';

const Jumbo = () => {
	return (
		<Jumbotron fluid className="jumbo-wrap">
			<Container className="jumbotron-content">
				<img src="/poncey-logo.png" alt="Poncey Logo" />
				<h2>React App & Static Site Generator</h2>
			</Container>
		</Jumbotron>
	);
};

export default Jumbo;
