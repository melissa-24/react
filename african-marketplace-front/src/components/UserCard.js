import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserCard({ users }) {
	let params = useParams();
	let userID = params.id; //returns as string
	const selectedUser = users.filter((user) => user.id === parseInt(userID)); //returns array with single object
	const userObj = selectedUser[0]; //grabbing that object

	return (
		<section>
			<h2>Seller Page: {userObj.name}</h2>
			<div className='user-card'>
				<div className='user-card-left'>
					{/* <img src={`https://picsum.photos/id/${userObj.id + 1001}/150`} alt={`${userObj.first_name}'s profile`} />    */}
					{/* ⬆⬆⬆ Placeholder image ⬆⬆⬆ */}
				</div>
				<div className='user-card-right'>
					<h3>{userObj.username}</h3>
					{/* ⬆⬆⬆ replace above with userObj.username ⬆⬆⬆ */}
					<p>{userObj.name}</p>
					<p>📧 {userObj.email}</p>
					<p>🌎 {userObj.location}</p>
				</div>
			</div>
			<Link to='/users'>🔙 Back to All Sellers</Link>
		</section>
	);
}

export default UserCard;
