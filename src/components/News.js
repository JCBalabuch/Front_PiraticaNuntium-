// Imports
import { fetchNews } from '../utils/fetch';
import { displayErrorMessage } from './displayErrorMsg';
import { createLoaders } from './Loader';
import { NEWS_PER_PAGE, renderNews } from './renderNews';
import { renderPagination } from './renderPagination';

// Function to fetch and render news
export const getNews = async (search, currentPage = 1) => {
  // Get the news div
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  // Display the loader
  createLoaders();

  try {
    // Fetch news
    const news = await fetchNews(search);

    // Clean mainDiv
    mainDiv.innerHTML = '';

    // Calculate number of pages
    const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const displayedNews = news.slice(
      (currentPage - 1) * NEWS_PER_PAGE,
      currentPage * NEWS_PER_PAGE
    );

    // Render news items
    renderNews(displayedNews, currentPage, mainDiv);

    // Render pagination
    renderPagination(totalPages, currentPage, mainDiv);
  } catch (error) {
    // Clean mainDiv
    mainDiv.innerHTML = '';

    // Clean paginationDiv
    const paginationDiv = document.getElementById('paginationDiv');
    paginationDiv.innerHTML = '';

    // Error handling
    const errorMessage = error.message || 'Error fetching news';
    displayErrorMessage(errorMessage, mainDiv);
    console.error('Error fetching news', error);
  }
};
