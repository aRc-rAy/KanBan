import React from "react";
import Avatar from "../Avatar/Avatar";

const Card = ({ item }) => {
	return (
		<div className="card">
			<div className="cardTop">
				<div>{item.id}</div>

				<div className="logo">
					<Avatar
						backgroundColor="#009dff"
						borderRadius="25%"
						color="white"
					>
						{item.name.charAt(0).toUpperCase()}
					</Avatar>
					<div className="status">
						{item.available ? (
							<div className="online"></div>
						) : (
							<div className="offline"></div>
						)}
					</div>
				</div>
			</div>
			<div className="cardTitle">
				<div>{item.title}</div>
			</div>
			<div className="cardBottom">
				<h3>...</h3>
				<p>{item.tag.length && item.tag[0]}</p>
			</div>
		</div>
	);
};

export default Card;
