import React from "react";
import Avatar from "../Avatar/Avatar";
import UserCard from "./UserCard";

const UserBox = ({ id, data, order }) => {
	let arr = data
		.filter((val) => {
			return val.userId === id;
		})
		.sort((a, b) => {
			if (order === "Priority") {
				return b.priority - a.priority;
			} else {
				return a.title.localeCompare(b.title);
			}
		});
	let name = arr[0].name;
	let available = arr[0].available;
	return (
		<div className="groupBox">
			<div className="groupTitle">
				<div className="titleLeft">
					<div className="titleItem">
						<div className="logo">
							<Avatar
								backgroundColor="#009dff"
								borderRadius="25%"
								color="white"
							>
								{name.charAt(0).toUpperCase()}
							</Avatar>
							<div className="status">
								{available ? (
									<div className="online"></div>
								) : (
									<div className="offline"></div>
								)}
							</div>
						</div>
					</div>
					<div className="titleItem">
						<h4>{name}</h4>
					</div>
					<div className="titleItem">
						<h4>{arr.length}</h4>
					</div>
				</div>
				<div className="titleRight">
					<div className="titleItem">
						<h3>+</h3>
					</div>
					<div className="titleItem">
						<h3>...</h3>
					</div>
				</div>
			</div>
			<div>
				{arr.map((task) => {
					return <UserCard task={task} />;
				})}
			</div>
		</div>
	);
};

export default UserBox;
