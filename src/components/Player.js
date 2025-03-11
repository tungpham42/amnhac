import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

const Player = ({ trackUrl }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleProgress = ({ played }) => setProgress(played);

  const handleSeekChange = (e) => {
    const seekTo = parseFloat(e.target.value);
    playerRef.current.seekTo(seekTo);
    setProgress(seekTo);
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        {trackUrl ? (
          <>
            <ReactPlayer
              ref={playerRef}
              url={trackUrl}
              playing={isPlaying}
              volume={volume}
              onProgress={handleProgress}
              width="100%"
              height="50px"
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
            <Row className="mt-3 align-items-center">
              <Col xs="auto">
                <Button variant="primary" onClick={togglePlayPause}>
                  {isPlaying ? "Pause" : "Play"}
                </Button>
              </Col>
              <Col>
                <Form.Range
                  min={0}
                  max={1}
                  step={0.01}
                  value={progress}
                  onChange={handleSeekChange}
                />
              </Col>
              <Col xs="auto">
                <Form.Label>Volume</Form.Label>
                <Form.Range
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </Col>
            </Row>
          </>
        ) : (
          <p>No track selected.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default Player;
