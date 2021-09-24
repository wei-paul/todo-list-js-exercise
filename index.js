function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
}

function completeTask(task) {
  task.complete = true;
}

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      this.complete = true
    }
  };
  return task;
};

const task1 = newTask("Clean cat litter", "Take all the poop out of the poop box")
const task2 = newTask("Do laundry", "omg");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();


