import React from 'react'
import UserInfo from './UserInfo'

const PostCard = (props) => {
  const title = props.title
  const body = props.body
  const username = props.username
  const email = props.email
  return (
    <div className="postCard">
      <h3>{title}</h3>
      <p>{body}</p>
      <UserInfo name={username} email={email} />
    </div>
  )
}

export default PostCard