import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { Image } from "../Image";
import styles from "../NewsBanner/NewsBanner.styles.module.css";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.newsBannerWrapper}>
      <Image image={item.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.publishedAt)} · by {item.author}</p>
    </div>
  );
};

export { NewsBanner };
