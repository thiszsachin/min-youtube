import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <h1
        style={{
          textAlign: "center",
          color: "grey",
          padding: "30px",
        }}
      >
        Search any video from YouTube
      </h1>
    );
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "'15px" }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
