import React from "react";
import { connect } from "react-redux";
import { exportExigence } from "../actions";

const getExigences = exigences => {
  return exigences;
};

const mapStateToProps = state => ({
  exigences: getExigences(state.exigences),
  canExport: state.exigences.length > 0
});

const mapDispatchToProps = {
  onBtExportClick: exportExigence
};

let ExportExigence = ({ dispatch, canExport, onBtExportClick }) => {
  return (
    <div>
      <button
        class="btn btn-info float-right hidden"
        type="button"
        disabled={!canExport}
        onClick={onBtExportClick}
      >
        Exporter la liste
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportExigence);
