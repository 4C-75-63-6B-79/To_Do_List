// create a function that createst the header section the main section and 
// the footer section.

import control from './task_taskList_Data.js'

import plusImage from '../assests/plus.svg';
import closeImage from '../assests/close.svg'

const uiElements = (function() {
    const body = document.querySelector('body');

    const makeHeader = function() {
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        h1.textContent = 'Tasks';
        header.appendChild(h1);
        body.appendChild(header);
    }

    const makeMain = function() {
        let main = document.createElement('main');
        let addTaskButtonDiv = document.createElement('div');
        let listContainer = document.createElement('div');
        addTaskButtonDiv.setAttribute('id', 'buttonFormContainer');
        listContainer.setAttribute('id', 'listContainer');
        main.appendChild(addTaskButtonDiv);
        main.appendChild(listContainer);
        body.appendChild(main);
    }

    const createAddTaskButton = function() {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        let btn = document.createElement('button');
        btn.setAttribute('id', 'addTaskButton');
        btn.textContent = 'Take a Note...';
        btn.addEventListener('click', addTaskButtonClicked);
        addTaskButtonDiv.appendChild(btn);
    }

    function removeAddTaskButton(btn) {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        btn.removeEventListener('click', addTaskButtonClicked);
        addTaskButtonDiv.removeChild(btn);
    }

    function addTaskButtonClicked(event) {
        removeAddTaskButton(event.target);
        createTaskForm();
    }

    function createTaskForm() {
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        let form = document.createElement('form');
        form.appendChild(createTaskFromTitle());
        let taskDivContainer = document.createElement('div');
        taskDivContainer.setAttribute('id', 'taskListItemContainer');
        taskDivContainer.appendChild(createAddTaskListItem());
        form.appendChild(taskDivContainer);
        form.appendChild(createCloseFormButton());
        addTaskButtonDiv.appendChild(form);
    }

    function createTaskFromTitle() {
        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('id', 'formTitleDiv');
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Title');
        titleDiv.appendChild(titleInput);
        return titleDiv;
    }

    function createAddTaskListItem() {
        let div = document.createElement('div');
        div.setAttribute('id', 'addTaskListItem');
        let plus = document.createElement('img');
        plus.setAttribute('src', plusImage);
        plus.setAttribute('alt', 'plus sign');       
        let textBox = document.createElement('input');
        textBox.setAttribute('type', 'text');
        textBox.setAttribute('placeholder', 'List item');
        div.appendChild(plus);
        div.appendChild(textBox);
        textBox.addEventListener('input', textInTextBox);
        return div;
    }

    function makeListItem(taskDivContainer) {
        let div = document.getElementById('addTaskListItem');
        let idIndex = taskDivContainer.childNodes.length - 1;
        div.removeAttribute('id');
        div.setAttribute('data-taskIndex', ''+idIndex);
        div.setAttribute('class', 'taskListItem');
        let textBox = div.childNodes[1];
        textBox.removeEventListener('input', textInTextBox);
        textBox.removeAttribute('placeholder');
        textBox.addEventListener('keypress', function(event) {
            if(event.code == 'Enter' && Number(textBox.value) != 0) {
                enterPressedOnTaskListItem();
            }
        });
        div.removeChild(div.firstChild);
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        div.insertBefore(checkBox, div.firstChild);
        let dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('min', getCurrentDate());
        // dateInput.value = `${getCurrentDate()}`;
        div.appendChild(dateInput);
        let close = document.createElement('img');
        close.setAttribute('src', closeImage);
        close.setAttribute('alt', 'close sign');
        close.addEventListener('click', deleteTaskListItemButtonClicked);
        div.appendChild(close);
    }

    function textInTextBox() {
        let taskDivContainer = document.getElementById('taskListItemContainer');
        makeListItem(taskDivContainer);
        let div = createAddTaskListItem();
        let taskDiv = document.getElementById('taskListItemContainer');
        taskDiv.appendChild(div);
    }

    function enterPressedOnTaskListItem() {
        let addListItemTextBox = document.querySelector('#addTaskListItem > input');
        let form = document.querySelector('form');
        form.scrollTop += form.offsetHeight;
        addListItemTextBox.focus();
    }

    function deleteTaskListItemButtonClicked(event) {
        let removedDivIndex = removeTaskListItem(event.target);
        updateDataTaskIndex(removedDivIndex);
    }

    function removeTaskListItem(img) {
        let parentDiv = img.parentElement;
        while(parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        let divIndex = parentDiv.getAttribute('data-taskIndex');
        let taskDivContainer = document.getElementById('taskListItemContainer');
        taskDivContainer.removeChild(parentDiv);
        return divIndex;
    }

    function updateDataTaskIndex(index) {
        let taskListItems = Array.from(document.querySelectorAll('div[data-taskIndex]'));
        for(let i=index; i<taskListItems.length; i++) {
            taskListItems[i].setAttribute('data-taskIndex', ""+i);
        }
    }

    function createCloseFormButton() {
        let formCloseButtonDiv = document.createElement('div');
        formCloseButtonDiv.setAttribute('id', 'formCloseButtonDiv'); 
        let closeBtn = document.createElement('button');
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('id', 'closeFormButton');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', closeFormButtonClicked);
        formCloseButtonDiv.appendChild(closeBtn);
        return formCloseButtonDiv;
    }

    function closeFormButtonClicked() {
        createTaskListDetails();
        removeForm();
        createAddTaskButton();
    }

    function createTaskListDetails() {
        let title = document.querySelector('#formTitleDiv > input').value || 'noTitle';
        let tasksList = Array.from(document.querySelectorAll('div[data-taskindex]'));
        let value = tasksList.map(task => [task.childNodes[1].value,task.childNodes[2].value]);
        control(1,
            {
                title,
                value
            });
    }

    function removeForm() {
        let form = document.querySelector('form');
        let closeBtn = document.getElementById('closeFormButton');
        closeBtn.removeEventListener('click', closeFormButtonClicked);
        let addTaskButtonDiv = document.getElementById('buttonFormContainer');
        addTaskButtonDiv.removeChild(form);
    }

    return {
        makeHeader,
        makeMain,
        createAddTaskButton
    }
})();

export default function start(document) {
    
    (function() {
        uiElements.makeHeader();
        uiElements.makeMain();
        uiElements.createAddTaskButton();
    })();
}

const getCurrentDate = function() {
    let date = new Date();
    let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
    return(date.getFullYear() + '-' + month + '-' + date.getDate());
}