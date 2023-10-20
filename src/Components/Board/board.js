import React, { useState, useEffect } from "react";
import axios from "axios";
import Status from "../Status/Status";
import Users from "../User/Users";
import Priority from "../Priority/Priority";

const Board = () => {
	let initialDisplay = 0;
	const [display, setdisplay] = useState(initialDisplay);
	const [state, setstate] = useState("Status");
	const [order, setOrder] = useState("Title");
	const [tickets, setTickets] = useState([]);
	const [data, setData] = useState([]);
	const [users, setUsers] = useState([]);
	const [isDataFetched, setIsDataFetched] = useState(false);

	const MergeData = () => {
		let merged = [];
		for (let i = 0; i < tickets.length; i++) {
			merged.push({
				...users.find((item) => item.id === tickets[i].userId),
				...tickets[i],
			});
		}
		setData(merged);
	};
	const fetchData = async () => {
		const { data } = await axios.get(
			"https://api.quicksell.co/v1/internal/frontend-assignment"
		);

		setTickets(data.tickets);
		setUsers(data.users);
		MergeData();
		setIsDataFetched(true);
	};

	useEffect(() => {
		fetchData();
	}, [isDataFetched]);

	const handleStateChange = (e) => {
		setstate(e.target.value);
	};
	const handleOrderChange = (e) => {
		setOrder(e.target.value);
	};

	const handleDisplay = () => {
		setdisplay((display) => 1 - display);
	};

	return (
		<div>
			<div className="navBar">
				<button onClick={handleDisplay} className="displayButton">
					<div>
						<p> Display {">"} </p>
					</div>
				</button>
				{display ? (
					<div className="displaybox" display="none">
						<div className="displayItem group">
							<label htmlFor="group">Grouping:</label>
							<select
								id="group"
								name="group"
								onChange={handleStateChange}
								value={state}
							>
								<option value="Status">Status</option>
								<option value="User">User</option>
								<option value="Priority">Priority</option>
							</select>
						</div>
						<div className="displayItem priority">
							<label htmlFor="order">Ordering:</label>
							<select
								id="order"
								name="order"
								onChange={handleOrderChange}
								value={order}
							>
								<option value="Priority">Priority</option>
								<option value="Title">Title</option>
							</select>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			{tickets.length ? (
				<div className="body">
					{state === "Status" ? (
						<Status data={data} order={order} />
					) : state === "Priority" ? (
						<Priority data={data} order={order} />
					) : (
						<Users data={data} order={order} />
					)}
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};

export default Board;
