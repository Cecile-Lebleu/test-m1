import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/help/intro-search"
import Browse from "../components/help/browse"

const Help = () => {
	return (
		<Layout>
			<SEO title="Your Digital Journal" />
			<Intro />
			<Browse />
		</Layout>
	)
}

export default Help