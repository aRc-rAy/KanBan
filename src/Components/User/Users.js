import React from "react";
import UserBox from "./UserBox";

const Users = ({ data, order }) => {
	const people = [...new Set(data.map((item) => item.userId))];
   
	return (
		<div className="boardBody">
			{people.map((id) => {
				return <UserBox id={id} data={data} key={id} order={order} />;
			})}
		</div>
	);
};

export default Users;
