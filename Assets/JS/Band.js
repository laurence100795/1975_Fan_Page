window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
    document.getElementById("Scroller").className = "TopScroller TaketoTop";
  } else {
    document.getElementById("Scroller").className = "TopScroller";
  }
}

function TakeToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 53.321160,
            lng: -2.237700
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTRVXYZ"
    var locations = [
        { lat: 53.321160, lng: -2.237700 }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    })
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}