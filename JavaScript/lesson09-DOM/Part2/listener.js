// Event Listeners

listener();

function listener() {
  const button2 = document.querySelector('#btn2');
  button2.addEventListener('click', () => {
    alert('I love javascript')
  });

  const box3 = document.querySelector('.box-3');
  box3.addEventListener('mouseover', () => {
    box3.style.backgroundColor = 'green';
  });
  box3.addEventListener('mouseout', () => {
    box3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  });
}
