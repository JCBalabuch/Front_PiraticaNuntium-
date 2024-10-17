import { Button } from './Button';

export const MainPage = () => {
  const mainSection = document.createElement('section');
  mainSection.className = 'main-section';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons-div';

  Button('Title', '', buttonsDiv);
  Button('Site', '', buttonsDiv);
  Button('Score', '', buttonsDiv);
  Button('User', '', buttonsDiv);
  Button('Time', '', buttonsDiv);
  Button('Comments', '', buttonsDiv);
  Button('Update News', '', buttonsDiv);

  const mainDiv = document.createElement('div');
  mainDiv.id = 'mainDiv';
  mainDiv.className = 'main-div';

  const paginationDiv = document.createElement('div');
  paginationDiv.id = 'paginationDiv';
  paginationDiv.className = 'pagination-div';

  mainSection.append(buttonsDiv, mainDiv, paginationDiv);
  document.querySelector('#app').appendChild(mainSection);
};
