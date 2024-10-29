// URL to access server
const mainURL = import.meta.env.VITE_URL_FETCH;

// Fetch function
export const fetchNews = async (search) => {
  const searchURL = `${mainURL}${search}`;

  console.log(searchURL);

  try {
    const response = await fetch(searchURL);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handling HTTP Errors
    if (error instanceof Error && error.name === 'HTTPError') {
      console.error('HTTP Error:', error.message);
      throw error;
    } else {
      // Handling other errors
      console.error('Error fetching news', error);
      throw new Error('An error occurred while fetching news');
    }
    console.error('Error fetching news', error);
    throw error;
  }
};
