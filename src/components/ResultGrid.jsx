import React, { useEffect } from "react";

import {
  fetchGIFKLIP,
  fetchPhotos,
  fetchVideosFromPexels,
} from "../api/mediaApi";

import {
  setQuery,
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";

import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      if (!query || query.trim() === "") return;

      try {
        dispatch(setLoading());
        let data = [];
        let response;
        if (activeTab == "photo") {
          response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            src: item.urls.full,
            thumbnail: item.urls.regular,
            url: item.links.html,
          }));
        }

        if (activeTab == "video") {
          response = await fetchVideosFromPexels(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          response = await fetchGIFKLIP(query);
          data = response.data.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.blur_preview,
            src: item.file.hd.gif.url,
            url: item.file.hd.mp4.url,
          }));
        }

        // console.log(data);

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err));
      }
    };
    getData();
  }, [query, activeTab]);

  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="flex w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
