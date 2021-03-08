import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/index/intro"
import TwoColumns from "../components/index/two-col"
import Badges from "../components/index/badges"
import Personal from "../components/index/personal"
import Reviews from "../components/index/reviews"
import Features from "../components/index/features"


export default ({ data }) => {
	const imageStyle = { filter: "var(--shadow)" }
	return (
		<Layout>
			<SEO title = "Your Digital Journal" />

			<Intro>
				<Img
					alt = "Diarly App Screens in Multiple Themes"
					fluid = {data.intro.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
			</Intro>

			<TwoColumns>
				<Img
					alt = "Diarly on Mac and iOS"
					fluid = {data.safePortable.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
				<div>
					<h2>Write anywhere</h2>
					<p>Bring your journals wherever you go with Diarly apps for iPhone, iPad and Mac and a secure cross-device sync via iCloud.</p>
				</div>
			</TwoColumns>

			<Badges />

			<TwoColumns>
				<div>
					<h2>Be secure</h2>
					<p>Record your moments, memories and reflections and secure them behind powerful encryption and password protection.</p>
				</div>
				<Img
					alt = "Diarly password and encryption settings"
					fluid = {data.secure.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
			</TwoColumns>

			<TwoColumns>
				<Img
					alt = "Minimalist Diarly editor screen"
					fluid = {data.simple.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
				<div>
					<h2>Embrace simplicity</h2>
					<p>Enjoy a streamlined and distraction-free writing experience with a simple user interface using in-built Markdown editor.</p>
				</div>
			</TwoColumns>

			<TwoColumns>
				<div>
					<h2>Build routine</h2>
					<p>Create good writing habits with custom milestones and word count targets. Use writing statistics to see how you perform over time.</p>
				</div>
				<Img
					alt = "Diarly goals and word count statistics"
					fluid = {data.buildRoutine.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
			</TwoColumns>

			<Personal>
				<Img
					alt = "Diarly in various themes"
					fluid = {data.expressYourself.edges[0].node.childImageSharp.fluid}
				/>
			</Personal>
			
			<TwoColumns>
				<Img
					alt = "Diarly timeline view"
					fluid = {data.fast.edges[0].node.childImageSharp.fluid}
					style = {imageStyle}
				/>
				<div>
					<h2>Save time</h2>
					<p>Star your favorite posts and create unique hashtags to group similar themes. Find entries fast using the in-built calendar view, map view, and lists.</p>
				</div>
			</TwoColumns>

			<Reviews />

			<Features />

		</Layout>
	)
}


export const query = graphql`
	query {
		intro: allFile(filter: { relativePath: { eq: "images/intro.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		safePortable: allFile(filter: { relativePath: { eq: "images/safe_portable.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		secure: allFile(filter: { relativePath: { eq: "images/secure.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		simple: allFile(filter: { relativePath: { eq: "images/simple.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		buildRoutine: allFile(filter: { relativePath: { eq: "images/build_routine.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		expressYourself: allFile(filter: { relativePath: { eq: "images/express-yourself.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 2000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		fast: allFile(filter: { relativePath: { eq: "images/fast.png" } }) {
			edges {
				node {
					id
					relativePath
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`