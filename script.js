//Code by dominik

const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const navlink = document.querySelector('.nav-link');
const footer = document.querySelector('footer');
const content = document.querySelector('#contentContainer');
const logo = document.querySelector('#logo');

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  navbar.classList.add('dark'); 
  navlink.classList.add('dark');
  footer.classList.add('dark');
  content.classList.add('dark');
  //document.getElementById("button").innerHTML = "Enable Light Mode";
  document.getElementById("logo").src="images/logoWhite.png";
} else {
  body.classList.remove('dark');
  navbar.classList.remove('dark');
  navlink.classList.remove('dark');
  footer.classList.remove('dark');
  content.classList.remove('dark');
  //document.getElementById("button").innerHTML = "Enable Night Mode";
  document.getElementById("logo").src="images/logoBlack.png";
  localStorage.setItem("theme", "light");
}

function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    navbar.classList.remove('dark');
    navlink.classList.remove('dark');
    footer.classList.remove('dark');
    content.classList.remove('dark');
    //document.getElementById("button").innerHTML = "Enable Night Mode";
    document.getElementById("logo").src="images/logoBlack.png";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add('dark');
    navbar.classList.add('dark'); 
    navlink.classList.add('dark');
    footer.classList.add('dark');
    content.classList.add('dark');
    //document.getElementById("button").innerHTML = "Enable Light Mode";
    document.getElementById("logo").src="images/logoWhite.png";
    localStorage.setItem("theme", "dark");
    
  }
}

document.querySelector('#nightMode').addEventListener('click', toggleDark);