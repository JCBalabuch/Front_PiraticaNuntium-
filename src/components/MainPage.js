// Imports
import {
  clearSearch,
  searchByField,
  sortNews,
  updateNews,
} from '../utils/search';
import { Button } from './Button';
import { Input } from './Input';

// Drawing from the main page section
export const MainPage = () => {
  const mainSection = document.createElement('section');
  mainSection.className = 'main-section';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons-div';

  Input(buttonsDiv);
  Button('search by Title', 'searchByTitle', searchByField, buttonsDiv);
  Button('search by Site', 'searchBySite', searchByField, buttonsDiv);
  Button('search by User', 'searchByUser', searchByField, buttonsDiv);
  Button('sort by Score', 'sortByScore', sortNews, buttonsDiv);
  Button('sort by Time', 'sortByTime', sortNews, buttonsDiv);
  Button('sort by Comments', 'sortByComments', sortNews, buttonsDiv);
  Button('Clear search', 'clearSearch', clearSearch, buttonsDiv);
  Button('Update News', 'updateNews', updateNews, buttonsDiv);

  const mainDiv = document.createElement('div');
  mainDiv.id = 'mainDiv';
  mainDiv.className = 'main-div';

  const paginationDiv = document.createElement('div');
  paginationDiv.id = 'paginationDiv';
  paginationDiv.className = 'pagination-div';

  mainSection.append(buttonsDiv, mainDiv, paginationDiv);
  document.querySelector('#app').appendChild(mainSection);
};
