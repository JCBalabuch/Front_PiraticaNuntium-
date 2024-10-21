// URL to access server
const mainURL = import.meta.env.VITE_URL_FETCH;

// Fetch function
export const fetchNews = async (search) => {
  const searchURL = `${mainURL}${search}`;

  console.log(searchURL);

  try {
    const response = await fetch(searchURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
};
