import obj from './modules/make_task_info_form';

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

    // const makeEmptyColumnDiv = function(index) {
    //     let div = document.createElement('div');
    //     div.setAttribute('class', 'column');
    //     div.setAttribute('data-columnIndex', index);
    //     return div;
    // }

    return {
        makeHeader,
        makeMain,
    };
})();


(function start() {
    basic_page.makeHeader();
    basic_page.makeMain();
    obj.uiElements.createAddTaskButton();
})();


// (function start() {
//     basic_page.makeHeader();
//     basic_page.
// })


// function choiceIndex() {
//     console.log("-----------------------------------");
//     console.log("Enter the following number to do the following");
//     console.log("1 Create Task in the current Task list");
//     console.log("2 Create a new Task list and makes it current");
//     console.log("3 To display all the task in the current tasklist");
//     console.log("4 Display all the tasklist");
//     console.log("5 Mark a task complete");
//     console.log("6 Switch to a different task list");
//     console.log("7 Are all the task in current task list complete");
//     console.log("8 display controls again");
//     console.log("-----------------------------------");
// }

// choiceIndex();

// window.addEventListener("keydown", function(event) {
//     if(event.key == '8') {
//         choiceIndex();
//     }
//     let message = control(event.key);
//     if(message) {
//         console.log(message);
//     }
// });