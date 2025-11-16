import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { Image } from "../Image";
import styles from "../NewsItem/NewsItem.styles.module.css";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.newsItemWrapper}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${item.urlToImage})` }}
      ></div>

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} · by {item.author}
        </p>
      </div>
    </li>
  );
};

export { NewsItem };
