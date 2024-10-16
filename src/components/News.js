import { fetchNews } from '../utils/fetch';
import { calculateTimeDifference } from '../utils/timeDifference';

export const getNews = async (search) => {
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  const news = await fetchNews(search);

  for (let i = 0; i < 30; i++) {
    const newsItem = news[i];

    const newsDiv = document.createElement('div');
    newsDiv.classList = 'news-div';

    const newsTitle = document.createElement('a');
    newsTitle.textContent = newsItem.title;
    newsTitle.href = newsItem.link;

    const userNews = document.createElement('p');
    userNews.textContent = newsItem.user;

    const siteNews = document.createElement('p');
    siteNews.textContent = newsItem.site;

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

    newsDiv.append(
      newsTitle,
      userNews,
      siteNews,
      dateNews,
      scoreNews,
      commentsNews
    );
    mainDiv.append(newsDiv);
  }

  console.log(news);
};
