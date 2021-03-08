import React from "react"
import styles from "./content-layout.module.scss"

const ContentLayout = ({ children }) => {
   return (
		<div className={styles.content}>
			<main>{children}</main>
		</div>
   )
}

export default ContentLayout
