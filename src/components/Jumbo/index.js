import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './style.css';

const Jumbo = () => {
	return (
		<Jumbotron fluid className="jumbo-wrap container-fluid">
			<Container className="jumbotron-content">
				<img
					src="https://lh3.googleusercontent.com/ET3aplOAqqvqpgNgZluQ71CnPN53CLnperwj3OLAaECEi6wWOJ5iYycT04oqg7Rf5_5oqedM7twHAu_VinAXlsgltV0hcZ3S7ybQT2AvBVX7UYJlXQqL1-vnMqsMDTUN12HadFlHjQ=s200-p-k"
					alt="Poncey Logo"
				/>
				<h2>React App & Static Site Generator</h2>
			</Container>
		</Jumbotron>
	);
};

export default Jumbo;
