import React from "react"

const SearchBox = ({ currentRefinement, refine }) => (
	<form noValidate action="" role="search">
		<input
			type="search"
			value={currentRefinement}
			placeholder="Search..."
			onChange={event => refine(event.currentTarget.value)}
			aria-label="search"
		/>
	</form>
);

export default SearchBox