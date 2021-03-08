import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./help-list.module.scss"

export default () => (
	<div className={styles.helpList}>
		<h2>Getting Started</h2>
		<StaticQuery
			query={graphql`
				query {
					allMdx(filter: {
						frontmatter: {
							type: {
								eq: "Help"
							},
							categories: {
								eq: "Getting Started"
							}
						}
					}, sort: {
						fields: frontmatter___order,
						order: ASC
					}) {

						edges {
							node {
								id
								frontmatter {
									title
								}
								fields {
									slug
								}
							}
						}
					}
				}
			`}
			render={data => (
				<ul>
					{data.allMdx.edges.map(({ node }) => (
						<Link to={node.fields.slug} >
							<div key={node.fields.id}>
								<li>{node.frontmatter.title}</li>
							</div>
						</Link>
					))}
				</ul>
			)}
		/>
	</div>
)