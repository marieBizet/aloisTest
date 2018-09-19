import React from "react";
import { connect } from "react-redux";
import { addExigence } from "../actions";

let AddExigence = ({ dispatch, severites }) => {
  let input;
  let select;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          if (!select.value.trim()) {
            return;
          }
          dispatch(addExigence(input.value, select.value));
          input.value = "";
          select.value = "";
        }}
      >
        <div class="form-row">
          <div class="col-6">
            <input
              class="form-control"
              placeholder="Exigence"
              ref={node => {
                input = node;
              }}
            />
          </div>
          <div class="col-4">
            <select
              class="form-control"
              ref={option => {
                select = option;
              }}
            >
              <option value="" />
              <option value="must">must</option>
              <option value="should">should</option>
              <option value="could">could</option>
              <option value="nice">nice</option>
              <option value="won't">won't</option>
            </select>
          </div>
          <div class="col-2">
            <button class="btn btn-info float-right" type="submit">
              + Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddExigence);
