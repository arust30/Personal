import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Sermons = () => {
  const [videoURLs, setVideoURLs] = useState([]);

  const options = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  // Fetch video URLs when component mounts
  useEffect(() => {
    fetchVideoURLs();
  }, []);

  const fetchVideoURLs = async () => {
    const API_KEY = 'YOUR_YOUTUBE_API_KEY';
    const PLAYLIST_ID = 'PL90w0mfZzxvIIpG3BAGNCtnX8rU6ULAIo';
    const MAX_RESULTS = 10; // Get 10 most recent videos
    
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
      );
      const data = await response.json();
      const fetchedURLs = data.items.map(
        item => `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
      );
      setVideoURLs(fetchedURLs);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    }
  };

  const mostRecentVideoURL = videoURLs[0];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 mt-8">Sermons</h1>
      <div className="w-full max-w-4xl">
        {mostRecentVideoURL ? (
          <>
            <div className="relative pb-[56.25%]">
              <YouTube
                videoId={mostRecentVideoURL.split("=")[1]}
                opts={options}
                className="h-full w-full absolute top-0 left-0"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href={mostRecentVideoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Watch on YouTube
              </a>
            </div>
            <hr className="my-8" />
            <h2 className="text-2xl font-bold mb-4">Past Sermons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoURLs.slice(1).map((videoURL) => (
                <div className="relative pb-[20%]" key={videoURL}>
                  <YouTube videoId={videoURL.split("=")[1]} opts={options} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
};

export default Sermons;
