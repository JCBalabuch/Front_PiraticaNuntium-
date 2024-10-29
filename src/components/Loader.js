// Loaders per page
const LOADERS_PER_PAGE = 10;

// Loaders layout
export const createLoaders = () => {
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerHTML = '';

  for (let i = 0; i < LOADERS_PER_PAGE; i++) {
    const loadersDiv = document.createElement('div');
    loadersDiv.classList = 'loader-div';

    mainDiv.append(loadersDiv);
  }
};
