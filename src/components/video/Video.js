import React from 'react';

import './video.css';

import back from '../../assets/back.mp4';

function Video() {
  return (
    <div className='video'>
            <video className='video_video' src={back}  autoPlay loop muted/>
    </div>
  )
}

export default Video;
