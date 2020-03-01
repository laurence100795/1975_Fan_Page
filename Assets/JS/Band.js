window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("Scroller").className = "TopScroller TaketoTop";
  } else {
    document.getElementById("Scroller").className = "TopScroller";
  }
}

function TakeToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}