geocoder = new google.maps.Geocoder();

function getCoordinates(address, callback){
   var coordinates;
   geocoder.geocode({address: address}, function(results, status){
       coords_obj = results[0].geometry.location;
       coordinates = [coords_obj.A,coords_obj.F];
       callback(coordinates);
   });
};

google.maps.visualRefresh = true;
var map;

function initialize() {  

   var direction = $('.direction').text();

   getCoordinates(direction, function(coords){
       var mapOptions = {
           zoom: 16,
           center: {lat: coords[0], lng: coords[1]},
           mapTypeId: google.maps.MapTypeId.ROADMAP,
       };

       var pos = new google.maps.LatLng(coords[0], coords[1]);

       map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        
       var marker = new google.maps.Marker({
             position: pos,
             map: map,
             title:"Esto es un marcador",
             animation: google.maps.Animation.DROP
       });

       function createInfoWindow(text){
         var infowindow = new google.maps.InfoWindow({
           content: text
         });
         return infowindow;
       }

       var title = $('.name').text();

       var info = createInfoWindow(title);
       google.maps.event.addListener(marker, 'click', function(){
           info.open(map,marker);
       });
       });
};

google.maps.event.addDomListener(window, 'load', initialize);

   //hasta aquí, es para convertir la DIRECCIÓN en una longitud y latitud, y mostrarlas en el mapa
