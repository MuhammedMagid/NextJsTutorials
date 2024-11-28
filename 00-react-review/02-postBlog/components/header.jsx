import { MdMessage, MdPostAdd } from 'react-icons/md';
import styles from './header.module.css';


const Header = ({onTogglePosting , onToggleReadingPost}) => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>

          <button className={styles.navButton} onClick={onToggleReadingPost}>
            <MdMessage size={20} />
            <span>Posts</span>
          </button>

          <button className={styles.navButton} onClick={onTogglePosting} >
            <MdPostAdd size={20} />
            <span>New Post</span>
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;