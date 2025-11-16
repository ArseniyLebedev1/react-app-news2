import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}top-headlines?country=us&${API_KEY}`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    // console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
