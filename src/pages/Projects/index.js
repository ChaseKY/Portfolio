import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

function Projects() {
  return (
    <div>
      <Container className="cardContainer">
        <Card className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <Card.Img className="image" variant="top" src="/Homepage2.png" />
          <Card.Body>
            <Card.Title>Film Finder</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <Card.Img className="image" variant="top" src="/logo-text.png" />
          <Card.Body>
            <Card.Title>Hamper</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <Card.Img
            className="image"
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/747/747775.png"
          />
          <Card.Body>
            <Card.Title>Daily Planner</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button href="https://chaseky.github.io/dailyPlanner/" variant="primary">
              Go to app
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Projects;
