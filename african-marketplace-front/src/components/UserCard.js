import React from 'react';
import {useParams} from 'react-router-dom';

function UserCard({users}) {
    
    let params = useParams();
    let userID = {...params}
    const selectedUser = users.filter(user => params.id === user.id)
    console.log('data', users)
    console.log(params.id)
    console.log('user clicked', selectedUser)
    return(
    <p>
        User Card
    </p>
/*         <div className='user-card'>
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
    </div> */
    )
}

export default UserCard;
