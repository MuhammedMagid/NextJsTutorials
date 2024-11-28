import styles from "./post.module.css"

const Post = ({title,content})=>{
    return(
      <div className={styles["post-card"]}>
        <div className={styles["post-card__content"]}>
          <h2 className={styles["post-card__title"]}>{title}</h2>
          <p className={styles["post-card__excerpt"]}>{content}</p>
          <div className={styles["post-card__meta"]}>
            <span className={styles["post-card__author"]}>Author Name</span>
            <span className={styles["post-card__date"]}>June 1, 2023</span>
          </div>
        </div>
      </div>
    
    )
}
export default Post;