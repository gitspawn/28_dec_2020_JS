import menuTempalate from './templates/menu.hbs';
import menuData from './js/menu-data';
import refs from './js/refs';
import './css/styles.scss'



let markup = menuTempalate(menuData);

refs.root.innerHTML = markup