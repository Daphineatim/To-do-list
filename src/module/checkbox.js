import { Tasks, reorderTaskObjectId } from './utilityFunctions.js';

const completed = (index, checkStatus) => {
  Tasks.TaskObject[index].completed = checkStatus;
  localStorage.setItem('TASKS_LIST', JSON.stringify(Tasks.TaskObject));
};

const clearCompletedTasks = (target) => {
  if (target) {
    const notCompletedTasks = Tasks.TaskObject.filter(
      (item) => item.completed === false,
    );
    Tasks.TaskObject = notCompletedTasks;
    reorderTaskObjectId(Tasks.TaskObject);
    localStorage.setItem('TASKS_LIST', JSON.stringify(Tasks.TaskObject));
  }
};

const editTask = (value, index) => {
  Tasks.TaskObject[index].description = value;
  localStorage.setItem('TASKS_LIST', JSON.stringify(Tasks.TaskObject));
};

export { completed, clearCompletedTasks, editTask };