import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styles from "./blog.module.scss"
import Post from "../components/blog/post"
import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"
import MagicGrid from "react-magic-grid"

export default ({ data }) => {
	return (
		<Layout>
			<SEO title="Diarly App Blog" />
			<ContentLayout>
				<div className={styles.blog}>
					<h1>Blog</h1>
						<MagicGrid
							items={data.allMdx.edges.length}
							center="false"
							gutter={0}
							>
							{data.allMdx.edges.map(({ node }) => (
								<div className={styles.blogPost}>
									<Post
										id = {node.id}
										key = {node.id}
										slug = {node.fields.slug}
										tags = {node.frontmatter.tags}
										date = {node.frontmatter.date}
										title = {node.frontmatter.title}
										author = {node.frontmatter.author}
										excerpt = {node.frontmatter.description}
										image = {node.frontmatter.featuredImage.childImageSharp.fluid}
										/>
								</div>
							))}
						</MagicGrid>
				</div>
			</ContentLayout>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMdx(filter: {
			frontmatter: {
				type: {
					eq: "Blog"
				}
			}
		}, sort: {
			fields: frontmatter___date,
			order: DESC
		}) {
			edges {
				node {
					id
					frontmatter {
						title
						author
						tags
						description
						date(formatString: "DD MMMM, YYYY")
						featuredImage {
							childImageSharp {
								fluid(
									maxWidth: 800
									traceSVG: {
										background: "#ffffff",
										color: "#f5f6f9"
									}
								) {
									...GatsbyImageSharpFluid_tracedSVG
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}

`
