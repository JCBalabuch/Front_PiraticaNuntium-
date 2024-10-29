import { calculateTimeDifference } from '../utils/timeDifference';

// News per page
export const NEWS_PER_PAGE = 10;

// Function to render news
export const renderNews = (newsData, currentPage, container) => {
  // Render the news
  for (let i = 0; i < newsData.length; i++) {
    const newsItem = newsData[i];

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
    container.append(newsDiv);
  }
};
