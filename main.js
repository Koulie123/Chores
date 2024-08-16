/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/chore.js":
/*!******************************!*\
  !*** ./src/modules/chore.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chore)
/* harmony export */ });
class Chore {
  constructor(name, description, fullDetails) {
    this.name = name;
    this.description = description;
    this.fullDetails = fullDetails;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chore.js */ "./src/modules/chore.js");


let choresList = [];
choresList.push(new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"]("test", "test desc", "testLongDesc"));
const toBeReplaced = document.querySelector("#toBeReplaced");
if (toBeReplaced == null) {
  console.log("to be replaced is null");
} else {
  console.log("to be replaced is not null");
}
toBeReplaced.textContent = choresList[0].name;

//TODO create a list of 4 sets of chores
let choreGroups = [];
//Chores - Mopping and Sweeping/vacuuming, wipe down the kitchen, wipe down the bathrooms, Empty garbages, recycling and compost
let moppingAndVaccumingChores = [
  new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Mopping the floors",
    "Use the mop and bucket from the basement to clean the 1st floor, second floor and stairs.",
    "empty",
  ),
  new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Vacuuming",
    "Use the Vacuum and or broom to clean the floors and carpets. If the vacuum is getting full, please empty it into the garbage",
    "empty",
  ),
];
let kitchenChores = [
  new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Clean Kitchen",
    "Wipe down all surfaces in the kitchen, as well as cleaning the sink and microwave.",
    "If we are low on any cleaning products please let Koulie know.",
  ),
];
let bathroomChores = [
  new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Clean Bathrooms",
    "Please clean the sink toilet and tub in the upstairs bathroom. Downstairs bathroom should be clean if it looks dirty but is not necessart if it looks clean.",
    "If we are low on any cleaning products please let Koulie know.",
  ),
];
let garbageChores = [
  new _modules_chore_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    "Garbage, recycling and compost",
    "Please empty the Garbage, recycling and compost throughout the week as needed",
    "",
  ),
];
choreGroups.push(moppingAndVaccumingChores);
choreGroups.push(kitchenChores);
choreGroups.push(bathroomChores);
choreGroups.push(garbageChores);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0Esb0JBQW9CLHlEQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvLi9zcmMvbW9kdWxlcy9jaG9yZS5qcyIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVmYXVsdC1wYWNrYWdlLW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWZhdWx0LXBhY2thZ2UtbmFtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlZmF1bHQtcGFja2FnZS1uYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENob3JlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGZ1bGxEZXRhaWxzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5mdWxsRGV0YWlscyA9IGZ1bGxEZXRhaWxzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaG9yZSBmcm9tIFwiLi9tb2R1bGVzL2Nob3JlLmpzXCI7XG5cbmxldCBjaG9yZXNMaXN0ID0gW107XG5jaG9yZXNMaXN0LnB1c2gobmV3IENob3JlKFwidGVzdFwiLCBcInRlc3QgZGVzY1wiLCBcInRlc3RMb25nRGVzY1wiKSk7XG5jb25zdCB0b0JlUmVwbGFjZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvQmVSZXBsYWNlZFwiKTtcbmlmICh0b0JlUmVwbGFjZWQgPT0gbnVsbCkge1xuICBjb25zb2xlLmxvZyhcInRvIGJlIHJlcGxhY2VkIGlzIG51bGxcIik7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhcInRvIGJlIHJlcGxhY2VkIGlzIG5vdCBudWxsXCIpO1xufVxudG9CZVJlcGxhY2VkLnRleHRDb250ZW50ID0gY2hvcmVzTGlzdFswXS5uYW1lO1xuXG4vL1RPRE8gY3JlYXRlIGEgbGlzdCBvZiA0IHNldHMgb2YgY2hvcmVzXG5sZXQgY2hvcmVHcm91cHMgPSBbXTtcbi8vQ2hvcmVzIC0gTW9wcGluZyBhbmQgU3dlZXBpbmcvdmFjdXVtaW5nLCB3aXBlIGRvd24gdGhlIGtpdGNoZW4sIHdpcGUgZG93biB0aGUgYmF0aHJvb21zLCBFbXB0eSBnYXJiYWdlcywgcmVjeWNsaW5nIGFuZCBjb21wb3N0XG5sZXQgbW9wcGluZ0FuZFZhY2N1bWluZ0Nob3JlcyA9IFtcbiAgbmV3IENob3JlKFxuICAgIFwiTW9wcGluZyB0aGUgZmxvb3JzXCIsXG4gICAgXCJVc2UgdGhlIG1vcCBhbmQgYnVja2V0IGZyb20gdGhlIGJhc2VtZW50IHRvIGNsZWFuIHRoZSAxc3QgZmxvb3IsIHNlY29uZCBmbG9vciBhbmQgc3RhaXJzLlwiLFxuICAgIFwiZW1wdHlcIixcbiAgKSxcbiAgbmV3IENob3JlKFxuICAgIFwiVmFjdXVtaW5nXCIsXG4gICAgXCJVc2UgdGhlIFZhY3V1bSBhbmQgb3IgYnJvb20gdG8gY2xlYW4gdGhlIGZsb29ycyBhbmQgY2FycGV0cy4gSWYgdGhlIHZhY3V1bSBpcyBnZXR0aW5nIGZ1bGwsIHBsZWFzZSBlbXB0eSBpdCBpbnRvIHRoZSBnYXJiYWdlXCIsXG4gICAgXCJlbXB0eVwiLFxuICApLFxuXTtcbmxldCBraXRjaGVuQ2hvcmVzID0gW1xuICBuZXcgQ2hvcmUoXG4gICAgXCJDbGVhbiBLaXRjaGVuXCIsXG4gICAgXCJXaXBlIGRvd24gYWxsIHN1cmZhY2VzIGluIHRoZSBraXRjaGVuLCBhcyB3ZWxsIGFzIGNsZWFuaW5nIHRoZSBzaW5rIGFuZCBtaWNyb3dhdmUuXCIsXG4gICAgXCJJZiB3ZSBhcmUgbG93IG9uIGFueSBjbGVhbmluZyBwcm9kdWN0cyBwbGVhc2UgbGV0IEtvdWxpZSBrbm93LlwiLFxuICApLFxuXTtcbmxldCBiYXRocm9vbUNob3JlcyA9IFtcbiAgbmV3IENob3JlKFxuICAgIFwiQ2xlYW4gQmF0aHJvb21zXCIsXG4gICAgXCJQbGVhc2UgY2xlYW4gdGhlIHNpbmsgdG9pbGV0IGFuZCB0dWIgaW4gdGhlIHVwc3RhaXJzIGJhdGhyb29tLiBEb3duc3RhaXJzIGJhdGhyb29tIHNob3VsZCBiZSBjbGVhbiBpZiBpdCBsb29rcyBkaXJ0eSBidXQgaXMgbm90IG5lY2Vzc2FydCBpZiBpdCBsb29rcyBjbGVhbi5cIixcbiAgICBcIklmIHdlIGFyZSBsb3cgb24gYW55IGNsZWFuaW5nIHByb2R1Y3RzIHBsZWFzZSBsZXQgS291bGllIGtub3cuXCIsXG4gICksXG5dO1xubGV0IGdhcmJhZ2VDaG9yZXMgPSBbXG4gIG5ldyBDaG9yZShcbiAgICBcIkdhcmJhZ2UsIHJlY3ljbGluZyBhbmQgY29tcG9zdFwiLFxuICAgIFwiUGxlYXNlIGVtcHR5IHRoZSBHYXJiYWdlLCByZWN5Y2xpbmcgYW5kIGNvbXBvc3QgdGhyb3VnaG91dCB0aGUgd2VlayBhcyBuZWVkZWRcIixcbiAgICBcIlwiLFxuICApLFxuXTtcbmNob3JlR3JvdXBzLnB1c2gobW9wcGluZ0FuZFZhY2N1bWluZ0Nob3Jlcyk7XG5jaG9yZUdyb3Vwcy5wdXNoKGtpdGNoZW5DaG9yZXMpO1xuY2hvcmVHcm91cHMucHVzaChiYXRocm9vbUNob3Jlcyk7XG5jaG9yZUdyb3Vwcy5wdXNoKGdhcmJhZ2VDaG9yZXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9