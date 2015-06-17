$(document).ready (function() {
getMap();
function getMap(){

	url = document.URL;
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function(data){initialize(data)},
		error: function(){ console.log('Error')} 
	});
}
/*function recMap(map) {
	console.log("hello recMap");
	initialize(map);

};
*/
function initialize(map) {
	if (map){
            var mapCanvas = document.getElementById('map-canvas'); 
            var latitude = map.latitude;
            var longitude = map.longitude;
            var myLatLng = new google.maps.LatLng(latitude,longitude);
            var mapOptions = {
              center: new google.maps.LatLng(latitude, longitude),
              zoom: 18,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)

            var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!',
            
      
            });
          }
          google.maps.event.addDomListener(window, 'load', initialize);
    }
  
  
  /*$(".pequena").click(function(){
  $("#uno").fadeIn('slow');
  
  });
  */
});

var NumImg = 0

event timming(1000) {
  $ (".pequena").html( "<img src='" + NumImg + '">' );

if( NumImg >= 5 )


  NumImg = 0;

};

