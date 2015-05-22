
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initialize() {

  var lat=37.3342107;
  var lon=-121.883743;
  var lat1= getParameterByName('lat1');
  var lon1= getParameterByName('lon1');

  var lat2= getParameterByName('lat2');
  var lon2= getParameterByName('lon2');

  var lat3= getParameterByName('lat3');
  var lon3= getParameterByName('lon3');

  var lat4= getParameterByName('lat4');
  var lon4= getParameterByName('lon4');
	
/*?lat1=37.3358823&lon1=-121.8799531&lat2=37.3358898&lon2=-121.879923&lat3=37.3358712&lon3=-121.87995321&lat4=37.33588121&lon4=-121.8795311*/	
  /* position Amsterdam */
  var latlng = new google.maps.LatLng(37.3336549,-121.8818698);
  var latlng1 = new google.maps.LatLng(37.3377792,-121.8825177);
  var latlng2 = new google.maps.LatLng(37.3284335,-121.8811647);
  var latlng3 = new google.maps.LatLng(37.3333519,-121.8842236);
  var latlng4 = new google.maps.LatLng(37.336562,-121.892548);


  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 15
  };
  var image = 'http://i.stack.imgur.com/KOh5X.png';

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 4,
            strokeWeight: 2,
            fillColor: 'blue',
	    fillOpacity: 1,
            strokeColor: 'blue'
          },
    animation: google.maps.Animation.BOUNCE
  });
 
  var marker1 = new google.maps.Marker({
    position: latlng1,
    url: '/',
    animation: google.maps.Animation.DROP
  });

   var marker2 = new google.maps.Marker({
    position: latlng2,
    url: '/',
    animation: google.maps.Animation.DROP
  });
 
  var marker3 = new google.maps.Marker({
    position: latlng3,
    url: '/',
    animation: google.maps.Animation.DROP
  });
 
  var marker4 = new google.maps.Marker({
    position: latlng4,
    url: '/',
    animation: google.maps.Animation.DROP
  });
 
 
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
function attachSecretMessage(marker, msg) {
  var infowindow = new google.maps.InfoWindow({
    content: msg
  });
    infowindow.open(marker1.get('map'), marker);
  google.maps.event.addListener(map, 'mouseover', function() {
    infowindow.open(marker1.get('map'), marker);
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(marker.get('map'), marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

  marker.setMap(map);
  marker.setTitle("You are Here");
  attachSecretMessage(marker,"You are here");
  attachSecretMessage(marker1,"7th Street Garage");
  attachSecretMessage(marker2,"Second and San Carlos Street Garage");
  attachSecretMessage(marker3,"4th Street Garage");
  attachSecretMessage(marker4,"Victory Parking");


  marker1.setMap(map);
  marker1.setTitle("7th Street Garage");
  marker2.setMap(map);
  marker2.setTitle("Second and San Carlos Street Garage");
  marker3.setMap(map);
  marker3.setTitle("4th Street Garage");
  marker4.setMap(map);
  marker4.setTitle("Victory Parking");
};
/* end google maps -----------------------------------------------------*/
});
