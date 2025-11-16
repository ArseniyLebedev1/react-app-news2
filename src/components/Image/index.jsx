import styles from "../Image/Image.styles.module.css";

const Image = ({ image }) => {
  return (
    <div className={styles.newsBannerWrapper}>
      {image ? <img className={styles.image} src={image} alt="news" /> : null}
    </div>
  );
};

export { Image };
