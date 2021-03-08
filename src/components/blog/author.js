import React from "react"
import styles from "./author.module.scss"

const Author = (props) => {
	let authorURL = props.author
		.toLowerCase()
		.replace(/\s/g, '')
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
	const authorImg = require(`../../images/${authorURL}.jpg`)
	
	return (
		<div className={styles.cta}>
			<img
				className={styles.author}
				src={authorImg}
				alt={props.author}
			/>
			<div className={styles.title}>
				<span>Author</span>
				<h3>{props.author}</h3>
			</div>
			<div className={styles.content}>
				<p>{props.authorBio}</p>
				{

				}
				<a href={props.authorWebsite}  target="_blank" rel="noopener noreferrer" >Visit {props.author}'s website</a>
			</div>
		</div>
	)
}

export default Author