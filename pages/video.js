import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from "./components/sidebar/VideoSidebar"
import "./video.css";

function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

        function handdleStart(){

            if(play){
                videoRef.current.pause();
                setPlay(false);
            } else {
                videoRef.current.play();
                setPlay(true);
            }
        }

  return (
    <div className='video'>
        <video 
            className='video_player'
            ref={videoRef}
            onClick={handdleStart}
            loop
            src={url}
        ></video>
        <VideoSidebar 
            likes={likes}
            messages={messages}
            shares={shares}
        />
        <VideoFooter 
            name={name}
            description={description}
            music={music}
        />
    </div>
  );
}

export default Video;

//Github https://github.com/JORGECARDOSODEV