import React from "react";
import Card from "../Card/Card";

const PriorityBox = ({ priorityId, data, title }) => {
	let arr = data.filter((item) => item.priority === priorityId);

	return (
		<div className="groupBox">
			<div className="groupTitle">
				<div className="titleLeft">
					<div className="titleItem">
						<h4>{">"}</h4>
					</div>
					<div className="titleItem">
						<h3>{title}</h3>
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
};

export default PriorityBox;
