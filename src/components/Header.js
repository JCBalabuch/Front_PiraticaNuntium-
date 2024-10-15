export const Header = () => {
  const headerElement = document.createElement('header');
  headerElement.id = 'header';

  const namePage = document.createElement('h1');
  namePage.textContent = 'Pirática Nuntium';

  const divImage = document.createElement('div');

  const logoImage = document.createElement('img');
  logoImage.src = './assets/PiraticaNuntiumWOBG.png';
  logoImage.alt = 'Pirática nuntium logo';

  divImage.appendChild(logoImage);

  headerElement.append(namePage, divImage);
  document.querySelector('#app').appendChild(headerElement);
};
