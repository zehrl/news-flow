import Card from 'react-bootstrap/Card';
// import { useState } from 'react';

const NewsCard = () => {
  return (

<div id="newsCard" >
<Card style={{ width: '30rem' }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card style={{ width: '30rem' }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '30rem' }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '30rem' }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '30rem' }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
  )
}

export default NewsCard