import { useEffect, useState } from "react";
import styles from "../MainPage/MainPage.styles.module.css";
import { getNews } from "../../api/apiNews";
import { NewsBanner } from "../../components/NewsBanner";
import { Image } from "../../components/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { NewsItem } from "../../components/NewsItem";
import { NewsList } from "../../components/NewsList";

const MainPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewsData = async () => {
    try {
      setIsLoading(true);
      const response = await getNews();
      setNews(response.articles);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  //   console.log(response.news);

  return (
    <main className={styles.mainPageWrapper}>
      {news?.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <p>Loading...</p> // Здесь будет скелетон
      )}
      <NewsList news={news}/>
    </main>
  );
};

export { MainPage };
