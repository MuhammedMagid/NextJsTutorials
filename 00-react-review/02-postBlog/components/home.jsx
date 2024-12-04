import { MdCreate, MdTrendingUp, MdGroup } from 'react-icons/md';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <>
    {true &&
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Welcome to Muhammed Blog</h1>
                <p className={styles.subtitle}>
                    Discover the latest insights in web development, React, and modern JavaScript
                </p>

                <Link to="/posts">
                <div className={styles.cta}>
                    <button className={styles.button}>
                        Start Reading
                    </button>
                </div>
                </Link>

            </section>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <MdCreate />
                    </div>
                    <h3 className={styles.featureTitle}>Write & Share</h3>
                    <p className={styles.featureDescription}>
                        Create engaging blog posts and share your knowledge with our growing community of developers.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <MdTrendingUp />
                    </div>
                    <h3 className={styles.featureTitle}>Stay Updated</h3>
                    <p className={styles.featureDescription}>
                        Keep up with the latest trends and best practices in web development and React ecosystem.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <MdGroup />
                    </div>
                    <h3 className={styles.featureTitle}>Join Community</h3>
                    <p className={styles.featureDescription}>
                        Connect with fellow developers, share ideas, and grow together in our supportive community.
                    </p>
                </div>
            </div>
        </div>
    
    }
    </>
);

}

export default Home;