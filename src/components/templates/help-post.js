import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../seo"
import Layout from "../layout"
import ContentLayout from "../content-layout"
import styles from "./help-post.module.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data, pageContext }) => {
	const prev = pageContext.prev ?
		{
			url: pageContext.prev.fields.slug,
			title: pageContext.prev.frontmatter.title
		} :
		null

	const next = pageContext.next ?
		{
			url: pageContext.next.fields.slug,
			title: pageContext.next.frontmatter.title
		} :
		null

   const post = data.mdx
   return (
      <Layout>
			<ContentLayout>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description}
				/>
				<div className={styles.postContent}>
					<Link className={styles.back} to="/help">&lt; Back to help</Link>
					<h1>{post.frontmatter.title}</h1>
					<MDXRenderer>{post.body}</MDXRenderer>
				</div>
				<div className={styles.otherArticles}>
					<div className={styles.previous}>
						{prev && (
							<Link to={prev.url}>
								<span>Previous</span>
								<h5>{prev.title}</h5>
							</Link>
						)}
					</div>
					<div className={styles.next}>
						{next && (
							<Link to={next.url} className={styles.next}>
								<span>Next</span>
								<h5>{next.title}</h5>
							</Link>
						)}
					</div>
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
         }
      }
   }
`
