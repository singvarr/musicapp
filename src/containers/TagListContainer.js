import { connect } from "react-redux";
import { deleteTag, deleteAllTags } from "../actions";
import TagList from "../components/tagList.jsx";

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

const TagListContainer = connect(mapStateToProps, mapDispatchToProps)(TagList);

export default TagListContainer;