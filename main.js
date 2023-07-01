const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('focused'));

    link.classList.add('focused');
    
  });
});

function openSide(){
  document.getElementById("sideBar").style.width = "150px"
  document.getElementById("navL").style.zIndex = "0"
}

function closeSide(){
  document.getElementById("sideBar").style.width = "0px"
  document.getElementById("navL").style.zIndex = "100"
}

