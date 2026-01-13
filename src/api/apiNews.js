import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}everything?q=us`, {
      params: {
        apiKey: API_KEY,
        page,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
