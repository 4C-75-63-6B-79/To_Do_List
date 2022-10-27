import start from './modules/make_task_info_form';

import './styles.css'

start(document);

// makeHeader(document);
// addTaskButton(document);

console.log('to do list'); 


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