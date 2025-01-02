import Link from "next/link";

import { FAKE_ARTICLES } from "@/articles";

const ArticlesPage = ()=>{
  return(
    <>
    <header>
      <h1>Articles Pages</h1>
    </header>

    <main>
      {FAKE_ARTICLES.map(article=>{
        return(
          <ul>
          <li key={article.id}>
            <Link href= {`/articles/${article.slug}`} > {article.title}</Link>
          </li>
          </ul>
        )
      })}
   
    </main>
    </>
  )

}

export default ArticlesPage;