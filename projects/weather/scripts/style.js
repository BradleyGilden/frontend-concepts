#!/usr/bin/env node

/**
 * helper module for website layout
 * Author: Bradley Dillion Gilden
 * Date: 07-10-2023
 */

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
  if (def) {
    links[0].classList.add('visited');
  }
})
