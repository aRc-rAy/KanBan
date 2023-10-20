import React from "react";
import StatusBox from "./StatusBox";
const Status = ({ data, order }) => {
	return (
		<div className="boardBody">
			<StatusBox status="Todo" data={data} order={order} />
			<StatusBox status="Backlog" data={data} order={order} />
			<StatusBox status="In progress" data={data} order={order} />
			<StatusBox status="Done" data={data} order={order} />
			<StatusBox status="Canceled" data={data} order={order} />
		</div>
	);
};

export default Status;
