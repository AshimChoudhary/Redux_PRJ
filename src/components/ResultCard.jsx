import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[18vw] h-80 relative rounded bg-white">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="absolute bottom-0 text-white  w-full px-6 py-10 "
      >
        <h2 className="text-xl font-semibold capitalize">{item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
