import React, { Component } from 'react'
import YouTube from 'react-youtube'

import btn_play_img from '../../../assets/images/btn_play.png'
import youtube_img from '../../../assets/images/youtube.png'

import './index.scss'

class Videos extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    }

    return (
      <div className='videos'>
        <div className='category'>{'Videos'}</div>
        <div className='btn-play'>
          <img src={btn_play_img} alt={'play'} />
        </div>
        <div className='youtube'>
          <img src={youtube_img} alt={'youtube'} />
        </div>
        {/* <YouTube
          videoId=''
          opts={opts}
          onReady={this._onReady}
        /> */}
      </div>
    )
  }
}

export default Videos
