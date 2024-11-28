import PostList from "../components/postList";
import Header from "../components/header";
import Home from "../components/home";
import { useState } from "react";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [isReadingPost, setIsReadingPost] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const togglePosting = () => {
    setIsPosting(!isPosting);
    setShowHome(false);
  };

  const toggleReadingPost = () => {
    setIsReadingPost(!isReadingPost);
    setShowHome(false);
  };

  const startReading = () => {
    setIsReadingPost(true);
    setShowHome(false);
  };

  return(
    <>
      <Header onTogglePosting={togglePosting} onToggleReadingPost={toggleReadingPost}/>
      <main>
        {showHome && <Home onStartReading={startReading}/>}
        <PostList 
          isPosting={isPosting} 
          isReadingPost={isReadingPost} 
          onClose={() => setIsPosting(false)}
        />
      </main>
    </>
  )
}

export default App;
