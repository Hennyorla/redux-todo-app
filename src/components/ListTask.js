import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') return true;
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Done</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Not Done</button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
