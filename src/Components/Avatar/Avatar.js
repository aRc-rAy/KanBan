import React from "react";

const Avatar = ({ children, backgroundColor, color }) => {
	const style = {
		backgroundColor,
		color: color || "red",
		borderRadius: "50%",
		textAlign: "center",
		cursor: null,
		textDecoration: "none",
		width: "100%",
		height: "100%",
		textAlign: "center",
	};

	return <div style={style}>{children}</div>;
};

export default Avatar;
