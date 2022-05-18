import P from './Post.module.css'

import tick from '../../../images/tick.svg';
import repost from '../../../images/repost.svg'
import like from '../../../images/like.svg'
import comment from '../../../images/comment.svg'
import save from '../../../images/save.svg'

import postPreview from '../../../images/postPreview.png'
import authorAvatar from '../../../images/authorAvatar.png'

const Post = (props) => {
    return (
        <div className={P.post}>
            <div className={P.author}>
                <img src={authorAvatar} alt="" />
                <div className={P.nameWrapper}>
                    <div className={P.name}>{props.name}</div>
                    <img src={tick} alt="tick" className={P.tick} />
                </div>
            </div>
            <img src={postPreview} alt="post preview" className={P.postPreview} />
            <div className={P.content}>
                <div className={P.heading}>{props.heading}</div>
                <div className={P.article}>{props.article}</div>
                <div className={P.utils}>
                    <div className={`${P.utilsItem} + ${P.utilsItemWithText}`}>
                        <img src={like} alt="" />
                        {/* <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0005 26.25L14.6659 26.6215L15.0005 26.9229L15.3351 26.6215L15.0005 26.25ZM14.5821 25.8732L14.9167 25.5017L14.9099 25.4956L14.903 25.4898L14.5821 25.8732ZM15.0005 6.872L14.6205 7.19694L15.0005 7.64139L15.3805 7.19694L15.0005 6.872ZM15.4189 25.8732L15.0964 25.4911L15.0903 25.4963L15.0843 25.5017L15.4189 25.8732ZM28.9951 20.6692L29.4876 20.7555L29.4876 20.7555L28.9951 20.6692ZM29.1199 11.2101L29.5732 10.9991L29.3302 10.4769L28.8473 10.7909L29.1199 11.2101ZM24.047 14.0193L24.1803 14.5012L24.1803 14.5012L24.047 14.0193ZM16.7018 20.3485L17.1986 20.4055L17.1986 20.4055L16.7018 20.3485ZM19.8919 22.0478L20.3716 22.1889L19.8919 22.0478ZM26.5396 14.6649L26.8907 15.0208L26.5396 14.6649ZM15.3351 25.8785L14.9167 25.5017L14.2475 26.2448L14.6659 26.6215L15.3351 25.8785ZM14.903 25.4898C10.1363 21.5004 7.15527 18.8399 5.36077 16.617C3.59222 14.4263 3.00049 12.691 3.00049 10.5323L2.00049 10.5323C2.00049 12.949 2.69014 14.9009 4.58267 17.2451C6.44925 19.5573 9.50902 22.2795 14.2612 26.2566L14.903 25.4898ZM3.00049 10.5323C3.00049 7.02945 5.76871 4.25 9.09044 4.25L9.09044 3.25C5.1946 3.25 2.00049 6.49925 2.00049 10.5323L3.00049 10.5323ZM9.09044 4.25C11.8916 4.25 13.489 5.87361 14.6205 7.19694L15.3805 6.54707C14.2108 5.17901 12.3563 3.25 9.09044 3.25L9.09044 4.25ZM15.3805 7.19694C16.512 5.87361 18.1094 4.25 20.9105 4.25L20.9105 3.25C17.6447 3.25 15.7902 5.17901 14.6205 6.54707L15.3805 7.19694ZM20.9105 4.25C24.2795 4.25 27.0005 7.07804 27.0005 10.5323L28.0005 10.5323C28.0005 6.55831 24.8638 3.25 20.9105 3.25L20.9105 4.25ZM15.0843 25.5017L14.6659 25.8785L15.3351 26.6215L15.7535 26.2448L15.0843 25.5017ZM19.2249 24.7993C19.3207 26.0628 19.663 27.4522 20.3572 28.9433L21.2637 28.5212C20.6177 27.1333 20.3083 25.8608 20.2221 24.7237L19.2249 24.7993ZM19.5499 25.2304C20.944 25.7468 23.1196 26.1648 25.1073 25.6941C26.1102 25.4566 27.0782 24.9894 27.8635 24.1821C28.6503 23.3733 29.2254 22.2523 29.4876 20.7555L28.5026 20.583C28.2696 21.9132 27.7728 22.8412 27.1467 23.4848C26.5192 24.1299 25.7333 24.5182 24.8768 24.721C23.1458 25.1309 21.1808 24.7681 19.8972 24.2927L19.5499 25.2304ZM29.4876 20.7555C29.9878 17.9005 30.1153 15.7008 30.0679 14.1035C30.0211 12.5259 29.8026 11.4918 29.5732 10.9991L28.6666 11.4211C28.8084 11.7256 29.0227 12.594 29.0684 14.1332C29.1134 15.6526 28.993 17.7839 28.5026 20.583L29.4876 20.7555ZM28.8473 10.7909C27.5608 11.6276 26.1851 12.909 23.9136 13.5374L24.1803 14.5012C26.6499 13.818 28.2564 12.368 29.3925 11.6292L28.8473 10.7909ZM23.9136 13.5374C23.2607 13.7181 21.4922 14.2515 19.8154 15.2955C18.1472 16.3343 16.475 17.94 16.2051 20.2915L17.1986 20.4055C17.4172 18.5006 18.7803 17.118 20.344 16.1444C21.8991 15.1761 23.5588 14.6732 24.1803 14.5012L23.9136 13.5374ZM16.2051 20.2915C15.9839 22.2185 16.5468 23.4997 17.3962 24.2847L18.075 23.5503C17.4957 23.0149 17.0078 22.0676 17.1986 20.4055L16.2051 20.2915ZM17.3962 24.2847C18.138 24.9703 19.0502 25.232 19.7012 25.261L19.7458 24.262C19.2899 24.2417 18.6154 24.0498 18.075 23.5503L17.3962 24.2847ZM17.411 23.5372C16.6905 24.1521 15.9205 24.8014 15.098 25.4898L15.7398 26.2566C16.564 25.5669 17.3365 24.9154 18.0602 24.2978L17.411 23.5372ZM17.4131 23.5354L15.0964 25.4911L15.7414 26.2553L18.0581 24.2996L17.4131 23.5354ZM19.4123 21.9067C19.1538 22.7852 19.0757 23.7498 19.2284 24.8314L20.2186 24.6917C20.0847 23.7435 20.1556 22.9233 20.3716 22.1889L19.4123 21.9067ZM28.6696 10.9929C28.0558 12.2655 27.1788 13.3318 26.1884 14.309L26.8907 15.0208C27.9278 13.9977 28.8892 12.8395 29.5703 11.4273L28.6696 10.9929ZM26.1884 14.309C25.559 14.9299 24.8897 15.5094 24.2159 16.0837C23.5464 16.6543 22.8679 17.2236 22.2428 17.8086C20.9937 18.9774 19.8957 20.2634 19.4123 21.9067L20.3716 22.1889C20.7786 20.8055 21.7174 19.6698 22.926 18.5388C23.5298 17.9738 24.1854 17.4236 24.8645 16.8448C25.5393 16.2696 26.2331 15.6696 26.8907 15.0208L26.1884 14.309ZM27.0005 10.5323C27.0005 11.9483 26.745 13.1669 26.0946 14.437L26.9846 14.8928C27.7156 13.4654 28.0005 12.0874 28.0005 10.5323L27.0005 10.5323Z" fill="#444444" />
                        </svg> */}
                        <span>{props.likesCount}</span>
                    </div>
                    <div className={`${P.utilsItem} + ${P.utilsItemWithText}`}>
                        <img src={comment} alt="" />
                        <span>{props.commentsCount}</span>
                    </div>
                    <div className={P.utilsItem}>
                        <img src={save} alt="" />
                    </div>
                    <div className={P.utilsItem}>
                        <img src={repost} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post