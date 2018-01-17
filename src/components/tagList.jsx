import React from "react";

function TagList(props) {
	console.log(props.tags);
	return (
		props.tags.length ?
		<div className="tag-list">
			Choose tracks of your favorite genre
			<ul>
				{
					props.tags.map(tag => {
						return <li>{tag}</li>
					})
				}
			</ul>
		</div> :
		null
	)
}

export default TagList;