import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch('http://102.133.146.44/api/v1/core/4/video/');
        const data = await response.json();
        setVideoUrl(data.video_url);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div grid-3>
      <h1>Video Page</h1>
      {videoUrl ? (
        <ReactPlayer
          url={videoUrl}
          controls
          width="600px"
          height="400px"
          playing
          muted={false}
        />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPage;
