import React, { useEffect, useState } from "react"
import './App.css';
import Video from "./pages/video"
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite' //documentação Firebase aplicação web

function App() {

  let maxHeight;
  if(window.innerHeigth <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos (){
      const videosCollection = collection(db, "videos")
      const videosSnapshot = await getDocs(videosCollection)
      const videosList = videosSnapshot.docs.map(doc => doc.data())
      setVideos(videosList)
  }

  useEffect(()=>{
    getVideos();
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app_videos">

        {video.map((item) => {
          return (
            <Video 
              likes={item.likes}       
              messages={item.messages}       
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

      </div>
    </div>
  );
}

export default App;


//Github https://github.com/JORGECARDOSODEV

