import React from "react"
import algoliasearch from 'algoliasearch/lite';
import {
	InstantSearch,
	connectSearchBox,
} from 'react-instantsearch-dom';

import styles from "./intro-search.module.scss"
import SearchBox from "./search/search-box"
import Results from "./search/results"

const searchClient = algoliasearch('CADNYF2CAF', '0fad243e0458801749e75d4d0cae20bb');

const CustomSearchBox = connectSearchBox(SearchBox);

const Card = () => (
   <div className={styles.intro}>
		<div className={styles.intro}>
			<h1>How can we help you?</h1>
			<InstantSearch searchClient={searchClient} indexName="Diarly">
				<CustomSearchBox />
				<Results />
			</InstantSearch>
		</div>
   </div>
)

export default Card