import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../seo"
import Layout from "../layout"
import ContentLayout from "../content-layout"
import styles from "./blog-post.module.scss"

export default ({ data }) => {
   const post = data.mdx
   return (
      <Layout>
			<ContentLayout>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description}
				/>
				<div className={styles.postContent}>
					<h1>{post.frontmatter.title}</h1>
					<MDXRenderer>{post.body}</MDXRenderer>
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
            description
         }
      }
   }
`