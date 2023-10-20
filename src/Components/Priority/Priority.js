import React from "react";
import PriorityBox from "./PriorityBox";

const Priority = ({ data, order }) => {
	return (
		<div className="boardBody">
			<PriorityBox priorityId={0} data={data} title="No Priority" />
			<PriorityBox priorityId={1} data={data} title="Low" />
			<PriorityBox priorityId={2} data={data} title="Medium" />
			<PriorityBox priorityId={3} data={data} title="High" />
			<PriorityBox priorityId={4} data={data} title="Urgent" />
		</div>
	);
};

export default Priority;
