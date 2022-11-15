import obj from './make_task_info_form';

function Task(title, dueDate, completeStatus=false) {
    this.title = title;
    this.dueDate = dueDate;
    // this.priority = priority;
    this.completeStatus = completeStatus;
}

Task.prototype.markComplete_Uncomplete = function() {
    this.completeStatus = this.completeStatus ? false : true;
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

    function createTask(title, dueDate, completeStatus) {
        currentTaskList.taskList.push(new Task(title, dueDate, completeStatus));
    }

    function createTaskList(title) {
        title = title == 'General Tasks' ? title+" "+projects.length : title;
        currentTaskList = new TaskList(title, projects.length);
        projects.push(currentTaskList);
    }

    function displayCurrentTaskList() {
        console.log(currentTaskList.title);
        if(currentTaskList.taskList.length == 0) {
            return 0
        }
        // currentTaskList.displayAll();
        return 1;
    }

    function getCurrentTaskList() {
        const copyCurrentTaskList = Object.assign({}, currentTaskList);
        populateStorage();
        return copyCurrentTaskList;
    }

    function markTaskComplete_Uncomplete(index) {
        if(currentTaskList.taskList.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList.taskList[index].markComplete_Uncomplete();
        populateStorage();
        return 1;
    }

    function switchCurrentTaskListTo(index) {
        if(projects.length < index || !index || index == -1) {
            return 0;
        }
        currentTaskList = projects[index];
        return 1;
    }

    function getUncompletedTaskAfter(index) {
        for(let i=Number(index)+1; i<currentTaskList.taskList.length; i++) {
            let task = currentTaskList.taskList[i];
            if(!task.isComplete()) {
                return {
                    title: task.title,
                    index: i,
                    dueDate: task.dueDate,
                    completeStatus: task.completeStatus,
                };
            }
        }
        return null;
    }

    function updateCurrentTaskList(taskList) {
        currentTaskList.title = taskList.title;
        currentTaskList.taskList = [];
        taskList.tasks.forEach((task) => {
            currentTaskList.taskList.push(new Task(task.title, task.dueDate, task.completeStatus));
        })
        populateStorage();
    }

    function storageAvailable() {
        let storage;
        try {
            storage = window.localStorage;
            const x = '__storage test__';
            storage.setItem(x,x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            // console.log(e);
        }
    }
    
    function populateStorage() {
        if(!storageAvailable) {
            return;
        }
        console.log(currentTaskList);
        localStorage.setItem(`${currentTaskList.index}`, JSON.stringify(currentTaskList));
        // console.log(localStorage);
    }

    function printLocalStorageKeys() {
        let keys;
        if(storageAvailable()) {
            keys = Object.keys(localStorage);
            keys = keys.sort();
        }
        // console.log(keys);
        if(keys.length > 0) {
            keys.forEach(key => {
                let taskList = JSON.parse(localStorage.getItem(key));
                console.log(taskList.index);
                createTaskList(taskList.title);
                taskList.taskList.forEach(task => createTask(task.title, task.dueDate, task.completeStatus));
                
                obj.makeTaskListDiv.displayCurrentTaskList(currentTaskList);
            })
        }
        
    }

    return {
        createTask,
        createTaskList,
        displayCurrentTaskList,
        getCurrentTaskList,
        markTaskComplete_Uncomplete,
        switchCurrentTaskListTo,
        getUncompletedTaskAfter,
        updateCurrentTaskList,
        printLocalStorageKeys
    }
})();

export default function control(choice, option) {

    switch(choice) {
        case 1:
            taskNTaskListManager.createTaskList(option.title); // here option is object which create a new tasklist with all the task
            option.values.forEach(val => taskNTaskListManager.createTask(val[0], val[1], val[2]));
            return taskNTaskListManager.getCurrentTaskList();
        case 2: 
            taskNTaskListManager.markTaskComplete_Uncomplete(option); // here option is the index of the task which need to be marked complete in specific task
            break;
        case 3: 
            taskNTaskListManager.switchCurrentTaskListTo(option); // here option is the index of the tasklist which need to be made current
            break;
        case 4: 
            return(taskNTaskListManager.getUncompletedTaskAfter(option));
            break;
        case 5:
            taskNTaskListManager.displayCurrentTaskList();
            break;
        case 6:
            return taskNTaskListManager.getCurrentTaskList();
            break;
        case 7: 
            taskNTaskListManager.updateCurrentTaskList(option);
            break;
        case 8:
            taskNTaskListManager.printLocalStorageKeys();
            break;
        default:
            console.log('Not a valid choice');
            break;
    }
}