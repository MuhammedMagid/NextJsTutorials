import { useState } from 'react';
import styles from './createPost.module.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle post creation here
        console.log({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Create New Post</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post content"
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;