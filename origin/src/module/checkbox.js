import Task from './Task.js';
import { displayContent, reorderTaskObjectId } from './utilityFunctions.js';

const completed = (item) => {
  const completedId = parseInt(item.getAttribute('data-id'), 10);
  let isChecked = item.children[0].children[0].checked;
  Task.TaskObject[completedId].completed = isChecked;
  isChecked = Task.TaskObject[completedId].completed;
};

const clearCompletedTasks = (target) => {
  if (target) {
    const notCompletedTasks = Task.TaskObject.filter(
      (item) => item.completed === false,
    );
    Task.TaskObject = notCompletedTasks;
    reorderTaskObjectId(Task.TaskObject);
    localStorage.setItem('TASKS_LIST', JSON.stringify(Task.TaskObject));
    displayContent();
  }
};

export { completed, clearCompletedTasks };