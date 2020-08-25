import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllUsers() {
    const [ userState, setUserState ] = useState({});

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
            <div>All Users Component</div>
            
        </section>
    );
}

export default AllUsers;