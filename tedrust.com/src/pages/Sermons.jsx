import React from "react";
import YouTube from "react-youtube";

const Sermons = () => {
  const videoURLS = [
    "https://www.youtube.com/watch?v=Y8uhffH1rw4",
    "https://www.youtube.com/watch?v=Gv763R8gaT8",
    "https://www.youtube.com/watch?v=uf16AfpixYY",
    "https://www.youtube.com/watch?v=xG2VaLEnKnA",
    "https://www.youtube.com/watch?v=C6DHnIJH6jU",
    "https://www.youtube.com/watch?v=3N3xY_soaLI",
    "https://www.youtube.com/watch?v=d9kQ8sqzlQI",
    "https://www.youtube.com/watch?v=0EZ13zt_VPI",
    "https://www.youtube.com/watch?v=WxzClgF_UNI",
    //"https://www.youtube.com/watch?v=5Uzara3JDT8",
    //"https://www.youtube.com/watch?v=o8X0YbfHXmg",
    //"https://www.youtube.com/watch?v=FRt0dsEr_vc",
    //"https://www.youtube.com/watch?v=kE2EVDIH43g",
    //"https://www.youtube.com/watch?v=eDAI1GFIFLc",
    //"https://www.youtube.com/watch?v=enUyr1O1hjQ",
    //"https://www.youtube.com/watch?v=azMgGt2gbH0",
    // "https://www.youtube.com/watch?v=PLmYg-svjks",
    // "https://www.youtube.com/watch?v=Q-aXJYbk1M8",
    // "https://www.youtube.com/watch?v=yBOpI5AodOo",
    // "https://www.youtube.com/watch?v=IH977UNK0XY",
    // "https://www.youtube.com/watch?v=m88SHWWSNvI",
    // "https://www.youtube.com/watch?v=mXt3Hk9W458",
    // "https://www.youtube.com/watch?v=TZugHILtCdc",
    // "https://www.youtube.com/watch?v=dSiBiMqtR5A",
    // "https://www.youtube.com/watch?v=TFc4asY6cIM",
    // "https://www.youtube.com/watch?v=kwUZDn95GOw",
    // "https://www.youtube.com/watch?v=5eWG_7Lfnxk",
    // "https://www.youtube.com/watch?v=c7teb-65RKU",
    // "https://www.youtube.com/watch?v=cVdUBjHpy7s",
    // "https://www.youtube.com/watch?v=dPa1omkl67M",
    // "https://www.youtube.com/watch?v=YaabtceU3V4",
    // "https://www.youtube.com/watch?v=73oeCIJpGJY",
    // "https://www.youtube.com/watch?v=Su3cciUohM0",
    // "https://www.youtube.com/watch?v=rbd8wP90P88",
    // "https://www.youtube.com/watch?v=UjukgGbFImI",
    // "https://www.youtube.com/watch?v=TZ6-H8FrtKM",
    // "https://www.youtube.com/watch?v=elff5Sctx8I",
    // "https://www.youtube.com/watch?v=6m98Qn6FSvw",
    // "https://www.youtube.com/watch?v=RzYMEijN5XI",
  ];

  const options = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const mostRecentVideoURL = videoURLS[0];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 mt-8">Sermons</h1>
      <div className="w-full max-w-4xl">
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
          {videoURLS.slice(1).map((videoURL) => (
            <div className="relative pb-[20%]">
              <YouTube videoId={videoURL.split("=")[1]} opts={options} />
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-4">
          <ChevronDownIcon className="h-6 w-6 text-gray-600" />
        </div> */}
      </div>
    </div>
  );
};

export default Sermons;
