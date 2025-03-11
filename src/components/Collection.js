import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Collection = ({ results, onSelectTrack }) => {
  return (
    <Row>
      {results.map((item) => (
        <Col key={item.id} md={4} className="mb-4">
          <Card>
            {item.thumb && (
              <Card.Img variant="top" src={item.thumb} alt={item.title} />
            )}
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.year}</Card.Text>
              <Button onClick={() => onSelectTrack(item.audioUrl)}>Play</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Collection;
