// import './index.html';
import './sass/main.scss';

const data = {
  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'],
  ru: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Control', 'AltGraph', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'],
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
  backColons.classList.add('key_short');
  backspace.classList.add('key_middle');
};

window.onload = () => {
  generateLayout();
  generateKeys('en');
  setKeySize();
};
