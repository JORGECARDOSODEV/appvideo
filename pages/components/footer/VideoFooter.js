import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
        <div className="videoFooter_text">
            <h3>@{ name }</h3>
            <p>{ description }</p>
            <div className="videoFooter_music">
              <MusicNoteIcon className="videoFooter_icon" />
              <div className="videoFooterMusic_text">
                <p>{ music }</p>
              </div>
            </div>            
        </div>
        <img 
          className="videoFooter_record"
          alt="Imagem de um vinil girando"
          src="https://firebasestorage.googleapis.com/v0/b/aula-5f3e1.appspot.com/o/vinil.png.png?alt=media&token=ad4badd1-e766-42ca-aa99-882331530d2c"
        />
    </div>
  );
}

export default VideoFooter;