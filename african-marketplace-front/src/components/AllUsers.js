import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllUsers.css';

function AllUsers() {
    const [ userState, setUserState ] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2api/users')
        .then(res => {
            console.log('axois sucess!', res.data.data);
            setUserState(res.data.data);
        })
        .catch(err => console.log('axios error', err));
    }, []);
   

    return (
        <section>
            <h2>All Users Component</h2>
            <div className='users-container'>
                {userState.map(user => {
                    return (
                        <div key={user.id} className='user-card'>
                            <div className='user-card-left'>
                                <img src={user.avatar} alt={`${user.first_name}'s profile`} />
                                <p>username12345</p>
                                <p><a href='#'>Visit Store</a></p>
                            </div>
                            <div className='user-card-right'>
                                <p>{user.first_name} {user.last_name}</p>
                                <p>{user.email}</p>
                                <p>Location: USA</p>
                            </div>
                        </div>)
                })}
            </div>
            
        </section>
    );
}

export default AllUsers;