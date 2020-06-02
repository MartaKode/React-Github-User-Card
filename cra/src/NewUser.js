import React from 'react'

const NewUser = (props) => {

    return (
        <div>
            <h2>Username: {props.users.login}</h2>
            <img src={props.users["avatar_url"]} />
            <p>Followers: {props.users.followers}</p>

        </div>
    )
}

export default NewUser;