import './style.css';
import {
  Task,
  addTask,
  removeTask,
  checkLocalStorage,
  editTask,
} from './module/utilityFunctions.js';
import * as Elements from './module/constElements.js';

/* eslint-disable */
/* eslint-enable */

Elements.submitInput.addEventListener('click', addTask);

Elements.taskInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});

Elements.refreshTask.addEventListener('click', (e) => {
  e.preventDefault();
  Task.TaskObject = [];
  localStorage.setItem('TASKS_LIST', JSON.stringify(Task.TaskObject));
  checkLocalStorage();
});

Elements.taskList.addEventListener('click', (e) => {
  e.stopPropagation();

  [...Elements.taskList.children].forEach((item, index) => {
    if (item.classList.contains('bg-yellow')) {
      item.children[1].classList.remove('hide');
      item.children[2].classList.add('hide');
      item.classList.remove('bg-yellow');
    }
    if (index === parseInt(e.target.getAttribute('data-id'), 10)) {
      item.children[1].classList.add('hide');
      item.children[2].classList.remove('hide');
      item.classList.add('bg-yellow');
      item.children[2].addEventListener('click', (e) => {
        e.preventDefault();
        if (item.children[2].children[0] === e.target) {
          removeTask(e.target.parentElement.parentElement);
        } else {
          removeTask(e.target.parentElement);
        }
      });
    }

    const descriptionItem = item.children[0].children[1].children[0];
    const targetItem = e.target.parentElement.parentElement.parentElement;

    if (
      !targetItem.classList.contains('bg-yellow')
      && descriptionItem === e.target
    ) {
      item.children[1].classList.add('hide');
      item.children[2].classList.remove('hide');
      item.classList.add('bg-yellow');
    }
  });

  editTask(e.target);
});

document.addEventListener('click', (e) => {
  [...Elements.taskList.children].forEach((item) => {
    const isClickInsideTaskList = Elements.taskList.contains(e.target);
    if (!isClickInsideTaskList) {
      item.children[1].classList.remove('hide');
      item.children[2].classList.add('hide');
      item.classList.remove('bg-yellow');
    }
  });
});

document.addEventListener('DOMContentLoaded', checkLocalStorage);