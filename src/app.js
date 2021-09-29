import menu from './js/menu.json';
import menuTpl from './templates/menutpl.hbs';
import Theme from './js/theme';
import refs from './js/refs';

const { menuEl, checkEl, body } = refs;

const menuCreatePages = addMenuMarkup(menu);

let theme = body.classList.add('light-theme');

defauldThemePages();

menuEl.insertAdjacentHTML('afterbegin', menuCreatePages);
checkEl.addEventListener('change', removePagesTheme);

function addMenuMarkup(menu) {
  return menu.map(menuTpl).join('');
}

function removePagesTheme(evt) {
  body.classList.contains('light-theme') ? onDarkPagesTheme() : onLightPagesTheme();
}

function onDarkPagesTheme() {
  body.classList.replace('light-theme', 'dark-theme');
  checkEl.checked = true;
  localStorage.setItem('theme', 'DARK');
}

function onLightPagesTheme() {
  body.classList.replace('dark-theme', 'light-theme');
  checkEl.checked = false;
  localStorage.removeItem('theme');
}

function defauldThemePages() {
  const themePagesDefault = localStorage.getItem('theme');
  if (themePagesDefault) {
    return onDarkPagesTheme();
  }
}
