import loadHome from './load_home.js'
import loadMenu from './load_menu.js'
import loadContact from './load_contact.js'

loadHome();

const content = document.getElementById('content');

const clearContent = () => {
  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

document.querySelector('[data-target="home"]').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.querySelector('[data-target="menu"]').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.querySelector('[data-target="contact"]').addEventListener('click', () => {
  clearContent();
  loadContact();
});
