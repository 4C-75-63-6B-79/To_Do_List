/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/task_taskList.js":
/*!**************************************!*\
  !*** ./src/modules/task_taskList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ control)
/* harmony export */ });
function Task(title, description=null, dueDate, priority) {
    // this.index = index;
    this.title = title;
    this.description = description;
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
    if(this.taskList.length == 0) {
        return 0;
    }
    this.taskList.forEach(task => console.log(task));
    return 1;
}

TaskList.prototype.isComplete = function() {
    if(this.taskList.length == 0) {
        return 0;
    } 
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
        let title = prompt('Enter the title of task');
        let description = prompt('Enter description');
        let dueDate = prompt('Enter date in dd/mm/yy');
        let priority = prompt('Enter priority');
        currentTaskList.taskList.push(new Task(title, description, dueDate, priority));
    }

    function createTaskList() {
        let title = prompt('enter the title of the list');
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
        if(currentTaskList.taskList.length < index) {
            return 0;
        }
        currentTaskList.taskList[index].markComplete();
        return 1;
    }

    function switchCurrentTaskListTo(index) {
        if(projects.length < index) {
            return 0;
        }
        currentTaskList = projects[index];
        return 1;
    }

    function currentTaskListIsComplete() {
        currentTaskList.isComplete();
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

function control(choice) {

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
            return taskNTaskListManager.markTaskComplete(index) == 1 ? 'task marked complete' : 'index is not in range of the current task list';
            break;
        case "6":
            index = prompt('Enter the index of task list to make current task list');
            return taskNTaskListManager.switchCurrentTaskListTo(index) == 1 ? 'current task list is switched' : 'index is not in range of the project list';
        case "7":
            let val = taskNTaskListManager.currentTaskListIsComplete();
            return val == 0 ? 'no task added in current task list' : val;
        default:
            console.log('Not a valid choice');
            break;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task_taskList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task_taskList.js */ "./src/modules/task_taskList.js");


console.log('to do list'); 


function choiceIndex() {
    console.log("-----------------------------------");
    console.log("Enter the following number to do the following");
    console.log("1 Create Task in the current Task list");
    console.log("2 Create a new Task list and makes it current");
    console.log("3 To display all the task in the current tasklist");
    console.log("4 Display all the tasklist");
    console.log("5 Mark a task complete");
    console.log("6 Switch to a different task list");
    console.log("7 Are all the task in current task list complete");
    console.log("e to exit");
    console.log("-----------------------------------");
}

while(true) {
    choiceIndex();
    let choice = prompt("Enter your choice");
    if(choice == 'e' || choice == 'E') {
        break;
    }
    let message = (0,_modules_task_taskList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(choice);
    if(message) {
        console.log(message);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRDs7QUFFakQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tfdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb249bnVsbCwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAvLyB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLm1hcmtDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tcGxldGVTdGF0dXMgPSB0cnVlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5pc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVTdGF0dXM7XG59XG5cbmZ1bmN0aW9uIFRhc2tMaXN0KHRpdGxlLCBpbmRleCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xufVxuXG5UYXNrTGlzdC5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMudGFza0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IGNvbnNvbGUubG9nKHRhc2spKTtcbiAgICByZXR1cm4gMTtcbn1cblxuVGFza0xpc3QucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLnRhc2tMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gXG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZXZlcnkodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpO1xufVxuXG5jb25zdCB0YXNrTlRhc2tMaXN0TWFuYWdlciA9IChmdW5jdGlvbiBjb250cm9sKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0xpc3Q7XG4gICAgXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50VGFza0xpc3QgPSBuZXcgVGFza0xpc3QoJ2RlZmF1bHQnLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb21wdCgnRW50ZXIgdGhlIHRpdGxlIG9mIHRhc2snKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdFbnRlciBkZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IHByb21wdCgnRW50ZXIgZGF0ZSBpbiBkZC9tbS95eScpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoJ0VudGVyIHByaW9yaXR5Jyk7XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTGlzdCgpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvbXB0KCdlbnRlciB0aGUgdGl0bGUgb2YgdGhlIGxpc3QnKTtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KHRpdGxlLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKGN1cnJlbnRUYXNrTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRUYXNrTGlzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tMaXN0LnRpdGxlKTtcbiAgICAgICAgaWYoY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdC5kaXNwbGF5QWxsKCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCh0YXNrTGlzdCA9PiBjb25zb2xlLmxvZyh0YXNrTGlzdC50aXRsZSwgdGFza0xpc3QuaW5kZXgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrVGFza0NvbXBsZXRlKGluZGV4KSB7XG4gICAgICAgIGlmKGN1cnJlbnRUYXNrTGlzdC50YXNrTGlzdC5sZW5ndGggPCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2tMaXN0LnRhc2tMaXN0W2luZGV4XS5tYXJrQ29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8oaW5kZXgpIHtcbiAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoIDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUYXNrTGlzdCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3VycmVudFRhc2tMaXN0SXNDb21wbGV0ZSgpIHtcbiAgICAgICAgY3VycmVudFRhc2tMaXN0LmlzQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBjcmVhdGVUYXNrTGlzdCxcbiAgICAgICAgZGlzcGxheUN1cnJlbnRUYXNrTGlzdCxcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzLFxuICAgICAgICBtYXJrVGFza0NvbXBsZXRlLFxuICAgICAgICBzd2l0Y2hDdXJyZW50VGFza0xpc3RUbyxcbiAgICAgICAgY3VycmVudFRhc2tMaXN0SXNDb21wbGV0ZVxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2woY2hvaWNlKSB7XG5cbiAgICBsZXQgaW5kZXg7XG4gICAgc3dpdGNoKGNob2ljZSkge1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgdGFza05UYXNrTGlzdE1hbmFnZXIuY3JlYXRlVGFzaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICB0YXNrTlRhc2tMaXN0TWFuYWdlci5jcmVhdGVUYXNrTGlzdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGFza05UYXNrTGlzdE1hbmFnZXIuZGlzcGxheUN1cnJlbnRUYXNrTGlzdCgpID09IDAgPyAnbm8gdGFzayBpbiB0aGUgY3VycmVudCB0YXNrIGxpc3QnIDogJ0FsbCB0aGUgdGFzayBvZiB0aGUgY3VycmVudCB0YXNrIGxpc3QgZGlzcGxheWVkJztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHRhc2tOVGFza0xpc3RNYW5hZ2VyLmRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IG9mIHRhc2sgdG8gbWFyayBjb21wbGV0ZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tOVGFza0xpc3RNYW5hZ2VyLm1hcmtUYXNrQ29tcGxldGUoaW5kZXgpID09IDEgPyAndGFzayBtYXJrZWQgY29tcGxldGUnIDogJ2luZGV4IGlzIG5vdCBpbiByYW5nZSBvZiB0aGUgY3VycmVudCB0YXNrIGxpc3QnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IG9mIHRhc2sgbGlzdCB0byBtYWtlIGN1cnJlbnQgdGFzayBsaXN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gdGFza05UYXNrTGlzdE1hbmFnZXIuc3dpdGNoQ3VycmVudFRhc2tMaXN0VG8oaW5kZXgpID09IDEgPyAnY3VycmVudCB0YXNrIGxpc3QgaXMgc3dpdGNoZWQnIDogJ2luZGV4IGlzIG5vdCBpbiByYW5nZSBvZiB0aGUgcHJvamVjdCBsaXN0JztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIGxldCB2YWwgPSB0YXNrTlRhc2tMaXN0TWFuYWdlci5jdXJyZW50VGFza0xpc3RJc0NvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsID09IDAgPyAnbm8gdGFzayBhZGRlZCBpbiBjdXJyZW50IHRhc2sgbGlzdCcgOiB2YWw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGEgdmFsaWQgY2hvaWNlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29udHJvbCBmcm9tICcuL21vZHVsZXMvdGFza190YXNrTGlzdC5qcyc7XG5cbmNvbnNvbGUubG9nKCd0byBkbyBsaXN0Jyk7IFxuXG5cbmZ1bmN0aW9uIGNob2ljZUluZGV4KCkge1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coXCJFbnRlciB0aGUgZm9sbG93aW5nIG51bWJlciB0byBkbyB0aGUgZm9sbG93aW5nXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiMSBDcmVhdGUgVGFzayBpbiB0aGUgY3VycmVudCBUYXNrIGxpc3RcIik7XG4gICAgY29uc29sZS5sb2coXCIyIENyZWF0ZSBhIG5ldyBUYXNrIGxpc3QgYW5kIG1ha2VzIGl0IGN1cnJlbnRcIik7XG4gICAgY29uc29sZS5sb2coXCIzIFRvIGRpc3BsYXkgYWxsIHRoZSB0YXNrIGluIHRoZSBjdXJyZW50IHRhc2tsaXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiNCBEaXNwbGF5IGFsbCB0aGUgdGFza2xpc3RcIik7XG4gICAgY29uc29sZS5sb2coXCI1IE1hcmsgYSB0YXNrIGNvbXBsZXRlXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiNiBTd2l0Y2ggdG8gYSBkaWZmZXJlbnQgdGFzayBsaXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiNyBBcmUgYWxsIHRoZSB0YXNrIGluIGN1cnJlbnQgdGFzayBsaXN0IGNvbXBsZXRlXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiZSB0byBleGl0XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG59XG5cbndoaWxlKHRydWUpIHtcbiAgICBjaG9pY2VJbmRleCgpO1xuICAgIGxldCBjaG9pY2UgPSBwcm9tcHQoXCJFbnRlciB5b3VyIGNob2ljZVwiKTtcbiAgICBpZihjaG9pY2UgPT0gJ2UnIHx8IGNob2ljZSA9PSAnRScpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBtZXNzYWdlID0gY29udHJvbChjaG9pY2UpO1xuICAgIGlmKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==