import React from "react"
import styles from "./icons.module.scss"
import IconData from "./icondata"

// console.log(IconData);
export const Icon = (props) => {
	let state = {...IconData};
	// console.log(state)
	let requestedIcon = state[props.icon]
	return (
		<svg
			style={{
				display: "inline",
				transform: "scale(1, -1)",
				verticalAlign: "-15%"
			}}
			width={props.size} height={props.size}
			viewBox={`0 -150 ${requestedIcon.width} 1000`}
			xmlns="http://www.w3.org/2000/svg"
			data-svg={requestedIcon}
		>
			<path className={styles.filled} d={requestedIcon.d} />
		</svg>
	)
}