import React from 'react';
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

function Portfolio() {
  const images = [
    {
      original: process.env.PUBLIC_URL + '/images/TipTopNails.png',
      originalAlt: 'Project Screenshot',
      originalTitle: 'Weather Today',
      description:
        'In this application users want to know the current and 5 day weather for an exact location and retrieve it by typing in city and choosing a country.',
      repo: 'https://github.com/jasmith188/WeatherToday/',
      live: 'https://jasmith188.github.io/WeatherToday/',
      tech: ['MongoDB', 'Mongoose', 'Express', 'React', 'Node.js'],
    },
  ];

  return (
    <div className='project container'>
     <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}

export default Portfolio;
