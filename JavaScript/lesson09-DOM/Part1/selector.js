// DOM manipulation Selectors

import traverse from "./traverse.js";


main();
traverse();

function main() {
  //getElementById
  const title = document.getElementById('main-heading');
  title.style.color = 'rgb(90, 232, 19)';

  // getElementsByClassName and do multiple assignment
  const listItems = document.getElementsByClassName('list-items');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontStyle = 'italic';
  }

  // append elements to the list

  const ul = document.querySelector('.container ul');
  // creates list item
  const li = document.createElement('li');
  // addes class styling to list item
  li.classList.add('list-items');
  // assigns text content, unlike innerText, it does not consider css styles and is faster to load
  li.textContent = "Maze Runner";
  // adds list item inside unordered list item
  ul.append(li);
  // removes itself from the dom
  li.remove()
}

// adding and removing styles on id's:

// li.setAttribute('id', 'main-heading'); // this allows to set list item with main-heading class styles
// li.getAttribute('id') - returns attribute as text, in this case 'main-heading'
// li.removeAttribute('id') - this removes attribute id

// adding and removing styles on class's:

// li.classList.add('list-items');
// li.className()
// li.classlist.remove('list-items');
