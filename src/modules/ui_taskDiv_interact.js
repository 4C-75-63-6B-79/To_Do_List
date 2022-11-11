import control from './task_taskList_Data.js';
import obj from './make_task_info_form';

export default function control2(listDiv) {
    console.log(listDiv.getAttribute('data-taskListIndex'));
    listDiv.classList.remove('taskList');
    let taskListIndex = listDiv.getAttribute('data-taskListIndex');
    control(3, taskListIndex);
    let currentTaskList = control(6, taskListIndex);
    listDiv.setAttribute('id', 'currentTaskList');
    makeTitleDivEditable(listDiv, currentTaskList.title);
    let uncompleteTaskList = document.querySelector(`div[data-taskListIndex="${taskListIndex}"] > .unCompleteTaskDiv`);
    let completeTaskList = document.querySelector(`div[data-taskListIndex="${taskListIndex}"] > .completeTaskDiv`);
    let unCompleteTasks = uncompleteTaskList.childNodes;
    let completeTasks = completeTaskList.childNodes;
    for(let i=0; i<unCompleteTasks.length; i++) {
        let index = Number(unCompleteTasks[i].getAttribute('data-taskIndex'));
        modifyExistingTask(unCompleteTasks[i], currentTaskList.taskList[index].dueDate);
    }
    for(let i=0; i<completeTasks.length; i++) {
        let index = Number(completeTasks[i].getAttribute('data-taskIndex'));
        modifyExistingTask(completeTasks[i], currentTaskList.taskList[index].dueDate, false);
    }
    let lastChildIndex = uncompleteTaskList.lastChild.getAttribute('data-taskIndex');
    // console.log(lastChildIndex);
    for(let i=Number(lastChildIndex)+1; i<currentTaskList.taskList.length; i++) {
        let task = currentTaskList.taskList[i];
        // console.log();
        if(!task.completeStatus) {
            uncompleteTaskList.appendChild(makeTask(i, task.title, task.dueDate));
        }
    }
    listDiv.appendChild(makeCloseButton());
    makeCurrentListCenter();
}

function makeCurrentListCenter() {
    let currentList = document.getElementById('currentTaskList');
    let currentListHeight = currentList.offsetHeight;
    let windowHeight = window.innerHeight;
    currentList.style.top = `${(windowHeight - currentListHeight) / 2}px`
}

function makeTitleDivEditable(listDiv, title) {
    if(listDiv.firstChild.getAttribute('class') === 'taskListTitle' ) {
        let titleDiv = listDiv.firstChild;
        titleDiv.setAttribute('contenteditable', "true");
    }
}

function modifyExistingTask(taskDiv, dueDate, isEditable=true) {
    taskDiv.childNodes[1].setAttribute('contenteditable', isEditable);
    taskDiv.childNodes[1].addEventListener('keydown', enterPressedOnDiv);
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', dueDate );
    dateInput.disabled = !isEditable;
    taskDiv.appendChild(dateInput);
}

function makeTask(index, title, dueDate, completeStatus=false) {
    let listDiv = document.getElementById('currentTaskList');
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    taskDiv.setAttribute('data-taskIndex', index);
    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'taskTitleDiv');
    taskTitle.setAttribute('contenteditable', 'true');
    taskTitle.textContent = title;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', (event) => obj.makeTaskListDiv.taskCheckBoxClicked(event, listDiv, taskDiv));
    taskTitle.textContent = title;
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', dueDate);
    if(completeStatus) {
        checkBox.checked = true;
    }
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(dateInput);
    return taskDiv;
}

function enterPressedOnDiv(event) {
    if(event.keyCode == '13') {
        console.log(event.target.parentElement);
        let parentElement = event.target.parentElement
        event.preventDefault();
        let index = parentElement.getAttribute('data-taskIndex');
        let newElement = makeTask(null, null, null);
        parentElement.parentElement.insertBefore(newElement, parentElement.nextSibling);
        increaseDataIndexByOne(Number(index));
        newElement.setAttribute('data-taskIndex', Number(index) + 1);
        newElement.childNodes[1].focus();
    }
}

function increaseDataIndexByOne(index) {
    let taskList = document.querySelectorAll('#currentTaskList div[data-taskIndex]');
    taskList.forEach(task => {
        let i = task.getAttribute('data-taskIndex');
        if(Number(i) > index) {
            task.setAttribute('data-taskIndex', Number(i)+1);
        }
    })
}

function makeCloseButton() {
    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('id', 'closeFormButton');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', closeButtonClicked);
    return closeBtn;
}

function closeButtonClicked(event) {
    let parent = event.target.parentElement;
    parent.scrollTop = 0;
    let updatedCurrentList = makeTaskList(parent);
    removeExtraUncompleteTask(parent);
    removeDueDateElement(parent);
    parent.classList.add('taskList');
    parent.removeAttribute('id');
    parent.removeChild(event.target);
    control(7, updatedCurrentList);
    event.stopPropagation();
}

function makeTaskList(parent) {
    console.log(parent);
    let title = parent.childNodes[0].textContent;
    let taskList = Array.from(document.querySelectorAll('#currentTaskList div[data-taskIndex]'));
    let tasks = [];
    for(let i=0; i<taskList.length; i++) {
        let task = makeNewTask(taskList[i]);
        tasks[Number(task.index)] = task;
    }
    return {
        title,
        tasks
    }
}

function makeNewTask(task) {
    let index = task.getAttribute('data-taskIndex');
    let title = task.childNodes[1].textContent;
    let completeStatus = task.childNodes[0].checked;
    let dueDate = task.childNodes[2].value;
    return {
        index, 
        title,
        completeStatus,
        dueDate
    };
}

function removeExtraUncompleteTask(parent) {
    parent.childNodes[0].setAttribute('contenteditable', 'false');
    let uncompleteTaskContainer = document.querySelector('#currentTaskList>.unCompleteTaskDiv');
    let uncompleteTaskList = document.querySelectorAll('#currentTaskList>.unCompleteTaskDiv>div[data-taskIndex]');
    for(let i=9; i<uncompleteTaskList.length; i++) {
        uncompleteTaskContainer.removeChild(uncompleteTaskList[i]);
    }
}

function removeDueDateElement(parent) {
    let tasksList = document.querySelectorAll('#currentTaskList div[data-taskIndex]');
    tasksList.forEach(task => {
        task.childNodes[1].setAttribute('contenteditable', 'false');
        task.childNodes[1].removeEventListener('keydown', enterPressedOnDiv);
        task.removeChild(task.childNodes[2])
    });
}

