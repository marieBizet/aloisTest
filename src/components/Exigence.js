import React from "react";
import PropTypes from "prop-types";

const Exigence = ({ onClick, text, severite }) => (
  <li class="list-group-item  d-flex justify-content-between align-items-center">
    {text} / {severite}
    <button class="btn btn-info btn-sm badge float-right" onClick={onClick}>
      X
    </button>
  </li>
);
Exigence.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Exigence;
