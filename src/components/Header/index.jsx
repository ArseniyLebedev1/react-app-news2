import { formatDate } from "../../helpers/formatDate";
import { DayTimeGreeting } from "../DayTimeGreeting";
import styles from "../Header/Header.styles.module.css";

const Header = () => {

  return (
    <header className={styles.headerWrapper}>
      <DayTimeGreeting />
      <p className={styles.headerDate}>{formatDate(new Date())}</p>
    </header>
  );
};

export { Header };
