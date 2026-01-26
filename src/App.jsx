import React from "react";
import {
  fetchGIFKLIP,
  fetchPhotos,
  fetchVideosFromPexels,
} from "./api/mediaApi";

const App = () => {
  const getPhotos = async () => {
    const data = await fetchPhotos("car");
    console.log(data.results);
  };
  return (
    <div className="h-screen w-full bg-gray-900 text-2xl text-white  ">
      <button
        className="bg-gray-500 px-3 py-3 m-5 rounded-lg "
        onClick={getPhotos}
      >
        Get Photos
      </button>
      <button
        className="bg-gray-500 px-3 py-3 m-5 rounded-lg "
        onClick={async () => {
          const data = await fetchVideosFromPexels("car");
          console.log(data.videos);
        }}
      >
        Get Videos
      </button>{" "}
      <button
        className="bg-gray-500 px-3 py-3 m-5 rounded-lg "
        onClick={async () => {
          const data = await fetchGIFKLIP("go");
          console.log(data.data.data);
        }}
      >
        Get GIF
      </button>
    </div>
  );
};

export default App;
