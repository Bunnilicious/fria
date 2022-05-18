import React from 'react';
import M from './Messages.module.css';
import Contact from './Contact/Contact';
import dots from '../../images/dots.svg'
import avatar from '../../images/avatar.png'
import send from '../../images/send.svg'

const Message = (props) => {
    return (
        <div className={M.someoneMessage}>
            <img src={avatar} alt="" className={M.senderAvatar} />
            <div className={M.messageContent}>
                <div className={M.nameAndDate}>
                    <div className={M.senderName}>{props.name}</div>
                    <div className={M.messageDate}>{props.date}</div>
                </div>
                <div className={M.messageText}>{props.message}</div>
            </div>
        </div>
    )
}

const Messages = (props) => {

    let messagesElement = props.messages.map(el => <Message name={el.name} date={el.date} message={el.message} />)
    let dialogsElements = props.dialogs.map(el => <Contact id={el.id} name={el.name} lastMessage={el.message} />)

    let messageInput = React.useRef()

    const sendMessage = () => {
        let currentMessage = messageInput.current.value
        messageInput.current.value = ''
        props.addNewMessage(currentMessage)
        console.log(currentMessage);
        console.log(Date.now);
    }

    return (
        <main className={M.main}>
            <div className={M.heading}>Messages</div>
            <div className={M.content}>
                <div className={M.contactList}>

                    {dialogsElements}

                </div>
                <div className={M.chat}>
                    <div className={M.receiverInfo}>
                        <div className={M.personalInfo}>
                            <img src={avatar} alt="" className={M.avatar} />
                            <div className={M.nameAndNick}>
                                <div className={M.name}>
                                    fdsfsd
                                </div>
                                <div className={M.nick}>
                                    @sopdsf
                                </div>
                            </div>
                        </div>
                        <img src={dots} alt="" className="dots" />
                    </div>
                    <div className={M.messages}>
                        {messagesElement}
                    </div>
                    <div className={M.sendForm}>
                        <input type="text" className={M.message} placeholder='Type message' ref={messageInput}/>
                        <button className={M.send} onClick={sendMessage} >
                            <img src={send} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Messages
