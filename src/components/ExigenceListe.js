import React from "react";
import PropTypes from "prop-types";
import Exigence from "./Exigence";

const ExigenceListe = ({ exigences, removeExigence }) => (
  <div>
    <ul class="list-group">
      {exigences.map(exigence => (
        <Exigence
          key={exigence.id}
          {...exigence}
          onClick={() => removeExigence(exigence.id)}
        />
      ))}
    </ul>
  </div>
);

ExigenceListe.propTypes = {
  exigences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeExigence: PropTypes.func.isRequired
};
export default ExigenceListe;
