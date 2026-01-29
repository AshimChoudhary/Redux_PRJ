import React from "react";

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

import { useDispatch } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();
  return <div>ResultGrid</div>;
};

export default ResultGrid;
