import React from 'react';

function UserCard({user}) {
    return(
        <div key={user.id} className='user-card'>
            <div className='user-card-left'>
                <img src={`https://picsum.photos/id/${user.id + 1001}/150`} alt={`${user.first_name}'s profile`} />                               
                <p><a href='#'>Visit Store</a></p>
            </div>
            <div className='user-card-right'>
                <h3>username12345</h3>
                <p>{user.first_name} {user.last_name}</p>
                <p>📧 {user.email}</p>
                <p>🌎 USA</p>
            </div>
        </div>
    )
}

export default UserCard;
