import React from "react"
import MacAppStore from "../../images/Download_Mac_App_Store.svg"

export default () => {
	let handleClick = (e) => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			"event": "buttonClick",
			"category": "Custom Button",
			"action": "Click on MacAppStore Badge",
		})
	}
	return (
		<a
			href="https://apps.apple.com/app/id1387167765"
			rel="noopener"
			onClick={(e) => handleClick(e)}
		>
			<img
				src={MacAppStore}
				alt="Download on the Mac App Store"
			/>
		</a>
	)
}