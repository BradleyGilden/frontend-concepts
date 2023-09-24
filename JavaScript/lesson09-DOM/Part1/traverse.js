// Traversing the DOM

export default function traverse() {
  // Parent Node traversal
  const ul = document.querySelector('ul');

  console.log(ul.parentNode); //parentNode and parentElement are almost exactly the same
  // biggest difference is that perentElement only returns html elements and parentNode returns
  // any parent no matter the type
  console.log(ul.parentElement);


  /*
  console.log(ul.childNodes); --> these are all nodes
  console.log(ul.firstChild);
  console.log(ul.lastChild);  
  */


  console.log(ul.children) // these return just children elements
  console.log(ul.firstElementChild)
  console.log(ul.lastElementChild)
}
