import './styles/main.scss';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { Footer } from './components/Footer';
import { getNews } from './components/News';

Header();
MainPage();
Footer();

getNews('/get-all-news');
