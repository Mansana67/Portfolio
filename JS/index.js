/*BUTTON INDEX.HTML*/
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
      // Remove 'active' class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
    });
});

/*BUTTON PORTFOLIO.HTML*/
const buttonsPort = document.querySelectorAll('.btnport');
buttonsPort.forEach(button => {
    button.addEventListener('click', event => {
      // Remove 'active' class from all buttons
      buttonsPort.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
    });
});

const btnNav = document.querySelectorAll('.btnNav');
btnNav.forEach(button => {
  button.addEventListener('click', event => {
    // Remove 'active' class from all buttons
    btnNav.forEach(btn => btn.classList.remove('activeNav'));
    // Add 'active' class to the clicked button
    button.classList.add('activeNav');
  });
});

/*2D and 3D CONTENT*/




