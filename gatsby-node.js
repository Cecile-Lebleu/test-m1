const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
		const slug = createFilePath({
			node,
			getNode,
			basePath: `pages`
		})
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	

	// BLOG
	
	const blog = await graphql(`
	query {
		allMdx(filter: {
			frontmatter: {
				type: {
					eq: "Blog"
				}
			}
		}) {
			edges {
				node {
					fields {
						slug
					}
				}
			}
		}
	}
	`)
	blog.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/components/templates/blog-post.js`),
			context: {
				slug: node.fields.slug,
			},
		})
	})
	

	// HELP
	
	const help = await graphql(`
	query {
		allMdx(filter: {
			frontmatter: {
				type: {
					eq: "Help"
				}
			}
		}, sort: {
			fields: frontmatter___order
		}) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
				previous {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
				next {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
	`)
	
	const helpArticles = help.data.allMdx.edges
	help.data.allMdx.edges.forEach(({ node }, index) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/components/templates/help-post.js`),
			context: {
				slug: node.fields.slug,
				prev: index === 0 ? null : helpArticles[index - 1].node,
				next: index === helpArticles.length - 1 ? null : helpArticles[index + 1].node
			},
		})
	})
	

	// LANDING PAGES
	
	const landing = await graphql(`
	query {
		allMdx(filter: {
			frontmatter: {
				type: {
					eq: "LandingPage"
				}
			}
		}) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
	`)
	
	landing.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/components/templates/help-post.js`),
			context: {
				slug: node.fields.slug,
			},
		})
	})
	
}