// Imports

import { getNews } from '../components/News';
import { fetchNews } from './fetch';

// Search by Title or Site or User

export const searchByField = (event) => {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();

  const buttonSearch = event.target;
  const field = buttonSearch.id.replace('searchBy', '').toLowerCase();

  const param = `/get-news-by-field?search=${encodeURIComponent(
    searchTerm
  )}&field=${field}`;

  if (searchTerm) {
    getNews(param);
  } else {
    alert('Please enter a term to search');
  }
};

// Sort news by score, comments or time
export const sortNews = (event) => {
  const buttonSort = event.target;
  const sortBy = buttonSort.id.replace('sortBy', '').toLowerCase();

  const param = `/get-sorted-news?sortedBy=${encodeURIComponent(sortBy)}`;

  getNews(param);
};

// Clear search
export const clearSearch = () => {
  getNews('/get-all-news');
};

// Update the news
export const updateNews = async () => {
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  try {
    await runScrap();

    await getNews('/get-all-news');
  } catch (error) {
    console.error('Error updating news', error.message);
    mainDiv.innerHTML = 'Error al actualizar las noticias. Intenta nuevamente';
  }
};

// Scrap news & saved it
export const runScrap = async () => {
  const mainURL = import.meta.env.VITE_URL_FETCH;
  const param = '/scrap-news';

  console.log('search 61', `${mainURL}${param}`);

  try {
    const response = await fetch(`${mainURL}${param}`, { method: 'POST' });

    if (!response.ok) {
      throw new Error('Failed to run scrape script');
    }

    const result = await response.json();
    console.log(result.message);
    console.log(result.data);
  } catch (error) {
    console.error('Error scraping news', error.message, error);
  }
};
