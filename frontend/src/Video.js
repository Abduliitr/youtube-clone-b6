// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'
import tmkoc from './images/tmkoc.jpg'
import profilePicture from './images/avtar.png'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'


const VideoInfo = () => {
  return (
      <>
          <h1 id='video-title' className='fs-5 fw-bold my-3'> Abdul Hannan & Rovalio - Iraaday (Official Music Video) </h1> 
          <div id='top-row' className='row'>
              <div id='owner' className='d-flex col-lg-5'>
                  <img src={profilePicture} className='p-1' width={55} height={55}></img>
                  <div>
                      <h2 className='fs-5 px-1 py-1 m-0 artist-name fontsize-smaller'> Abdul Hannan </h2>
                      <p className='px-1 m-0 text-muted artist-subscribers'>273K subscribers</p>
                  </div>
                  <button className='bg-black text-white fw-bold rounded-5 m-2 mx-3 p-1 px-3 subscribe-button'>Subscribe</button>
              </div>
              <div id='actions' className='col-lg my-2 justify-space-around'>
                  <button className='action-button rounded-5 m-1 p-2 px-4 border-0'>
                      <LiaThumbsUp size={'1.4rem'} /><h6 className='fontsize-small  p-1 px-2 d-inline d-lg-none d-xl-inline '>597K</h6> | <LiaThumbsDown size={'1.4rem'} />
                  </button>
                  <button className='action-button rounded-5 p-2 px-3 border-0'>
                      <PiShareFatLight size={'1.4rem'}/><h6 className='fontsize-small d-inline p-1'>Share</h6>
                  </button>
                  <button className='action-button rounded-5 p-2 px-3 border-0 d-inline d-lg-none d-xl-inline d-xs-none d-md-inline'>
                      <LiaDownloadSolid size={'1.4rem'}/><h6 className='fontsize-small d-inline p-1'>Download</h6>
                  </button>
                  <button className='action-button rounded-5 p-2 px-3 border-0 float-lg-end'>
                      <h6>...</h6>
                  </button>
              </div>
              <div className='col-sm-12 video-description rounded-4 p-2'>
                  <h6 className='fontsize-small p-1'>434K views &nbsp; 1 year ago</h6>
                  <p className='fontsize-smaller'>
                      Here is the compilation video for all the random suggestions Shukla Ji gave from 
                      the film Chhalaang. Watch this video for non stop laughter and let us know in 
                      the comments which suggestion did you relate with the most.
                  </p>
              </div>
          </div>
      </>
  );
}

function SuggestedVideo(){
  return (<>
    <div className='suggested-video'>
      <div className='suggestion-image'>
        <img src={tmkoc} width={'230px'} />
      </div>
      <div className='suggestion-content'>
        <div class="video-info">
            <p class="track-title margin-0 video-info-title">
              Kalank Title Track - Lyrical | Alia Bhatt
            </p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
        </div>
      </div>
    </div>
  </>);
}

function Video() {
  // const [seconds, setSeconds] = useState(10);
  // const targetTime = Math.floor((new Date()).getTime()/1000 + 10);

  // when page renders
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     const currentTime = Math.floor((new Date()).getTime()/1000);
  //     const remainingTime = targetTime - currentTime;

  //     if(remainingTime >= 0) setSeconds(remainingTime);

  //   }, 1000)
  // }, []);

  let videos = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      {/* Video comp
      <h3>Remaining time : {seconds}</h3> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src="https://www.youtube.com/embed/Grr0FlC8SQA?si=8TyAKqTfvtCYcIdO?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <VideoInfo />
        </div>
        <div className='suggestions'>
          <p>Suggested Videos:</p>
          {videos.map((videoId) => {
              return <SuggestedVideo />
          })}
        </div>
      </div>

    </div>
  )
}

export default Video
