import React from 'react';
import { connect } from 'react-redux';
import tasksActions from "../redux/tasks/tasksActions";

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        className="TaskEditor-input"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
let mapStateToProps = (state) => (
  {
    value: state.tasks.filter
  }
);
let mapDispatchToProps = {
  onChangeFilter: tasksActions.changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
