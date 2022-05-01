import React from 'react'
import '../../style/header/header.css'

function header(props) {
  return (
    <header className='header'>

      <div className='header__title'>
        <a href="#index" className='header__link'>{props.title}</a>
      </div>

      <div className='header__message'>
        <a href="#index" className='header__link'>who are we</a>
        <a href="#index" className='header__link'>buy now</a>
        <a href="#index" className='header__link'>contact us</a>
      </div>


    </header>
  )
}

export default header
