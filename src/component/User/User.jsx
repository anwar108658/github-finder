import React from 'react'
import UserItem from './UserItem'
const User = (props) => {
    // const user = [
    //     {
    //     id: 1,
    //     login: "mojombo",
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    //     },
    //     {
    //         id: 2,
    //         login: "defunkt",
    //         avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //         html_url: "https://github.com/defunkt",
    //         },
    //         {
    //             id: 3,
    //             login: "pjhyett",
    //             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //             html_url: "https://github.com/pjhyett",
    //             },
                
        
    // ]
    const styleobj = {
        display:'grid',
        gridTemplateColumns : 'repeat(auto-fit,minmax(300px,1fr))',
        gridGap : '1rem'
    }
  return (
    <div style={styleobj}>
        {props.user.map((item) => {
            return <UserItem key={item.id} user={item}></UserItem>
        })}
    </div>
  )
}

export default User;