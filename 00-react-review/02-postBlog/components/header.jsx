import { MdMessage, MdPostAdd  , MdHome} from 'react-icons/md';
import styles from './header.module.css';
import { Link } from 'react-router-dom'; 

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>

          <Link to="/" className={styles.navButton} >
          <MdHome size={20}  />
          <span>Home</span>
          </Link>

          <Link to="/posts" className={styles.navButton}>
          <MdMessage size={20}  />
          <span>Posts</span>
          </Link>

          <Link to="/create-post" className={styles.navButton}>
          <MdPostAdd size={20} />
          <span>New Post</span>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;