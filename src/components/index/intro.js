import React from "react"

import Styles from "./intro.module.scss"
import ButtonMac from "../buttons/button-mac"
import ButtoniOS from "../buttons/button-ios"

const Intro = ({ children }) => {
	return (
		<div className={Styles.intro}>
			<div className={Styles.left}>
				<h1>Diarly</h1>
				<div className={Styles.content}>
					<p>Secure, simple & beautiful diary app.<br />Get started for free.</p>
				</div>
				<div className={Styles.badges}>
					<ButtonMac />
					<ButtoniOS />
				</div>
			</div>
			<div className={Styles.right}>
				<div className={Styles.graphic}>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Intro