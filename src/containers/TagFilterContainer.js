import { connect } from "react-redux";
import { deleteTag, deleteAllTags } from "actions/tags";
import TagFilter from "../components/tagFilter.jsx";

function mapStateToProps(state) {
	return {
		tags: state.tags
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onRemoveTag: tag => dispatch(deleteTag(tag)),
		onClearAllTags: () => dispatch(deleteAllTags())
	}
}

const TagListContainer = connect(mapStateToProps, mapDispatchToProps)(TagFilter);

export default TagListContainer;