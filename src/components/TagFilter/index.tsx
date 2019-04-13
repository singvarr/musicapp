import React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { deleteTag, deleteAllTags } from "actions/tags";
import State from "types/state";

type TagFilterProps = {
    tags: string[];
    onClearAllTags: () => void;
    onRemoveTag: (tag: string) => void;
};

function TagFilter(props: TagFilterProps) {
    return props.tags.length ? (
        <div className="tag-panel">
            Choose tracks of your favorite genre:
            <ul className="tags">
                {props.tags.map(tag => {
                    return (
                        <li onClick={() => props.onRemoveTag(tag)} key={tag}>
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

function mapStateToProps(state: State) {
    return {
        tags: state.tags
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>, State>) {
    return {
        onRemoveTag: (tag: string) => dispatch(deleteTag(tag)),
        onClearAllTags: () => dispatch(deleteAllTags())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagFilter);
