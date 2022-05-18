import React from 'react'

import P from './Profile.module.css'
import Post from './Post/Post'


import banner from '../../images/banner.png'
import avatar from '../../images/avatar.png'
import tick from '../../images/tick.svg';

const Main = () => {

  let posts = [
    { article: 'dfsf', heading: 'head', name: 'john', likesCount: '23', commentsCount: '25' },
    { article: 'dfsf', heading: 'head', name: 'john', likesCount: '23', commentsCount: '25' },
    { article: 'dfsf', heading: 'head', name: 'john', likesCount: '23', commentsCount: '25' },
    { article: 'dfsf', heading: 'head', name: 'john', likesCount: '23', commentsCount: '25' }
  ]

  let newPostElement = React.useRef();

  const addPost = () => {
    let currentText = newPostElement.current.value
    alert(currentText)
  }

  let postsElements = posts.map(el => <Post name={el.name} heading={el.heading} commentsCount={el.commentsCount} likesCount={el.likesCount} article={el.likesCount} />)

  return (
    <main className={P.content}>
      <img src={banner} alt="banner" className={P.banner} />
      <div className={P.info}>
        <img src={avatar} alt="avatar" className={P.avatar} />
        <div className={P.userContent}>
          <div className={P.stats}>
            <div className={P.nameWrapper}>
              <div className={P.name}>Sophia Kastello</div>
              <img src={tick} alt="tick" />
            </div>
            <div className={P.subsCounter}>720 followers</div>
          </div>
          <button className={P.subscribe}>Subscribe</button>
        </div>
      </div>
      <div className={P.posts}>Posts
        <textarea name="newPost" id="" cols="30" rows="10" ref={newPostElement}></textarea>
        <button type="submit" onClick={addPost}>submit</button>
      </div>
      {postsElements}
    </main>
  )
}

export default Main