import { NewsItem } from "../NewsItem"
import styles from "../NewsList/NewsList.styles.module.css"



const NewsList = ({news}) => {
  return (
    <ul className={styles.list}>
        {news?.map((item) => (
            <NewsItem key={item.id} item={item}/>
        ))}
    </ul>
  )
}

export {NewsList}