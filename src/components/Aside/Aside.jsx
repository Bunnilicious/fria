import A from './Aside.module.css'

import messages from '../../images/messages.svg'
import leaf from '../../images/leaf.svg'
import user from '../../images/user.svg'
import { NavLink } from 'react-router-dom'
// import avatar from '../images/avatar.png'
// import avatar from '../images/avatar.png'

const Aside = () => {
  return (
    <aside className={A.navigation}>
      <NavLink to="/profile" className={A.item}>
        <img className={A.icon} src={user} alt="user"></img>
        <span className={A.name} >Account</span>
      </NavLink>

      <a href="/leaf" className={A.item}>
        <img className={A.icon} src={leaf} alt="leaf"></img>
        <span className={A.name}>Leefs</span>
      </a>
      
      <NavLink to="/messages" className={A.item}>
        <img className={A.icon} src={messages} alt="messages"></img>
        <span className={A.name}>Messages</span>
      </NavLink>
    </aside>
  )
} 

export default Aside