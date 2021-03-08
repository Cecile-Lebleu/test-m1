import React from "react"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"

import SEO from "../seo"
import Layout from "../layout"
import ContentLayout from "../content-layout"
import Author from "../blog/author"
import styles from "./blog-post.module.scss"
import CTA from "../cta"

export default ({ data }) => {
	const post = data.mdx
	const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
	const featuredImgSEO = post.frontmatter.featuredImage
	return (
		<Layout>
			<ContentLayout>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description}
					thumbnail={featuredImgSEO}
				/>
				<div className={styles.postContent}>
					<Link className={styles.back} to="/blog/">&lt; Back to blog</Link>
					<h1>{post.frontmatter.title}</h1>
					<Img fluid={featuredImgFluid}
						style={{
							margin: "4rem -4rem",
							borderRadius: "0.5rem"
						}}
					/>
					<MDXRenderer>{post.body}</MDXRenderer>
					{
						post.frontmatter.authorBio ?
						<Author 
							author = {post.frontmatter.author}
							authorBio = {post.frontmatter.authorBio}
							authorWebsite = {post.frontmatter.authorWebsite}
						/> :
						""
					}
					<CTA
						text="Ready to get started? Get started with Diarly for free!"
						url="/"
						button="Get Diarly"
					/>
				</div>
			</ContentLayout>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				title
				author
				authorBio
				authorWebsite
				description
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid_tracedSVG
						}
						sizes(maxWidth: 800) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
	}
`
