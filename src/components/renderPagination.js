export const renderPagination = (totalPages, currentPage, container) => {
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
