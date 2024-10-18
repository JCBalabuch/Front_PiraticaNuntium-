export const Input = (parent) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'search';
  input.placeholder = 'Title, site or user';
  input.id = 'searchInput';
  parent.append(input);
};
