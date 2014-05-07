var map;
function initialize_gmaps() {
  var myLatlng = new google.maps.LatLng(40.705786,-74.007672);

  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // To add the marker to the map, use the 'map' property
  // var marker = new google.maps.Marker({position: myLatlng,map: map,title:"Hello World!"});
}

var item_types = ['hotel', 'restaurant', 'thingtodo'];

var c = function(x) {
  console.log(x);
};

var addMarker = function (type, item) {
  var lat = item.place[0].location[0];
  var lon = item.place[0].location[1];
  var myLatLng = new google.maps.LatLng(lat,lon);
  var newmarker = new google.maps.Marker({position: myLatLng, title: item.name});
  newmarker.setMap(map);
};

var initType = function(type) {
  $("#"+type+"_add_button").click(function(event) {
    var selected_value = $("#"+type+"_select").val();
    var item_id = parseInt(selected_value.split("_")[1]);
    var item = window['all_'+type+'s'][item_id];
    if (typeof item !== "undefined") {
      $("#"+type+"_list").append("<li>"+item.name+"</li>");
      addMarker(type, item);
    }
  });
};

var initEvents = function() {
  var i = item_types.length;
  while (i--) {
    initType(item_types[i]);
  }
};












