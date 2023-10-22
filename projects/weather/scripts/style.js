#!/usr/bin/env node

/**
 * helper module for website layout
 * Author: Bradley Dillion Gilden
 * Date: 07-10-2023
 */

// executes every time the page is loaded
window.addEventListener('load', () => {
  let def = true;
  let links = document.querySelectorAll('.selector');
  for (let link of links) {
    if (link.href === window.location.href) {
      link.classList.add('visited');
      def = false
    } else {
      link.classList.remove('visited');
    }
  }
  // default option if no page is visited
  if (def) {
    links[0].classList.add('visited');
  }
})

// shows the navigation drop-down menu
function navClick () {
  let nav = document.querySelector('.nav');
  let navbutton = document.querySelector('.navbutton');

  navbutton.addEventListener('click', () => {
    nav.classList.toggle('clicked');
  })
}

navClick();
// const themeToggle = () => {

// }
