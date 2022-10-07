class Task {
  constructor() {
    if (JSON.parse(localStorage.getItem('TASKS_LIST')) != null) {
      this.TaskObject = JSON.parse(localStorage.getItem('TASKS_LIST'));
    } else {
      this.TaskObject = [];
    }
  }

  add(task) {
    this.TaskObject.push({
      id: this.TaskObject.length,
      description: task.value,
      completed: false,
    });
    localStorage.setItem('TASKS_LIST', JSON.stringify(this.TaskObject));
  }

  remove(index) {
    this.TaskObject.splice(index, 1);
    localStorage.setItem('TASKS_LIST', JSON.stringify(this.TaskObject));
  }
}

export default Task;
