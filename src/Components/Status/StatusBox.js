import React from "react";
import Card from "../Card/Card";

const StatusBox = ({ status, data, order }) => {
	let arr = data
		.filter((item) => item.status === status)
		.sort((a, b) => {
			if (order === "Priority") {
				return b.priority - a.priority;
			} else {
				return a.title.localeCompare(b.title);
			}
		});
	return (
		<div className="groupBox">
			<div className="groupTitle">
				<div className="titleLeft">
					<div className="titleItem">
						<h4>{">"}</h4>
					</div>
					<div className="titleItem">
						<h3>{status}</h3>
					</div>
					<div className="titleItem">
						<h4>{arr.length} </h4>
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
				{arr.map((item) => {
					return <Card item={item} key={item.title} />;
				})}
			</div>
		</div>
	);
	// return ;
};

export default StatusBox;
