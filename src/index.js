import obj from './modules/make_task_info_form';
import control from './modules/task_taskList_Data';

import './styles.css'

console.log('to do list'); 

const basic_page = (function() {
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

    return {
        makeHeader,
        makeMain,
    };
})();


(function start() {
    basic_page.makeHeader();
    basic_page.makeMain();
    obj.uiElements.createAddTaskButton();
    control(8);
})();