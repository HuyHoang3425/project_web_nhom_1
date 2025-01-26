function myMap_toronto() {
  var mapOptions = {
    center: new google.maps.LatLng(43.6650306, -79.3622703),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  var map = new google.maps.Map(
    document.getElementById("toronto_map"),
    mapOptions
  );
}

function myMap_california() {
  var mapOptions = {
    center: new google.maps.LatLng(38.625548, -118.088529),
    zoom: 10,
    mapTypeId: "roadmap",
  };
  var map = new google.maps.Map(
    document.getElementById("california_map"),
    mapOptions
  );
}

function myMap_newyork() {
  var mapOptions = {
    center: new google.maps.LatLng(40.712784, -74.005941),
    zoom: 10,
    mapTypeId: "satellite",
  };
  var map = new google.maps.Map(
    document.getElementById("newyork_map"),
    mapOptions
  );
}
