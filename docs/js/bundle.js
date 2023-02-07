/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/sprite/icon-arrow.svg":
/*!******************************************!*\
  !*** ./src/assets/sprite/icon-arrow.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-arrow-usage",
      viewBox: "0 0 32 9",
      url: "/assets/sprite/" + "sprite.svg#icon-arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/sprite/icon-user.svg":
/*!*****************************************!*\
  !*** ./src/assets/sprite/icon-user.svg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-user-usage",
      viewBox: "0 0 24 24",
      url: "/assets/sprite/" + "sprite.svg#icon-user-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showPass */ "./src/js/modules/showPass.js");
/* harmony import */ var _modules_showPass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_showPass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formValidate */ "./src/js/modules/formValidate.js");
/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_formValidate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_matchPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/matchPass */ "./src/js/modules/matchPass.js");
/* harmony import */ var _modules_matchPass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_matchPass__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/modules/formValidate.js":
/*!****************************************!*\
  !*** ./src/js/modules/formValidate.js ***!
  \****************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  let inputPass = document.getElementsByName("newPass");
  inputPass.forEach((input) => {
    input.addEventListener("change", isPassValid);
  });
});

function isPassValid(e) {

  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (validPass.test(e.target.value)) {
    console.log("ok");
    if (e.target.classList.contains("noValid")) {
      e.target.classList.remove("noValid");
      deleteErrorMessage(e);
    }
  } else {
    console.log("wrong");
    createErrorMessage(e);
    if (!e.target.classList.contains("noValid")) {
      e.target.classList.add("noValid");
    }
  }
}

function createErrorMessage(e) {
  const parentInput = e.target.parentElement;
  if (!!parentInput.getElementsByTagName("p") && parentInput.childElementCount < 3) {
    let textError = parentInput.appendChild(document.createElement("p"));
    textError.classList.add("onError");
    textError.innerText = "Пароль должен быть не менее 6 символов";
  }
}

function deleteErrorMessage(e) {
  const parentInput = e.target.parentElement;
  let textError = parentInput.querySelectorAll("p");

  if (textError[0].parentElement) {
    textError[0].parentElement.removeChild(textError[0]);
  }
}



/***/ }),

/***/ "./src/js/modules/matchPass.js":
/*!*************************************!*\
  !*** ./src/js/modules/matchPass.js ***!
  \*************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  const inputsPass = document.querySelectorAll("[data-password]");
  const btnSend = document.querySelector("[data-btn-send]");
  inputsPass.forEach((input) => {
    btnSend.addEventListener("click", isPassMatches);
  });
});


function isPassMatches() {
  const firstPass = document.querySelector("[data-new-pass]");
  const secondPass = document.querySelector("[data-second-pass]");
  const secondPassParent = secondPass.parentElement;

  let firstPassValue = firstPass.value;
  let secondPassValue = secondPass.value;

  if (firstPassValue != secondPassValue && secondPassParent.childElementCount < 2) {
    let textError = secondPassParent.appendChild(document.createElement("p"));
    textError.classList.add("onError");
    textError.innerText = "Пароли не совпадают";
  } else {
    let textError = secondPassParent.querySelectorAll('p')
    if (textError[0].parentElement) {
      textError[0].parentElement.removeChild(textError[0]);
    }
  }
}




/***/ }),

/***/ "./src/js/modules/showPass.js":
/*!************************************!*\
  !*** ./src/js/modules/showPass.js ***!
  \************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", changeIcon)
});

const btn = document.querySelector("[data-button-open-pass]");
const inputPass = document.querySelector("[data-new-pass]");


function changeIcon(e) {
  e.preventDefault();
  btn.classList.toggle('open');
  showPass();
}


function showPass() {
  if (inputPass.getAttribute('type') == 'password') {
    inputPass.setAttribute('type', 'text');
  } else {
    inputPass.setAttribute('type', 'password');
  }
}



/***/ }),

/***/ "./src/js/sprite.js":
/*!**************************!*\
  !*** ./src/js/sprite.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sprite_icon_user_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sprite/icon-user.svg */ "./src/assets/sprite/icon-user.svg");
/* harmony import */ var _assets_sprite_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sprite/icon-arrow.svg */ "./src/assets/sprite/icon-arrow.svg");




/* harmony default export */ __webpack_exports__["default"] = ({
  iconUser: _assets_sprite_icon_user_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  iconArrow: _assets_sprite_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"],

});


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./src/js/sprite.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/js/app.js");



}();
/******/ })()
;