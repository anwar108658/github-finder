import React from 'react'
import './UserItem.css'

const UserItem = (props) => {
    // console.log(props)
    const userItem = {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
    }
    const {login,avatar_url,html_url} = props.user;
  return (
    <div className='userCard'>
        <img src={avatar_url} alt="This is a image" />
        <h2>{login}</h2>
        <a href={html_url}>Profile</a>
    </div>
  )
}

export default UserItem