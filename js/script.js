window.onscroll = function () { stickyNavbar() };

function stickyNavbar() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY >= 400) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


const API_KEY = "fcb65153a7674120b954ad114b80187d";
const url = "https://newsapi.org/v2/everything?q= bitcoin"