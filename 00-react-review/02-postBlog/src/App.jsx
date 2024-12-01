import PostList from "../components/postList";
import Header from "../components/header";
import Home from "../components/home";
import { useState } from "react";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const [isReadingPost, setIsReadingPost] = useState(false);
  const [isShowHome, setShowHome] = useState(true);

  const togglePosting = () => {
    setIsPosting(!isPosting);
    setShowHome(false);
    //setIsReadingPost(false);
  };

  const toggleReadingPost = () => {
    setIsReadingPost(true);
    setShowHome(false);
    setIsPosting(false);
  };

  const onToggleHome = () => {
    setShowHome(true);
    setIsPosting(false);
    setIsReadingPost(false);  
  };

  const onStartReading = () => {
    setShowHome(false);
    setIsPosting(false);
    setIsReadingPost(true);
  };

  return(
    <>
      <Header onTogglePosting={togglePosting} onToggleReadingPost={toggleReadingPost} onToggleHome={onToggleHome}/>

      <main>
        <Home isShowHome={isShowHome} onStartReading={onStartReading} />

        <PostList 
          isPosting={isPosting} 
          isReadingPost={isReadingPost} 
          onToggleReadingPost={toggleReadingPost}
        />
      </main>
    </>
  )
}

export default App;
