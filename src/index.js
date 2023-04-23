// import './index.html';
import './sass/main.scss';

const generateTextArea = () => {
  const body = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const textArea = document.createElement('textarea');
  textArea.className = 'input input__container';

  body.append(wrapper);
  wrapper.append(textArea);
};

window.onload = () => {
  generateTextArea();
};
