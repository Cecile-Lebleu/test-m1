import React from "react"
import { Link } from "gatsby"
import styles from "./search-hit.module.scss"

const SearchHit = ({ hit }) => {
	return (
		<div className={styles.container}>
			<h5>
				<Link to={hit.fields.slug}>{hit.frontmatter.title}</Link>
			</h5>
			<p>{hit.excerpt}</p>
		</div>
	)
}

export default SearchHit