export const news = [];

const mainURL = import.meta.env.VITE_URL_FETCH;

export const fetchNews = (search) => {
  const searchURL = `${mainURL}${search}`;

  fetch(searchURL).then((response) =>
    response.json().then((data) => {
      news = data;
      return news;
    })
  );
};
