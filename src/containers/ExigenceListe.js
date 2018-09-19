import { connect } from "react-redux";
import ExigenceListe from "../components/ExigenceListe";

const getExigences = exigences => {
  return exigences;
};

const mapStateToProps = state => ({
  exigences: getExigences(state.exigences)
});

export default connect(mapStateToProps)(ExigenceListe);
