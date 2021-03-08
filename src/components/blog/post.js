import React from "react"
import styles from "./post.module.scss"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = (props) => {
	let author = <span className={styles.meta}>{props.date}</span>
	if ( props.author ) {
		if ( props.tags.includes("Guest") ) {
			author = <span className={styles.meta}>Guest post by {props.author} — {props.date}</span>
		} else {
			author = <span className={styles.meta}>By {props.author} — {props.date}</span>
		}
	}
	if (props.tags.includes("Guest")) {
		return (
			<Link to={props.slug} className={styles.guestPost}>
				<Img fluid={props.image}/>
				<div className={styles.container} key={props.id}>
					<h2 className={styles.featured}>{props.title}</h2>
					{author}
					<p className={styles.excerpt}>{props.excerpt}</p>
				</div>
			</Link>
		)
	}
	return (
		<Link to={props.slug} className={styles.post}>
			<Img fluid={props.image}/>
			<div className={styles.container} key={props.id}>
				<h2>{props.title}</h2>
				{author}
				<p className={styles.excerpt}>{props.excerpt}</p>
			</div>
		</Link>
	)
}

export default Post