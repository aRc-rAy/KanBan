import React from "react";

const UserCard = ({ task }) => {
	let item = task;
	return (
		<div className="card">
			<div className="cardTop">
				<div>{item.id}</div>
			</div>
			<div className="cardTitle">
				<div className="userTitle">
					<div className="tick">
						<div className="circle"></div>
					</div>
					<div>{item.title}</div>
				</div>
			</div>
			<div className="cardBottom">
				<h3>...</h3>
				<p>{item.tag.length && item.tag[0]}</p>
			</div>
		</div>
	);
};

export default UserCard;
