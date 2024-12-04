import styles from '../components/createPost.module.css';
import { Form, redirect } from 'react-router-dom';

const CreatePost = ( ) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Create New Post</h2>
            <Form  method="post" className={styles.form}>
                <div className={styles.inputGroup}>

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        placeholder="Enter post title"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name='content'
                        placeholder="Write your post content"
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Create Post
                </button>
            </Form>
        </div>
    );
};


export default CreatePost;

export async function action({request}) {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    
    const testUrl = ''

      awaitfetch(testUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content
        })
    })
    return redirect('/posts');
}
