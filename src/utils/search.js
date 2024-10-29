// Imports
import { createLoaders } from '../components/Loader';
import { getNews } from '../components/News';

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
    searchInput.value = '';
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

// Scrap news, saved it to the DB an then fetch it
export const updateNews = async () => {
  const mainURL = import.meta.env.VITE_URL_FETCH;
  const param = '/scrap-news';

  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  createLoaders();

  try {
    const response = await fetch(`${mainURL}${param}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to run scraper');
    }

    const result = await response.json();

    await getNews('/get-all-news');
  } catch (error) {
    console.error('Error scraping news', error.message, error);
  }
};
