import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const resPhotos = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return resPhotos.data;
}

export async function fetchVideosFromPexels(query, page = 1, per_page = 20) {
  const resVideos = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${PEXELS_KEY}`,
    },
  });
  return resVideos.data;
}

export async function fetchGIFKLIP(query, page = 1, per_page = 20) {
  const resGIF = await axios.get(
    `https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search`,
    {
      params: {
        q: query,
        page,
        per_page,
      },
    },
  );
  return resGIF.data;
}
