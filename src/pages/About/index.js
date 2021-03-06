import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
    <div>
      <section className="picContainer">
        <img
          className="picItem"
          src="javascript-logo.png"
          style={{ height: '20vh', width: 'auto', padding: '0' }}
        />
        <img className="picItem" src="mongo-logo.png" style={{ height: '20vh', width: 'auto' }} />
        <Card className="picItem" style={{ width: '18rem', borderRadius: '10px' }}>
          <Card.Img src="profile-pic.jpg" />
        </Card>
        <img className="picItem" src="react-logo.png" style={{ height: '20vh', width: 'auto' }} />
        <img className="picItem" src="css-logo.png" style={{ height: '20vh', width: 'auto' }} />
      </section>
      <br />
      <section className="bioContainer">
        <p className="bioText">
          I'm a Florida native and have lived in Melbourne all my life. I first became interested in
          coding after speaking with my uncle, who is a senior software architect for PayPal. As
          someone who knows me well, he suggested I look into coding and see if it interests me and
          that's how I got to where I am today. Before I starting coding I got my bachelor degree in
          organizational management but the reason for doing so was because I really didn't know
          what I wanted to do in life. I honestly wish I had started learning to code sooner but I
          am still glad I got my degree because there were still important lessons I learned and
          knowledge I gained.
        </p>
      </section>
    </div>
  );
}

export default About;
