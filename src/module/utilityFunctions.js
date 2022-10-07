import Task from './Task.js';
import { taskInput, taskList } from './constElements.js';

const Tasks = new Task();

const displayContent = () => {
  Tasks.TaskObject.forEach((obj) => {
    taskList.innerHTML += `
      <div class="taskDynamic border-bottom  m-0 px-3 py-0 d-flex align-items-center justify-content-between" data-id=${obj.id}>
              <div class="form-check mb-0 d-flex align-items-center justify-content-start">
                <input class="form-check-input border checkbox" type="checkbox" value="" id="flexCheckDefault" >
                <input type='text' class="description h5 m-0 p-3" value="${obj.description}"></input>
              </div>
              <button class="three-dots h5 btn m-0 icon">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <i class="trash fa-solid fa-trash-can hide"></i>              
            </div>
      `;
  });
};

const checkLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('TASKS_LIST')) != null) {
    Tasks.TaskObject = JSON.parse(localStorage.getItem('TASKS_LIST'));
  }
};

const addTask = () => {
  Tasks.add(taskInput);
  displayContent();
  document.location.reload();
};

const reorderTaskObjectId = (obj) => {
  obj.forEach((item, index) => {
    item.id = index;
  });
};

const removeTask = (element) => {
  const i = parseInt(element.getAttribute('data-id'), 10);
  if (element.classList.contains('taskDynamic')) {
    element.remove();
    Tasks.remove(i);
    reorderTaskObjectId(Tasks.TaskObject);
    localStorage.setItem('TASKS_LIST', JSON.stringify(Tasks.TaskObject));
  }
};

export {
  Tasks,
  displayContent,
  addTask,
  reorderTaskObjectId,
  removeTask,
  checkLocalStorage,
};