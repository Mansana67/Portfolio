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

/*REVEAL CONTENT*/
let isRevealed = false;

function toggleContent(){
  const content = document.getElementById('content');
  if (isRevealed) {
    // Hide content
    content.classList.remove('showdiv');
    content.classList.add('hiddendiv');
    isRevealed = false;
    } else {
        // Show content on top
        content.classList.remove('hiddendiv');
        content.classList.add('showdiv');
        isRevealed = true;
    }
}




