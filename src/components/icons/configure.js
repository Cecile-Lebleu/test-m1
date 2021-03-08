import React from "react"
import styles from "./icons.module.scss"

const GettingStarted = () => (
   <div>
		<svg
			className={styles.icon}
			width="40"
			height="40"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			data-svg="settings"
		>
			<ellipse
				className={styles.stroked}
				cx="6.11" cy="3.55" rx="2.11" ry="2.15"
				></ellipse>
			<ellipse
				className={styles.stroked}
				cx="6.11" cy="15.55" rx="2.11" ry="2.15"
				></ellipse>
			<circle
				className={styles.stroked}
				cx="13.15" cy="9.55" r="2.15"
				></circle>
			<rect
				className={styles.filled}
				x="1" y="3" width="3" height="1"
			></rect>
			<rect
				className={styles.filled}
				x="10" y="3" width="8" height="1"
			></rect>
			<rect
				className={styles.filled}
				x="1" y="9" width="8" height="1"
			></rect>
			<rect
				className={styles.filled}
				x="15" y="9" width="3" height="1"
			></rect>
			<rect
				className={styles.filled}
				x="1" y="15" width="3" height="1"
			></rect>
			<rect
				className={styles.filled}
				x="10" y="15" width="8" height="1"
			></rect>
		</svg>
   </div>
)

export default GettingStarted