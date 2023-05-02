/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");

const data = {
  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'ArrowUp', '/', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ArrowUp', '.', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
  letters: {
    en: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ru: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
  },
  symbols: {
    en: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', 'ArrowUp', '?', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
    ru: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ArrowUp', ',', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl']
  }
};
let language = 'en';
let firstKey = [];
let capsLockActive = false; // TODO refactor to is;
// TODO for in map
const generateLayout = () => {
  const body = document.querySelector('body');
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'RSS виртуальная клавиатура';
  const textArea = document.createElement('textarea');
  textArea.setAttribute('cols', '40');
  textArea.setAttribute('rows', '5');
  textArea.className = 'input input__container';
  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyBoard keyBoard__container';
  const arrowMnemonikUp = document.createElement('div');
  arrowMnemonikUp.className = 'arrow-mnemonik_up';
  arrowMnemonikUp.innerHTML = '&#8593';
  const arrowMnemonikDown = document.createElement('div');
  arrowMnemonikDown.className = 'arrow-mnemonik_down';
  arrowMnemonikDown.innerHTML = '&#8595';
  const arrowMnemonikRight = document.createElement('div');
  arrowMnemonikRight.className = 'arrow-mnemonik_right';
  arrowMnemonikRight.innerHTML = '&#8594';
  const arrowMnemonikLeft = document.createElement('div');
  arrowMnemonikLeft.className = 'arrow-mnemonik_left';
  arrowMnemonikLeft.innerHTML = '&#8592';
  const text = document.createElement('p');
  text.textContent = 'Клавиатура создана в операционной системе Windows';
  text.className = 'content';
  const subText = document.createElement('p');
  subText.textContent = 'Для переключения языка комбинация: левыe ctrl + shift';
  subText.className = 'content';
  body.append(wrapper);
  wrapper.append(title);
  wrapper.append(textArea);
  wrapper.append(keyBoard);
  body.append(text);
  body.append(subText);
  body.append(arrowMnemonikUp);
  body.append(arrowMnemonikDown);
  body.append(arrowMnemonikRight);
  body.append(arrowMnemonikLeft);
};
const removeKeyBoard = () => {
  const keyBoard = document.querySelector('.keyBoard ');
  keyBoard.innerHTML = '';
};
const getSymbols = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data.symbols;
  const keyBoard = document.querySelectorAll('.key');
  const currentLang = obj[language];
  for (let i = 0; i < keyBoard.length; i += 1) {
    keyBoard[i].innerHTML = `<span>${currentLang[i]}</span>`;
  }
};
const generateKeys = function () {
  let lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  let initTemplate = '';
  for (let i = 0; i < data[lang].length; i += 1) {
    initTemplate += `<div class='key key${[i]}'><span>${data[lang][i]}</span></div> `;
  }
  const keyBoardContainer = document.querySelector('.keyBoard__container');
  keyBoardContainer.insertAdjacentHTML('beforeend', initTemplate);
};
const setKeySize = () => {
  const backColons = document.querySelector('.key0');
  const backspace = document.querySelector('.key13');
  const tab = document.querySelector('.key14');
  const slash = document.querySelector('.key27');
  const caps = document.querySelector('.key28');
  const enter = document.querySelector('.key40');
  const shiftLeft = document.querySelector('.key41');
  const shifRight = document.querySelector('.key53');
  const ctrlRight = document.querySelector('.key62');
  const space = document.querySelector('.key57');
  backColons.classList.add('key_first-row');
  slash.classList.add('key_second-row');
  tab.classList.add('key_second-row');
  backspace.classList.add('key_back-space');
  caps.classList.add('key_therd-row');
  enter.classList.add('key_therd-row');
  shiftLeft.classList.add('key_forth-row');
  space.classList.add('key_space');
  shifRight.classList.add('key_right-size');
  ctrlRight.classList.add('key_right-size');
};
const serArrowSvg = () => {
  const arrowUp = document.querySelector('.key51 span');
  const arrowDown = document.querySelector('.key60 span');
  const arrowLeft = document.querySelector('.key59 span');
  const arrowRight = document.querySelector('.key61 span');
  arrowUp.textContent = '';
  arrowDown.textContent = '';
  arrowLeft.textContent = '';
  arrowRight.textContent = '';
  arrowUp.classList.add('arrow__up');
  arrowUp.classList.add('arrow');
  arrowDown.classList.add('arrow__down');
  arrowDown.classList.add('arrow');
  arrowLeft.classList.add('arrow__left');
  arrowLeft.classList.add('arrow');
  arrowRight.classList.add('arrow__right');
  arrowRight.classList.add('arrow');
};
const setStyleByPressedNormalBtn = event => {
  const textArea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.key span');
  let str = event.key;
  keys.forEach(el => {
    if (capsLockActive) {
      str = str.toUpperCase();
      if (el.textContent === str) {
        el.closest('.key').classList.add('active');
        textArea.value += str;
      }
    } else {
      str = str.toLowerCase();
      if (el.textContent === str) {
        el.closest('.key').classList.add('active');
        textArea.value += str;
      }
    }
  });
  textArea.blur();
};
const setStyleByPressedSpecialBtn = selector => {
  const specialBtn = document.querySelector(`${selector}`);
  specialBtn.classList.add('active');
};
const lettersToUpperCase = () => {
  const keys = document.querySelectorAll('.key span');
  keys.forEach(key => {
    if (data.letters[language].includes(key.textContent)) {
      key.textContent = key.textContent.toUpperCase();
    }
  });
};
const lettersToLowerCase = () => {
  const keys = document.querySelectorAll('.key span');
  keys.forEach(key => {
    if (data.letters[language].includes(key.textContent.toLowerCase())) {
      key.textContent = key.textContent.toLowerCase();
    }
  });
};
const setStyleToCapsLock = () => {
  const capsLock = document.querySelector('.key28');
  if (capsLockActive) {
    lettersToUpperCase();
    capsLock.classList.add('active');
  } else {
    lettersToLowerCase();
    capsLock.classList.remove('active');
  }
};
const getSpacialCode = event => {
  const textArea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.key span');
  const arrowUp = document.querySelector('.arrow-mnemonik_up');
  const arrowDown = document.querySelector('.arrow-mnemonik_down');
  const arrowLeft = document.querySelector('.arrow-mnemonik_left');
  const arrowRight = document.querySelector('.arrow-mnemonik_right');
  switch (event.code) {
    case 'ShiftLeft':
      capsLockActive = true;
      getSymbols();
      setStyleByPressedSpecialBtn('.key41');
      lettersToUpperCase();
      break;
    case 'ShiftRight':
      capsLockActive = true;
      getSymbols();
      setStyleByPressedSpecialBtn('.key53');
      lettersToUpperCase();
      break;
    case 'AltLeft':
      setStyleByPressedSpecialBtn('.key56');
      break;
    case 'AltRight':
      setStyleByPressedSpecialBtn('.key58');
      break;
    case 'ControlLeft':
      event.preventDefault();
      setStyleByPressedSpecialBtn('.key54');
      break;
    case 'ControlRight':
      event.preventDefault();
      setStyleByPressedSpecialBtn('.key62');
      break;
    case 'CapsLock':
      capsLockActive = !capsLockActive;
      setStyleToCapsLock();
      break;
    case 'Tab':
      // TODO: need fn;
      event.preventDefault();
      keys.forEach(el => {
        if (el.textContent === event.key) {
          el.closest('.key').classList.add('active');
          textArea.value += '  ';
        }
      });
      break;
    case 'Space':
      // TODO: need fn;
      event.preventDefault();
      keys.forEach(el => {
        if (el.textContent === event.key) {
          el.closest('.key').classList.add('active');
          textArea.value += ' ';
        }
      });
      break;
    case 'Backspace':
      textArea.focus();
      setStyleByPressedSpecialBtn('.key13');
      break;
    case 'Enter':
      setStyleByPressedSpecialBtn('.key40');
      textArea.focus();
      break;
    case 'Delete':
      textArea.focus();
      setStyleByPressedSpecialBtn('.key27');
      break;
    case 'ArrowUp':
      setStyleByPressedSpecialBtn('.key51');
      textArea.value += arrowUp.textContent;
      break;
    case 'ArrowDown':
      setStyleByPressedSpecialBtn('.key60');
      textArea.value += arrowDown.textContent;
      break;
    case 'ArrowLeft':
      setStyleByPressedSpecialBtn('.key59');
      textArea.value += arrowLeft.textContent;
      break;
    case 'ArrowRight':
      setStyleByPressedSpecialBtn('.key61');
      textArea.value += arrowRight.textContent;
      break;
    default:
      setStyleByPressedNormalBtn(event);
      break;
  }
};
const setLanguage = event => {
  if (event.code === 'ControlLeft') {
    firstKey.push(event.code);
  }
  if (event.code === 'ShiftLeft') {
    if (firstKey.includes('ControlLeft')) {
      // eslint-disable-next-line no-unused-expressions
      language === 'en' ? language = 'ru' : language = 'en';
      localStorage.setItem('language', language);
      removeKeyBoard();
      generateKeys(language);
      setKeySize();
    }
    getSpacialCode(event);
  }
  serArrowSvg();
};
const languageStorage = () => {
  const capsFromStorage = localStorage.getItem('language');
  if (capsFromStorage) {
    language = capsFromStorage;
  } else {
    language = 'en';
  }
};
const getSpecialKeysByClick = event => {
  const textArea = document.querySelector('textarea');
  if (event.target.classList.contains('key14') || event.target.closest('.key14')) {
    textArea.focus();
    textArea.value += '  ';
  } else if (event.target.classList.contains('key28') || event.target.closest('.key28')) {
    capsLockActive = !capsLockActive;
    localStorage.setItem('CapsLock', capsLockActive);
    setStyleToCapsLock();
  } else if (event.target.classList.contains('key41') || event.target.closest('.key41')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key53') || event.target.closest('.key53')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key54') || event.target.closest('.key54')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key62') || event.target.closest('.key62')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key56') || event.target.closest('.key56')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key58') || event.target.closest('.key58')) {
    textArea.value += '';
  } else if (event.target.classList.contains('key40') || event.target.closest('.key40')) {
    textArea.focus();
    textArea.value += '\n';
  } else if (event.target.classList.contains('key27') || event.target.closest('.key27')) {
    textArea.focus();
    const pos = textArea.selectionStart;
    if (pos !== textArea.value - 1) {
      textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1);
      textArea.setSelectionRange(pos, pos + 1);
    }
  } else if (event.target.classList.contains('key13') || event.target.closest('.key13')) {
    textArea.focus();
    const pos = textArea.selectionStart;
    if (pos !== 0) {
      textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
      textArea.setSelectionRange(pos - 1, pos);
    }
  } else if (event.target.closest('.key')) {
    textArea.value += event.target.textContent;
  }
};
const setListenertoKeyBoard = () => {
  const keyBoard = document.querySelector('.keyBoard');
  keyBoard.addEventListener('click', event => {
    getSpecialKeysByClick(event);
  });
  keyBoard.addEventListener('mousedown', event => {
    const textArea = document.querySelector('textarea');
    const arrowUp = document.querySelector('.arrow-mnemonik_up');
    const arrowDown = document.querySelector('.arrow-mnemonik_down');
    const arrowLeft = document.querySelector('.arrow-mnemonik_left');
    const arrowRight = document.querySelector('.arrow-mnemonik_right');
    if (event.target.classList.contains('key41') || event.target.closest('.key41')) {
      getSymbols();
      lettersToUpperCase();
      serArrowSvg();
    } else if (event.target.classList.contains('key53') || event.target.closest('.key53')) {
      getSymbols();
      lettersToUpperCase();
      serArrowSvg();
    } else if (event.target.classList.contains('key59') || event.target.closest('.key59')) {
      textArea.value += arrowLeft.textContent;
    } else if (event.target.classList.contains('key51') || event.target.closest('.key51')) {
      textArea.value += arrowUp.textContent;
    } else if (event.target.classList.contains('key60') || event.target.closest('.key60')) {
      textArea.value += arrowDown.textContent;
    } else if (event.target.classList.contains('key61') || event.target.closest('.key61')) {
      textArea.value += arrowRight.textContent;
    }
  });
  keyBoard.addEventListener('mouseup', event => {
    if (event.target.classList.contains('key41') || event.target.closest('.key41')) {
      getSymbols(data);
      lettersToLowerCase();
      event.target.classList.remove('active');
      // capsLockActive = false;
      serArrowSvg();
    } else if (event.target.classList.contains('key53') || event.target.closest('.key53')) {
      getSymbols(data);
      lettersToLowerCase();
      event.target.classList.remove('active');
      serArrowSvg();
    }
  });
};
window.onkeydown = event => {
  getSpacialCode(event);
  setLanguage(event);
};
window.onkeyup = event => {
  const keys = document.querySelectorAll('.key span');
  if (event.code !== 'CapsLock') {
    keys.forEach(el => {
      if (el.textContent === event.key) {
        el.closest('.key').classList.remove('active');
      } else {
        el.closest('.key').classList.remove('active');
      }
    });
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    getSymbols(data);
    lettersToLowerCase();
    capsLockActive = false;
  } else if (event.code === 'ArrowLeft') {
    const arrowLeft = document.querySelector('.key59');
    arrowLeft.classList.remove('active');
  } else if (event.code === 'ArrowRight') {
    const arrowRight = document.querySelector('.key61');
    arrowRight.classList.remove('active');
  } else if (event.code === 'ArrowUp') {
    const arrowUp = document.querySelector('.key51');
    arrowUp.classList.remove('active');
  } else if (event.code === 'ArrowDown') {
    const arrowDown = document.querySelector('.key60');
    arrowDown.classList.remove('active');
  }
  firstKey = [];
  serArrowSvg();
};
document.addEventListener('load', () => {
  console.log(language);
  languageStorage();
  generateLayout();
  generateKeys('en');
  setKeySize();
  serArrowSvg();
  setListenertoKeyBoard();
});
document.addEventListener('beforeunload', () => {
  console.log(language);
  localStorage.setItem('language', language);
});
console.log(111);
})();

/******/ })()
;
//# sourceMappingURL=index.2de7691a6ceb53598ec5.js.map