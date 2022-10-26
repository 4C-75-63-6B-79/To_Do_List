function Task(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    // this.priority = priority;
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
    
    // (function() {
    //     currentTaskList = new TaskList('default', projects.length);
    //     projects.push(currentTaskList);
    // })();

    function projectsLength() {
        return projects.length;
    }

    function createTask(title, dueDate) {
        // let title = prompt('Enter the title of task') || 'task' + currentTaskList.taskList.length;
        // let dueDate = prompt('Enter date in dd/mm/yy');
        // let priority = prompt('Enter priority') || 0;
        currentTaskList.taskList.push(new Task(title, dueDate));
    }

    function createTaskList(title) {
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
        projectsLength,
        createTask,
        createTaskList,
        displayCurrentTaskList,
        displayAllProjects,
        markTaskComplete,
        switchCurrentTaskListTo,
        currentTaskListIsComplete
    }
})();

export default function control(choice, object=null) {

    switch(choice) {
        case 1:
            taskNTaskListManager.createTaskList(object.title);
            object.value.forEach(val => taskNTaskListManager.createTask(val[0], val[1]));
            taskNTaskListManager.displayCurrentTaskList();
            break;
        default:
            console.log('Not a valid choice');
            break;
    }
}