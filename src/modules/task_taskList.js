function Task(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completeStatus = false;
}

Task.prototype.markComplete = function() {
    this.completeStatus = true;
}

Task.prototype.isComplete = function() {
    return this.completeStatus;
}

function TaskList(title, index) {
    this.title = title;
    this.index = index;
    this.taskList = [];
}

TaskList.prototype.displayAll = function() {
    this.taskList.forEach(task => console.log(task));
    return 1;
}

TaskList.prototype.isComplete = function() {
    return this.taskList.every(task => task.isComplete);
}

const taskNTaskListManager = (function control() {
    let projects = [];
    let currentTaskList;
    
    (function() {
        currentTaskList = new TaskList('default', projects.length);
        projects.push(currentTaskList);
    })();

    function createTask() {
        let title = prompt('Enter the title of task') || 'task' + currentTaskList.taskList.length;
        let dueDate = prompt('Enter date in dd/mm/yy');
        let priority = prompt('Enter priority') || 0;
        currentTaskList.taskList.push(new Task(title, dueDate, priority));
    }

    function createTaskList() {
        let title = prompt('enter the title of the list') || 'taskList';
        currentTaskList = new TaskList(title, projects.length);
        projects.push(currentTaskList);
    }

    function displayCurrentTaskList() {
        console.log(currentTaskList.title);
        if(currentTaskList.taskList.length == 0) {
            return 0
        }
        currentTaskList.displayAll();
        return 1;
    }

    function displayAllProjects() {
        projects.forEach(taskList => console.log(taskList.title, taskList.index));
    }

    function markTaskComplete(index) {
        if(currentTaskList.taskList.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList.taskList[index].markComplete();
        return 1;
    }

    function switchCurrentTaskListTo(index) {
        if(projects.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList = projects[index];
        return 1;
    }

    function currentTaskListIsComplete() {
        if(currentTaskList.taskList.length == 0) {
            return 0;
        }
        return currentTaskList.isComplete();
    }

    return {
        createTask,
        createTaskList,
        displayCurrentTaskList,
        displayAllProjects,
        markTaskComplete,
        switchCurrentTaskListTo,
        currentTaskListIsComplete
    }
})();

export default function control(choice) {

    let index;
    switch(choice) {
        case "1":
            taskNTaskListManager.createTask();
            break;
        case "2":
            taskNTaskListManager.createTaskList();
            break;
        case "3":
            return taskNTaskListManager.displayCurrentTaskList() == 0 ? 'no task in the current task list' : 'All the task of the current task list displayed';
        case "4":
            taskNTaskListManager.displayAllProjects();
            break;
        case "5":
            index = prompt('Enter the index of task to mark complete');
            return taskNTaskListManager.markTaskComplete(index) == 1 ? 'task marked complete' : 'index is not in range of the current task list or index was undefined';
            break;
        case "6":
            index = prompt('Enter the index of task list to make current task list');
            return taskNTaskListManager.switchCurrentTaskListTo(index) == 1 ? 'current task list is switched' : 'index is not in range of the project list or index was undefined';
        case "7":
            let val = taskNTaskListManager.currentTaskListIsComplete();
            return val == 0 ? 'no task in the current task list' : val;
        default:
            console.log('Not a valid choice');
            break;
    }
}