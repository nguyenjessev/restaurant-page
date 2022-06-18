const loadMenu = () => {
  const content = document.getElementById('content');

  let header = document.createElement('h1');
  header.textContent = 'Our Menu';
  content.appendChild(header);

  header = document.createElement('h2');
  header.textContent = "Rolls";
  content.appendChild(header);
  
  let menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');
  
  let menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">California Roll</div>\
  <div class="menu-item-description">Kani, mayo, \
  avocado, cucumber, sesame seeds, seaweed.</div>\
  <div class="menu-item-price">6.25</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">Alaskan Roll</div>\
  <div class="menu-item-description">Smoked salmon, \
  avocado, cucumber, seaweed, smelt egg.</div>\
  <div class="menu-item-price">8.95</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">Tempura Roll</div>\
  <div class="menu-item-description">Tempura shrimp, \
  cucumber, mayo, seaweed, smelt egg.</div>\
  <div class="menu-item-price">8.50</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">New York Roll</div>\
  <div class="menu-item-description">Cooked shrimp, \
  avocado, cucumber, seaweed, sesame seeds.</div>\
  <div class="menu-item-price">6.25</div>'
  menuGrid.appendChild(menuItem);
  
  content.appendChild(menuGrid);
  
  header = document.createElement('h2');
  header.textContent = "Special Rolls";
  content.appendChild(header);
  
  menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">Tokyo Roll</div>\
  <div class="menu-item-description">Shrimp tempura, \
  imitation crab, spicy mayo, wrapped in seaweed, topped with avocado.</div>\
  <div class="menu-item-price">14.95</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">Mexican Roll</div>\
  <div class="menu-item-description">White tuna, \
  jalapeno, cilantro, avocado, wrapped in seaweed, sesame seeds.</div>\
  <div class="menu-item-price">8.95</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">Bonsai Roll</div>\
  <div class="menu-item-description">Imitation crab, \
  asparagus tempura, spicy sauce, wrapped in seaweed, topped with red snapper, \
  teriyaki sauce.</div>\
  <div class="menu-item-price">12.75</div>'
  menuGrid.appendChild(menuItem);
  
  menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.innerHTML = '<div class="menu-item-name">White Lightning Roll</div>\
  <div class="menu-item-description">Fried tuna mixed with imitation crab in \
  Texas sauce, fried shrimp and lightly seared super white tuna on top with \
  teriyaki sauce.</div>\
  <div class="menu-item-price">14.95</div>'
  menuGrid.appendChild(menuItem);

  content.appendChild(menuGrid);
}

export default loadMenu; 
