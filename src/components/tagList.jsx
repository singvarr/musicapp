import React from "react";

function TagList(props) {
	return (
		props.tags.length ?
		<div className="tag-panel">
			Choose tracks of your favorite genre
			<ul className="tags">
				{
					props.tags.map((tag, index) => {
						return <li 
						onClick={() => props.onRemoveTag(tag)}
						key={index}>{tag}</li>
					})
				}
			</ul>
			<button 
				onClick={() => props.onClearAllTags()}
				className="clear-tags">Clear all</button>
		</div> :
		null
	)
}

export default TagList;