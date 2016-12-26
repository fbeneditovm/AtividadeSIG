var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -2.531962,
      lng: -44.293368
    },
    zoom: 13
  });

  /*******************house*******************/
  var homeMarker = new google.maps.Marker({
    position: {
      lat: -2.493313,
      lng: -44.244536
    },
    map: map
  });

  infoBubble = new InfoBubble({
    maxWidth: 300
  });

  homeMarker.addListener('click', function() {
    if (!infoBubble.isOpen()) {
      infoBubble.open(map, homeMarker);
    }
  });

  infoBubble.addTab("Endereço", "Avenida Neiva Moreira, 400");
  infoBubble.addTab("Info Extra", "Não vou revelar torre e Ap.");

  /********************nca********************/
  var ncaMarker = new google.maps.Marker({
    position: {
      lat: -2.558784,
      lng: -44.307457
    },
    map: map
  });

  var ncaInfoWindow = new google.maps.InfoWindow({
    content: "NCA"
  });

  ncaMarker.addListener('click', function() {
    ncaInfoWindow.open(ncaMarker.get('map'), ncaMarker);
  });

  /********************ufma*******************/
  var ufmaMarker = new google.maps.Marker({
    position: {
      lat: -2.552111,
      lng: -44.307331
    },
    map: map
  });

  var ufmaInfoWindow = new google.maps.InfoWindow({
    content: "UFMA"
  });

  ufmaMarker.addListener('click', function() {
    ufmaInfoWindow.open(ufmaMarker.get('map'), ufmaMarker);
  });

}