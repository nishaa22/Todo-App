import React from "react";
import PropTypes from "prop-types";

const Badge = ({ isCompleted = false }) => {
  return (
    <>
      {isCompleted ? (
        <div id="badge" className="float-end">
          <span className="badge bg-secondary mx-2">Completed</span>
        </div>
      ):""}
    </>
  );
};
Badge.propTypes = {
  isCompleted: PropTypes.bool,
};
Badge.defaultProp = {
  isCompleted: false,
};
export default Badge;
