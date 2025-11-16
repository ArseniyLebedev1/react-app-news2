import { useEffect, useState } from "react";
import styles from "../MainPage/MainPage.styles.module.css";
import { getNews } from "../../api/apiNews";
import { NewsBanner } from "../../components/NewsBanner";
import { NewsList } from "../../components/NewsList";
import { Skeleton } from "../../components/Skeleton";

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

  return (
    <main className={styles.mainPageWrapper}>
      {news?.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" /> 
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </main>
  );
};

export { MainPage };
