import React from "react"
import styles from "./icons.module.scss"

const Card = () => (
   <div>
		<svg
			className={styles.icon}
			width="40"
			height="40"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			data-svg="credit-card"
		>
			<rect
				className={styles.stroked}
				x="1.5"
				y="4.5"
				width="17"
				height="12"
			></rect>
			<rect
				className={styles.filled}
				x="1"
				y="7"
				width="18"
				height="3"
			></rect>
		</svg>

   </div>
)

export default Card