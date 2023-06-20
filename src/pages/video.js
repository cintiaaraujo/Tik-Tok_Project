import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/videoFooter";
import VideoSidebar from "./components/sidebar/videoSidebar"
import "./video.css";

function Video({likes, messeges, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setplay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setplay(false);
    } else {
      videoRef.current.play();
      setplay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes} 
        messeges={messeges}
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
