import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbo from './components/Jumbo';
import NpmCard from './components/NpmCard';
import GitHubCard from './components/GithubCard';
import DemoCard from './components/DemoCard';

function App() {
	return (
		<div className="App">
			<Jumbo />
			<Container>
				<Row>
					<Col md={6} sm={12} className="d-flex justify-content-center">
						<NpmCard />
					</Col>
					<Col md={6} sm={12} className="d-flex justify-content-center">
						<GitHubCard />
					</Col>
				</Row>
				<Row>
					<Col md={12} className="d-flex justify-content-center">
						<DemoCard />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
