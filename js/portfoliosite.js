// active link on current page function

$(document).ready(function() {
    $('.nav-link[href="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

// click anywhere to close the mobile menu

$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
});

// return to the top

// Go To Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("topBtn").classList.add('show');
    } else {
    document.getElementById("topBtn").classList.remove('show');
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// make external links to open in a new tab
$("document").ready(function() {
  $("a[href^='http://']").attr("target", "_blank");
  $("a[href^='https://']").attr("target", "_blank");
});