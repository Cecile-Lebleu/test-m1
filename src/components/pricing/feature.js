import React from "react"
import { Link } from "gatsby"
import styles from "./feature.module.scss"

const Feature = (props) => (
	<div className={styles.feature}>
		<div className={styles.content}>
			
				<h6>{props.title}</h6>
				<span>{props.description}
				{props.link ?
					<Link to={props.link}>🛈</Link> :
					""
				}
				</span>
			
		</div>
		<div className={styles.check}>
			{props.free ? "✅" : "—"}
		</div>
		<div className={styles.check}>
			{props.premium ? "✅" : "—"}
		</div>
	</div>
)

export default Feature