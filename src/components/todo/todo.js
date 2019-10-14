import React from "react";
import useForm from '../../hooks/form.js';
import {connect } from 'react-redux';
import * as actions from '../../state/store/actions.js'

const TodoForm = props => {

  const { handleChange, handleSubmit } = useForm( props.handleSubmit );

  return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
          </label>
          <label>
            <span>Due</span>
            <input type="date" name="due" onChange={handleChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);