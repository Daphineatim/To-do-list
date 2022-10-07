/**
 * @jest-environment jsdom
 */

import Task from './Task.js';
import { displayContent, removeTask } from './utilityFunctions.js';

const Tasks = new Task();

describe('Test add and displayContent method, and local storage', () => {
  window.localStorage = Storage.prototype;

  test('Add task', () => {
    Tasks.add('Test');
    document.body.innerHTML = `
    <div id="taskList" class="h5 p-0 m-0"></div>
    `;
    displayContent();
    expect(Tasks.TaskObject).toHaveLength(1);
  });

  test('test for local storage', () => {
    JSON.parse(localStorage.getItem('TASKS_LIST'));
    expect(localStorage).toHaveLength(1);
  });
});

describe('Test removeTask method, and local storage', () => {
  window.localStorage = Storage.prototype;
  test('remove task', () => {
    Tasks.add('Test2');
    document.body.innerHTML = `
    <div id="taskList" class="h5 p-0 m-0">
        <div class="taskDynamic border-bottom  m-0 px-3 py-0 d-flex align-items-center justify-content-between" data-id=1>
            <div class="form-check mb-0 d-flex align-items-center justify-content-start">
                <input class="form-check-input border checkbox" type="checkbox" value="" id="flexCheckDefault" >
                <input type='text' class="description h5 m-0 p-3" value="some text"></input>
            </div>
            <button class="three-dots h5 btn m-0 icon">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <i class="trash fa-solid fa-trash-can hide"></i>
        </div>
    </div>
    `;
    const element = document.querySelector('.taskDynamic');
    removeTask(element);
    Tasks.remove(1);
    expect(Tasks.TaskObject).toHaveLength(1);
  });
  test('test for local storage', () => {
    JSON.parse(localStorage.getItem('TASKS_LIST'));
    expect(localStorage).toHaveLength(1);
  });
});
