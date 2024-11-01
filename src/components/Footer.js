// Imports
import { footerLinks } from '../data/FooterLinks';
import { footerLinkTemplate } from './FooterLink';

// Footer rendering
export const Footer = () => {
  const footerElement = document.createElement('footer');
  footerElement.id = 'footer';

  const rrssDiv = document.createElement('div');
  rrssDiv.className = 'rrss';

  const rrssUl = document.createElement('ul');

  footerLinks.forEach((link) => {
    const rrssLi = footerLinkTemplate(link.href, link.src, link.alt);
    rrssUl.appendChild(rrssLi);
  });

  rrssDiv.appendChild(rrssUl);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'copyright';

  const copyrightParagraph = document.createElement('p');
  copyrightParagraph.textContent = 'Copyright 2024 - JCBS';

  copyrightDiv.appendChild(copyrightParagraph);

  footerElement.append(rrssDiv, copyrightDiv);

  document.querySelector('#app').appendChild(footerElement);
};
