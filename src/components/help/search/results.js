import React from "react"

import {
	connectStateResults,
	Hits
} from 'react-instantsearch-dom';
import SearchHit from "./search-hit"

import styles from "./results.module.scss"

const Results = connectStateResults(({ searchState }) =>
	searchState && searchState.query ? (
		<Hits
			hitComponent={SearchHit}
			className={styles.hits}
		/>
	) : (
		<></>
	)
)


export default Results