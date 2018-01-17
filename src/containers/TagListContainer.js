import { connect } from "react-redux";
import TagList from "../components/tagList.jsx";

function mapStateToProps(state) {
	return {
		tags: state.tags
	}
}

const TagListContainer = connect(mapStateToProps)(TagList);

export default TagListContainer;