window.onscroll = function() {stickyNavbar()};

function stickyNavbar() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset >= 400) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


