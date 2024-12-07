const Article = ({params}) => {
    return (
        <main>
            <h1>Article</h1>
            <p>{params.id}</p>
        </main>
    );
};

export default Article;