import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search for music..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
