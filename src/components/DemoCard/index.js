import Card from 'react-bootstrap/Card';

const DemoCard = () => {
	return (
		<Card className="doc-card text-center shadow-lg d-flex justify-content-center mt-0">
			<Card.Body>
				<Card.Title className="doc-card-title">Demo</Card.Title>

				<img
					className="img-fluid"
					src="https://lh3.googleusercontent.com/h1W19eqwVXyYzUnnWBkYWoJMsz2Gv87WwkcxAoAqxy1_iV36zw2su8q1oRXscbYIPQ9g1teahLgZ-ZDhe_aF152uuCGwD6xZa5zSyK1si4z6SGDHwCk0HhJn2BkE3atxVInntScUGQ=w2400"
					alt="Demo gif of using Poncey"
				/>
			</Card.Body>
		</Card>
	);
};

export default DemoCard;
