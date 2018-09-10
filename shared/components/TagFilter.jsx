import React from "react";
import { connect } from "react-redux";

import { deleteTag, deleteAllTags } from "../state/actions";

function TagFilter(props) {
    return props.tags.length ? (
        <div className="tag-panel">
            Choose tracks of your favorite genre:
            <ul className="tags">
                {props.tags.map((tag, index) => {
                    return (
                        <li onClick={() => props.onRemoveTag(tag)} key={index}>
                            {tag}
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={() => props.onClearAllTags()}
                className="clear-tags"
            >
                Clear all
            </button>
        </div>
    ) : null;
}

function mapStateToProps(state) {
    return {
        tags: state.tags,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveTag: tag => dispatch(deleteTag(tag)),
        onClearAllTags: () => dispatch(deleteAllTags()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagFilter);
