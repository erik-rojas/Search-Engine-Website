import React from 'react'
import propTypes from 'prop-types'

import btn_prev_img from '../../../assets/images/btn_prev.png'
import btn_next_img from '../../../assets/images/btn_next.png'

const styles = {
  wrapper: {
    position: 'absolute',
    width: '112%',
    zIndex: '100',
    bottom: '0',
    textAlign: 'center',
    marginLeft: '-6%'
  },
  btn: {
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    top: '-150px',
    bottom: '0',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // font: '16px/30px sans-serif',
    color: '#4285F4',
    backgroundColor: 'white',
    boxShadow: '0 0.5px 3px rgba(110, 109, 109, 0.5)'
  },
  left: {
    left: '0'
  },
  right: {
    right: '0'
  },
  img: {
    height: '20px'
  }
}

export default function Buttons (props) {
  const prevBtnStyle = Object.assign({}, styles.btn, styles.left)
  const nextBtnStyle = Object.assign({}, styles.btn, styles.right)
  const { index, total, loop, prevHandler, nextHandler } = props
  return (
    <div style={styles.wrapper}>
      { (loop || index !== 0) && (
        <div style={prevBtnStyle} onClick={prevHandler}>
          <img src={btn_prev_img} alt={'prev'} style={styles.img} />
        </div>
      )}
      { (loop || index !== total - 1) && (
        <div style={nextBtnStyle} onClick={nextHandler}>
          <img src={btn_next_img} alt={'next'} style={styles.img} />
        </div>
      )}
    </div>
  )
}

Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
}
