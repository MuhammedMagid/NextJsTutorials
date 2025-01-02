import {FAKE_ARTICLES} from '@/articles'
import { notFound } from 'next/navigation';


const Article = ({params}) => {
    const articleId = params.id;

    const article = FAKE_ARTICLES.find(article=>article.slug === articleId)
    
    if (!article){
        notFound();
    }

    return (
        <main>
            <span>{article.date}</span>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </main>
    );
};

export default Article;