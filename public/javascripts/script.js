var map;
var trip = [];
var current_day = 0;
var trip_length = 0; // in days
var used_markers = [];

// one day looks like this: 
// [{
//   hotels: [],
//   thingtodos: [],
//   restaurants: []
// },{
//   hotels: [],
//   thingtodos: [],
//   restaurants: []
// }]

var clearView = function() {
  // clearing the list
  var i = item_types.length;
  while (i--) {
    $("#"+item_types[i]+"_list").html("");
  }
  
  // clear map-markers
  var i = used_markers.length;
  while (i--) {
    used_markers[i].setMap(null);
    // add marker to markerPool (talk about this later)
  }
};

var showDay = function(dayObj) {
  var i = item_types.length;
  var type;
  
  while (i--) {
    type = item_types[i]
    var typeList = dayObj[type+"s"];
    if (typeof typeList !== "undefined") {
      typeList.forEach(function(item) {
        showItemInPlan(type, item);
      });
    }
  }
};

var toggleToDay = function(day_id) {
  // this will involve clearing the list and clearing the map
  clearView();
  var dayObj = trip[day_id];
  showDay(dayObj);
  current_day = day_id;
};

var addNewDay = function() {
  trip.push({
    hotels: [],
    thingtodos: [],
    restaurants: []
  });

  trip_length++;
  // var display_day = current_day + 1;
  
  var new_day_internal_id = trip_length-1;
  var day_button_html = "<button type='button' class='btn btn-default' id='day_button_"+new_day_internal_id+"'>Day "+trip_length+"</button>";
  $('#day_buttons').append(day_button_html);
  
  $('#day_button_'+new_day_internal_id).click(function() {
    toggleToDay(new_day_internal_id);
  });
};

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
  used_markers.push(newmarker);
};


var showItemInPlan = function(type, item) {
  $("#"+type+"_list").append("<li>"+item.name+"</li>");
  addMarker(type, item);
};

var addItemToPlan = function(type, item) {
  trip[current_day][type+"s"].push(item);
};

var initType = function(type) {
  $("#"+type+"_add_button").click(function(event) {
    var selected_value = $("#"+type+"_select").val();
    var item_id = parseInt(selected_value.split("_")[1]);
    var item = window['all_'+type+'s'][item_id];
    if (typeof item !== "undefined") {
      addItemToPlan(type, item);
      showItemInPlan(type, item);
    }
  });
};

var initEvents = function() {
  var i = item_types.length;
  while (i--) {
    initType(item_types[i]);
  }
  
  $('#add_day_button').click(addNewDay);
  // $('#add_day_button').click(function() {
  //   addNewDay();
  // });
  
};












