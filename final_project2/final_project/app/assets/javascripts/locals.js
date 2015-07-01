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
  function recMap(map) {
  	console.log("hello recMap");
  	initialize(map);

  };

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

 
  var arrayLocalsString = $('#locals-collection').val();
  var arrayLocals = JSON.parse( arrayLocalsString );
  var currentLocals = 4;
  
  $(".button1").on("click",function() {
    var local0 = arrayLocals[currentLocals]
    var local1 = arrayLocals[currentLocals+1]
    var local2 = arrayLocals[currentLocals+2]
    var local3 = arrayLocals[currentLocals+3]
    //console.log("Local 0: ",local0, "Local 1: ",local1, "Local2: ", local2, "Local 3: ", local3);
    currentLocals += 4;
    //console.log("Local 4: ",local4, "Local 5 : ",local5, "Local 6 : ", local6, "Local 7 : ", local7);

    str1 = "";
    str2 = "";

    str1 += '  <img class="lupa" src="../ic_search_black_48dp.png"> Resultados filtrados...'
    str1 += '  <hr>'
    str1 += '  <img class="enana" id="imagenNueva0" src="'+local0.img_url+'">'
    str1 += '  <a href="/locals/'+local0.id+'">'+local0.name+'</a>'
    str1 += '  <img class="icono" src="celiaco.png">'
    str1 += '  <hr>'
    str1 += '  <img class="enana" id="imagenNueva1" src="'+local1.img_url+'" alt="Ca">'
    str1 += '  <a href="/locals/'+local1.id+'">'+local1.name+'</a>'
    str1 += '  <img class="icono" src="celiaco.png">'
    str1 += '  <img class="icono" src="zanahoria.png">'
    str1 += '  <img class="icono" src="vegano.png">'
    str1 += '  <hr>'

    str2 += '  <hr>'
    str2 += '  <img class="enana" id="imagenNueva0" src="'+local2.img_url+'">'
    str2 += '  <a href="/locals/'+local2.id+'">'+local2.name+'</a>'
    str2 += '  <img class="icono" src="celiaco.png">'
    str2 += '  <img class="icono" src="zanahoria.png">'
    str2 += '  <img class="icono" src="vegano.png">'
    str2 += '  <hr>'
    str2 += '  <img class="enana" id="imagenNueva1" src="'+local3.img_url+'" alt="Ca">'
    str2 += '  <a href="/locals/'+local3.id+'">'+local3.name+'</a>'
    str2 += '  <img class="icono" src="celiaco.png">'
    str2 += '  <hr>'


    $('.restaurante1').empty().append(str1);

    $('.restaurante2').empty().append(str2);

  });


  $(".button2").on("click",function() {
    currentLocals -= 4;
    var local0 = arrayLocals[currentLocals-4]
    var local1 = arrayLocals[currentLocals-3]
    var local2 = arrayLocals[currentLocals-2]
    var local3 = arrayLocals[currentLocals-1]
    //console.log("Local 0: ",local0, "Local 1: ",local1, "Local2: ", local2, "Local 3: ", local3);
    
    //console.log("Local 4: ",local4, "Local 5 : ",local5, "Local 6 : ", local6, "Local 7 : ", local7);

    str1 = "";
    str2 = "";

    str1 += '  <img class="lupa" src="../ic_search_black_48dp.png"> Resultados filtrados...'
    str1 += '  <hr>'
    str1 += '  <img class="enana" id="imagenNueva0" src="'+local0.img_url+'">'
    str1 += '  <a href="/locals/'+local0.id+'">'+local0.name+'</a>'
    str1 += '  <img class="icono" src="celiaco.png">'
    str1 += '  <hr>'
    str1 += '  <img class="enana" id="imagenNueva1" src="'+local1.img_url+'" alt="Ca">'
    str1 += '  <a href="/locals/'+local1.id+'">'+local1.name+'</a>'
    str1 += '  <img class="icono" src="celiaco.png">'
    str1 += '  <img class="icono" src="zanahoria.png">'
    str1 += '  <img class="icono" src="vegano.png">'
    str1 += '  <hr>'

    str2 += '  <hr>'
    str2 += '  <img class="enana" id="imagenNueva0" src="'+local2.img_url+'">'
    str2 += '  <a href="/locals/'+local2.id+'">'+local2.name+'</a>'
    str2 += '  <img class="icono" src="celiaco.png">'
    str2 += '  <img class="icono" src="zanahoria.png">'
    str2 += '  <img class="icono" src="vegano.png">'
    str2 += '  <hr>'
    str2 += '  <img class="enana" id="imagenNueva1" src="'+local3.img_url+'" alt="Ca">'
    str2 += '  <a href="/locals/'+local3.id+'">'+local3.name+'</a>'
    str2 += '  <img class="icono" src="celiaco.png">'
    str2 += '  <hr>'


    $('.restaurante1').empty().append(str1);

    $('.restaurante2').empty().append(str2);

  });

  
});








