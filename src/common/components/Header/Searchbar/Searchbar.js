import React, { Component } from 'react'

import logo_img from '../../../../assets/images/logo.png'
import btn_voice_img from '../../../../assets/images/btn_record.png'
import btn_search_img from '../../../../assets/images/btn_search.png'
import btn_apps_img from '../../../../assets/images/btn_apps.png'
import btn_notify_img from '../../../../assets/images/btn_notify.png'
import btn_avatar_img from '../../../../assets/images/btn_avatar.png'

import './Searchbar.scss'

class Searchbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchKey: ''
    }
  }

  render() {
    return (
      <div className='searchBar'>
        <div className='logo-section'>
          <img src={logo_img} alt={'Logo'} />
        </div>
        <div className='search-section'>
          <div className='input-section'>
            <input className='input-search-key' />
            <div className='search-btn-section'>
              <img src={btn_search_img} alt={'Search'} />
            </div>
          </div>
        </div>
        <div className='avatar-section'>
          <div className='voice-btn-section'>
            <img src={btn_voice_img} alt={'Voice'} />
          </div>
          <div className='right-section'>
            <div className='apps-btn-section'>
              <img src={btn_apps_img} alt={'Apps'} />
            </div>
            <div className='notify-btn-section'>
              <img src={btn_notify_img} alt={'Notify'} />
            </div>
            <div className='avatar-btn-section'>
              <img src={btn_avatar_img} alt={'Avatar'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Searchbar
