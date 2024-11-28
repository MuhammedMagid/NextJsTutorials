import PostList from "../components/postList";
import Header from "../components/header";
import { useState } from "react";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [isReadingPost, setIsReadingPost] = useState(true);    

  const togglePosting = () => {
    setIsPosting(!isPosting);
  };

  const toggleReadingPost = () => {
    setIsReadingPost(!isReadingPost);
  };

  return(
    <>
      <Header onTogglePosting={togglePosting} onToggleReadingPost={toggleReadingPost}/>
      <main>
        <PostList isPosting={isPosting} isReadingPost={isReadingPost} onClose={() => setIsPosting(false)}/>
      </main>
    </>
  )
}

export default App;
