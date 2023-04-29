import './sass/main.scss';

const data = {
  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'ArrowUp', '/', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ArrowUp', '.', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
  letters: {
    en: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ru: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
  },
  symbols: {
    en: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', 'ArrowUp', '?', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
    ru: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ArrowUp', ',', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl'],
  },
};

let language = 'en';
let firstKey = [];

let capsLockActive = false;// TODO refactor to is;
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

  body.append(wrapper);
  wrapper.append(title);
  wrapper.append(textArea);
  wrapper.append(keyBoard);
};

const removeKeyBoard = () => {
  const keyBoard = document.querySelector('.keyBoard ');
  keyBoard.innerHTML = '';
};

const getSymbols = (obj = data.symbols) => {
  const keyBoard = document.querySelectorAll('.key');
  const currentLang = obj[language];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keyBoard.length; i++) {
    keyBoard[i].innerHTML = `<span>${currentLang[i]}</span>`;
  }
};

const generateKeys = (lang) => {
  let initTemplate = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data[lang].length; i++) {
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

const setStyleByPressedNormalBtn = (event) => {
  const textArea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.key span');
  keys.forEach((el) => {
    if (el.textContent === event.key) {
      el.closest('.key').classList.add('active');
      textArea.value += event.key;
    }
  });
  textArea.blur();
};

const setStyleByPressedSpecialBtn = (selector) => {
  const specialBtn = document.querySelector(`${selector}`);
  specialBtn.classList.add('active');
};

const lettersToUpperCase = () => {
  const keys = document.querySelectorAll('.key span');
  keys.forEach((key) => {
    // eslint-disable-next-line no-constant-condition
    if (data.letters[language].includes(key.textContent)) {
      // eslint-disable-next-line no-param-reassign
      key.textContent = key.textContent.toUpperCase();
    }
  });
};

const lettersToLowerCase = () => {
  const keys = document.querySelectorAll('.key span');
  keys.forEach((key) => {
    if (data.letters[language].includes(key.textContent.toLowerCase())) {
      // eslint-disable-next-line no-param-reassign
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

const getSpacialCode = (event) => {
  const textArea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.key span');
  switch (event.code) {
    case 'ShiftLeft':
      getSymbols();
      setStyleByPressedSpecialBtn('.key41');
      lettersToUpperCase();
      break;
    case 'ShiftRight':
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
      setStyleByPressedSpecialBtn('.key54');
      break;
    case 'ControlRight':
      setStyleByPressedSpecialBtn('.key62');
      break;
    case 'CapsLock':
      capsLockActive = !capsLockActive;
      localStorage.setItem('CapsLock', capsLockActive);
      setStyleToCapsLock();
      break;
    case 'Tab': // TODO: need fn;
      event.preventDefault();
      keys.forEach((el) => {
        if (el.textContent === event.key) {
          el.closest('.key').classList.add('active');
          textArea.value += '  ';
        }
      });
      break;
    case 'Space': // TODO: need fn;
      event.preventDefault();
      keys.forEach((el) => {
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
      break;
    case 'ArrowDown':
      setStyleByPressedSpecialBtn('.key60');
      break;
    case 'ArrowLeft':
      setStyleByPressedSpecialBtn('.key59');
      break;
    case 'ArrowRight':
      setStyleByPressedSpecialBtn('.key61');
      break;
    default:
      setStyleByPressedNormalBtn(event);
      break;
  }
};

const setLanguage = (event) => {
  if (event.code === 'ControlLeft') {
    firstKey.push(event.code);
  }
  if (event.code === 'ShiftLeft') {
    if (firstKey.includes('ControlLeft')) {
      // eslint-disable-next-line no-constant-condition, no-unused-expressions
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

const capsLockStorage = () => {
  const capsFromStorage = localStorage.getItem('CapsLock');
  capsLockActive = JSON.parse(capsFromStorage === 'true');
  setStyleToCapsLock();
};

const languageStorage = () => {
  const capsFromStorage = localStorage.getItem('language');
  language = capsFromStorage;
};

const getSpecialKeysByClick = (event) => {
  const textArea = document.querySelector('textarea');
  // const keys = document.querySelectorAll('.key span');
  if (event.target.classList.contains('key14')) {
    textArea.focus();
    textArea.value += '  ';
    event.target.classList.add('active');
  } else if (event.target.closest('.key')) {
    textArea.value += event.target.textContent;
  }
  // switch (event.target) {
  //   case 'ShiftLeft':
  //     getSymbols();
  //     setStyleByPressedSpecialBtn('.key41');
  //     lettersToUpperCase();
  //     break;
  //   case 'ShiftRight':
  //     getSymbols();
  //     setStyleByPressedSpecialBtn('.key53');
  //     lettersToUpperCase();
  //     break;
  //   case 'AltLeft':
  //     setStyleByPressedSpecialBtn('.key56');
  //     break;
  //   case 'AltRight':
  //     setStyleByPressedSpecialBtn('.key58');
  //     break;
  //   case 'ControlLeft':
  //     setStyleByPressedSpecialBtn('.key54');
  //     break;
  //   case 'ControlRight':
  //     setStyleByPressedSpecialBtn('.key62');
  //     break;
  //   case 'CapsLock':
  //     capsLockActive = !capsLockActive;
  //     localStorage.setItem('CapsLock', capsLockActive);
  //     setStyleToCapsLock();
  //     break;
  //   case 'Tab': // TODO: need fn;
  //     event.preventDefault();
  //     keys.forEach((el) => {
  //       if (el.textContent === event.key) {
  //         el.closest('.key').classList.add('active');
  //         textArea.value += '  ';
  //       }
  //     });
  //     break;
  //   case 'Space': // TODO: need fn;
  //     event.preventDefault();
  //     keys.forEach((el) => {
  //       if (el.textContent === event.key) {
  //         el.closest('.key').classList.add('active');
  //         textArea.value += ' ';
  //       }
  //     });
  //     break;
  //   case 'Backspace':
  //     textArea.focus();
  //     setStyleByPressedSpecialBtn('.key13');
  //     break;
  //   case 'Enter':
  //     setStyleByPressedSpecialBtn('.key40');
  //     textArea.focus();
  //     break;
  //   case 'Delete':
  //     textArea.focus();
  //     setStyleByPressedSpecialBtn('.key27');
  //     break;
  //   case 'ArrowUp':
  //     setStyleByPressedSpecialBtn('.key51');
  //     break;
  //   case 'ArrowDown':
  //     setStyleByPressedSpecialBtn('.key60');
  //     break;
  //   case 'ArrowLeft':
  //     setStyleByPressedSpecialBtn('.key59');
  //     break;
  //   case 'ArrowRight':
  //     setStyleByPressedSpecialBtn('.key61');
  //     break;
  //   default:
  //     setStyleByPressedNormalBtn(event);
  //     break;
  // }
};

const setListenertoKeyBoard = () => {
  const keyBoard = document.querySelector('.keyBoard');
  keyBoard.addEventListener('click', (event) => {
    getSpecialKeysByClick(event);
  });
};

window.onkeydown = (event) => {
  getSpacialCode(event);
  setLanguage(event);
};

window.onkeyup = (event) => {
  const keys = document.querySelectorAll('.key span');
  if (event.code !== 'CapsLock') {
    keys.forEach((el) => {
      if (el.textContent === event.key) {
        el.closest('.key').classList.remove('active');
      }
    });
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    getSymbols(data);
    lettersToLowerCase();
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

window.onload = () => {
  languageStorage();
  generateLayout();
  generateKeys(language);
  setKeySize();
  serArrowSvg();
  capsLockStorage();
  setListenertoKeyBoard();
};

window.onbeforeunload = () => {
  localStorage.setItem('language', language);
};
