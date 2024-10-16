import { Button } from './Button';

export const MainPage = () => {
  const mainSection = document.createElement('section');
  mainSection.className = 'main-section';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttonsDiv';

  Button('Title', '', buttonsDiv);
  Button('Site', '', buttonsDiv);
  Button('Score', '', buttonsDiv);
  Button('User', '', buttonsDiv);
  Button('Time', '', buttonsDiv);
  Button('Comments', '', buttonsDiv);

  const mainDiv = document.createElement('div');
  mainDiv.id = 'mainDiv';
  mainDiv.className = 'mainDiv';

  // const p = document.createElement('p');
  // p.textContent = 'I want to know if this work';

  // mainDiv.appendChild(p);

  mainSection.append(buttonsDiv, mainDiv);
  document.querySelector('#app').appendChild(mainSection);
};
