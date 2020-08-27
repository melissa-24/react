import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../actions/itemActions';

function DisplayAllItems(props) {
	useEffect(() => {
		props.getAllItems();
		// console.log(props);
	}, []);

	return (
		<div>
			{props.items.map((item) => {
				return (
					<div key={item.id}>
						<span>Item Name:{item.product}</span>
						<br />
						<span>Description: {item.description}</span>
						<br />
						<span>Price: ${item.price}</span>
						<br />
						<br />
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.item.allItems,
	};
};

export default connect(mapStateToProps, { getAllItems })(DisplayAllItems);
