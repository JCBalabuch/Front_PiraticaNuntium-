export const displayErrorMessage = (message, container) => {
  // Create & display error message
  const errorH2 = document.createElement('h2');
  errorH2.className = 'error-message';
  errorH2.textContent = message;
  container.append(errorH2);
};
