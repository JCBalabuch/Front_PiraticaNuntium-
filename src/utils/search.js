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

// Scrap news
export const updateNews = async () => {
  const param = '/scrap-news';

  //   try {
  //     const response = await fetchNews(param);

  //     if (!response.ok) {
  //       throw new Error('Failed to scrape news');
  //     }

  //     const result = await response.json();
  //     console.log(result.message);
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error('Error scraping news', error.message);
  //   }
  getNews(param);
};
