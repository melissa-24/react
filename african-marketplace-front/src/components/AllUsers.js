import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route , Link} from 'react-router-dom';
import UserCard from './UserCard';
//import './AllUsers.css';

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
            <h2>All Sellers</h2>
            <p>Below are all our registered small business owners. Please click on thier name for more information.</p>
            <div className='users-container'>
                <ul>
                {userState.map(user => {
                    return (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{`user${user.id}`} ({user.first_name} {user.last_name})</Link>                       
                        </li> 
                        /* Change to {username} (name) */

                    )
                })}
                </ul>
            </div>
            <Route path='/users/:id'>
                <h3>Hello!</h3>
                <UserCard user = {userState}/>
            </Route>       
        </section>
    );
}

export default AllUsers;