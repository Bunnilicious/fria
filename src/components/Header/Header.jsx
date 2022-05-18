import React from 'react'

import H from './Header.module.css'
import bell from '../../images/bell.svg'
import add from '../../images/add.svg'
import avatar from '../../images/avatar.png'
import search from '../../images/search.svg'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={H.header}>
      <div className={H.logoWrapper}>
        <img src={logo} alt="logo" className={H.logo} />
      </div>
      <div className={H.content}>
        <div className={H.search}>
          <div className={H.searchText}>Search</div>
          <img src={search} alt="" className={H.searchImg} />
        </div>
        <div className={H.utils}>
          <img src={add} alt="add" className={H.utilsImage} />
          <img src={bell} alt="bell" className={H.utilsImage} />
          <img src={avatar} alt="add" className={H.avatar} />
        </div>
      </div>
    </header>
  )
}

export default Header