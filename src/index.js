// import './index.html';
import './sass/main.scss';

const data = {
  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
};

const generateLayout = () => {
  const body = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'RSS витруальная клавиатура';

  const textArea = document.createElement('textarea');
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
  generateKeys('en');
  setKeySize();
  serArrowSvg();
};
