import Card from 'react-bootstrap/Card';

const NpmCard = () => {
	return (
		<Card className="doc-card text-center shadow-lg">
			<Card.Body>
				<Card.Title className="doc-card-title">Getting Started</Card.Title>
				<Card.Text>Run the following command in your terminal to get started:</Card.Text>
				<Card.Text className="code">npm install -g poncey</Card.Text>
				<Card.Text className="text-center">Note: Node v10+ needed</Card.Text>
				<Card.Text>
					Learn more about installation and usage of the{' '}
					<Card.Link href="https://www.npmjs.com/package/poncey">
						<strong>Poncey package on NPM</strong>
					</Card.Link>
					.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default NpmCard;
