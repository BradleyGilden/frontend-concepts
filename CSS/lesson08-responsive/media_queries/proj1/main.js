#!/usr/bin/env node

/**
 * <module docstring>
 * Author: Bradley Dillion Gilden
 * Date: 30-09-2023
 */

window.onresize = screen;
window.onload = screen;

function screen() {
  let myWidth = window.innerWidth;
  document.querySelector('#size').textContent = `Width: ${myWidth}`;
}
