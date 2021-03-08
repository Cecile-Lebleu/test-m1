import React from "react"
import AppStore from "../../images/Download_App_Store.svg"

export default () => {
	let handleClick = (e) => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			"event": "buttonClick",
			"category": "Custom Button",
			"action": "Click on AppStore Badge",
		})
	}
	return (
		<a
			href="https://apps.apple.com/app/id1387167765" 
			rel="noopener"
			onClick={(e) => handleClick(e)}
		>
			<img
				src={AppStore}
				alt="Download on the App Store"
			/>
		</a>
	)
}