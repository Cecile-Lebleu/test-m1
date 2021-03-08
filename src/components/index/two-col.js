import React from "react"
import Styles from "./two-col.module.scss"

const TwoColumns = ({ children }) => (
   <div className={Styles.container}>
		{ children }
   </div>
)

export default TwoColumns