export const Button = (title, id, action, parent) => {
  const button = document.createElement('button');
  button.textContent = title;
  button.id = id;
  button.className = 'pn-button';
  button.addEventListener('click', action);
  parent.append(button);
};
