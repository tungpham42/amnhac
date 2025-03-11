import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./components/Search";
import Collection from "./components/Collection";
import Player from "./components/Player";
import searchCollection from "./api/discogsApi";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async (query) => {
    const data = await searchCollection(query);
    setResults(data);
  };

  return (
    <Container className="mt-4">
      <h1>Discogs Music Collection Player</h1>
      <Search onSearch={handleSearch} />
      <Collection results={results} onSelectTrack={setSelectedTrack} />
      {selectedTrack && <Player trackUrl={selectedTrack} />}
    </Container>
  );
};

export default App;
