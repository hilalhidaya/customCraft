window.onscroll = function() {stickyNavbar()};

function stickyNavbar() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset >= 400) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


const API_KEY = "fcb65153a7674120b954ad114b80187d";
const URL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=fcb65153a7674120b954ad114b80187d"
