import Link from "next/link";
import styles from './main-layout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/about" className={styles.link}>About</Link>
          </li>
          <li className={styles.li}>
            <Link href="/articles" className={styles.link}>Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainLayout;