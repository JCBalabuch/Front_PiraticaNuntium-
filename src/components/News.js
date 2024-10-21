// Imports
import { fetchNews } from '../utils/fetch';
import { calculateTimeDifference } from '../utils/timeDifference';

// News per page
const NEWS_PER_PAGE = 10;

// Function to fetch and render news
export const getNews = async (search, currentPage = 1) => {
  // Get the news div
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  // Fetch news
  const news = await fetchNews(search);

  // Calculate number of pages
  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

  currentPage = Math.max(1, Math.min(currentPage, totalPages));

  const displayedNews = news.slice(
    (currentPage - 1) * NEWS_PER_PAGE,
    currentPage * NEWS_PER_PAGE
  );

  // Render the news
  for (let i = 0; i < displayedNews.length; i++) {
    const newsItem = displayedNews[i];

    const newsDiv = document.createElement('div');
    newsDiv.classList = 'news-div';

    const titleDiv = document.createElement('div');
    titleDiv.classList = 'title-div';

    const numberNews = document.createElement('p');
    numberNews.className = 'number-news';
    numberNews.textContent = `${(currentPage - 1) * NEWS_PER_PAGE + i + 1}.-`;

    const newsTitle = document.createElement('a');
    newsTitle.className = 'news-title';
    newsTitle.textContent = newsItem.title;
    newsTitle.href = newsItem.link;
    newsTitle.target = '_blank';

    const miscDiv = document.createElement('div');
    miscDiv.classList = 'misc-div';

    const userNews = document.createElement('a');
    userNews.textContent = `by ${newsItem.user}`;
    userNews.href = newsItem.userlink;
    userNews.target = '_blank';

    const siteNews = document.createElement('a');
    siteNews.textContent = newsItem.site;
    siteNews.href = newsItem.sitelink;
    siteNews.target = '_blank';

    const dateNews = document.createElement('p');
    dateNews.textContent = calculateTimeDifference(newsItem.time);

    const scoreNews = document.createElement('p');
    scoreNews.textContent = `${newsItem.score} points`;

    const commentsNews = document.createElement('p');

    if (newsItem.comments === 'discuss') {
      commentsNews.textContent = newsItem.comments;
    } else {
      commentsNews.textContent = `${newsItem.comments} comments`;
    }

    miscDiv.append(userNews, siteNews, dateNews, scoreNews, commentsNews);
    titleDiv.append(numberNews, newsTitle);
    newsDiv.append(titleDiv, miscDiv);
    mainDiv.append(newsDiv);
  }

  // News pagination
  if (totalPages > 1) {
    const paginationDiv = document.getElementById('paginationDiv');
    paginationDiv.innerHTML = '';

    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(totalPages, currentPage + 5);

    if (startPage <= 1) {
      endPage = Math.min(totalPages, 10);
    } else if (endPage >= totalPages) {
      startPage = Math.max(1, totalPages - 9);
    }

    for (let page = startPage; page <= endPage; page++) {
      const pageNumberButton = document.createElement('button');
      pageNumberButton.textContent = page;
      pageNumberButton.classList.add(page === currentPage ? 'active' : null);
      pageNumberButton.addEventListener('click', () => getNews(search, page));
      paginationDiv.append(pageNumberButton);
    }
  }
};
