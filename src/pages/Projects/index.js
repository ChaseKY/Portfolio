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
              Film Finder was created along with 2 other peers for our first group project during
              our coding bootcamp. It gives you a short list of movies based on the preferences you
              choose.
            </Card.Text>
            <Button href="https://chaseky.github.io/FilmFinder/" variant="primary">
              Go to app
            </Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem', backgroundColor: 'lightblue' }}>
          <Card.Img
            className="image"
            variant="top"
            src="https://pngimg.com/uploads/github/github_PNG83.png"
          />
          <Card.Body>
            <Card.Title>Github Finder</Card.Title>
            <Card.Text>
              The Github Finder is a simple github profile search application that I created while
              taking one of Brad Traversy's Udemy courses.
            </Card.Text>
            <Button href="https://github-finder-chaseky.vercel.app/" variant="primary">
              Go to app
            </Button>
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
              I created the Daily Planner app while I was in my coding bootcamp. It is able to
              determine the time of day and use this to color each time slot depending on if it is
              that current hour, a hour that has already passed, or an hour coming up.
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
