// import './index.html';
import './sass/main.scss';

const data = {
  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'и', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
  letters: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
};

const language = 'en';
const generateLayout = () => {
  const body = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'RSS витруальная клавиатура';

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
  const arrowUp = document.querySelector('.key52 span');
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

window.onload = () => {
  generateLayout();
  generateKeys(language);
  setKeySize();
  serArrowSvg();
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
};

const setStyleByPressedSpecialBtn = (selector) => {
  const specialBtn = document.querySelector(`${selector}`);
  specialBtn.classList.add('active');
};

const setStyleToCapsLock = () => {
  const capsLock = document.querySelector('.key28');
  const keys = document.querySelectorAll('.key span');
  if (capsLock.classList.contains('active')) {
    keys.forEach((key) => {
      if (data.letters.includes(key.textContent.toLowerCase())) {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toLowerCase();
      }
      capsLock.classList.remove('active');
    });
  } else {
    keys.forEach((key) => {
      if (data.letters.includes(key.textContent)) {
        // eslint-disable-next-line no-param-reassign
        key.textContent = key.textContent.toUpperCase();
      }
      capsLock.classList.add('active');
    });
  }
};

const getSpacialCode = (event) => {
  const textArea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.key span');
  switch (event.code) {
    case 'ShiftLeft':
      setStyleByPressedSpecialBtn('.key41');
      break;
    case 'ShiftRight':
      setStyleByPressedSpecialBtn('.key53');
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
      setStyleToCapsLock();
      break;
    case 'Tab': // TODO: need fn;
      keys.forEach((el) => {
        if (el.textContent === event.key) {
          el.closest('.key').classList.add('active');
          textArea.value += '  ';
        }
      });
      break;
    default:
      setStyleByPressedNormalBtn(event);
      break;
  }
};

window.onkeydown = (event) => {
  getSpacialCode(event);
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
};
