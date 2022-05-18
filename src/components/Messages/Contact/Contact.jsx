
import M from './Contact.module.css';
import avatar from '../../../images/avatar.png';
import { NavLink } from 'react-router-dom';

const Contact = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={`${M.contact}`}>
            <div className={M.info}>
                <div className={M.personalInfo}>
                    <img src={avatar} alt="avatar" className={M.avatar} />
                    <div className={M.nameAndNick}>
                        <div className={M.name}>
                            {props.name}
                        </div>
                        <div className={M.nick}>
                            {props.nick}
                        </div>
                    </div>
                </div>
                <div className={M.date}>{props.date}</div>
            </div>
            <div className={M.lastMessage}>
                {props.lastMessage}   
            </div>
        </NavLink>
    )
}

export default Contact