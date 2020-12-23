import Card from 'react-bootstrap/Card';

const GitHubCard = () => {
	return (
		<Card className="doc-card text-center shadow-lg">
			<Card.Body>
				<Card.Title className="doc-card-title">Open Source</Card.Title>
				<br />
				<Card.Text>
					Poncey is a free & open source project generator. If you're interested in
					contributing to this project, have questions or would like to create a similar
					CLI. Check out our code on{' '}
					<Card.Link href="https://github.com/hermanjohn2/poncey">
						<strong>GitHub</strong>
					</Card.Link>
					!
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default GitHubCard;
