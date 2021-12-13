// Create a map object
var myMap = L.map("map", {
  center: [37, -95],
  zoom: 3.5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var markersLayer = new L.LayerGroup();

myMap.addLayer(markersLayer);

var controlSearch = new L.controlSearch({
  position:'topright',
  layer: markersLayer,
  initial: false,
  zoom: 12,
  marker: false
});

map.addControl( controlSearch);

for (var i = 0; i < animals.length; i++) {
  var title = animals[i].CommonNames,
      loc = [animals[i].latitude, animals[i].longitude]
  var marker = new L.Marker(new L.latlng(loc), {title: title} );
  marker.bindPopup('Name: '+ title, 'Park: '+ park,);
  markersLayer.addLayer(marker)
}


//connect to data
var animals = 'Resources/AnimalLocations.csv'

// Animal data

// var animals = [
//   {
//     animal_name: animalData.CommonNames,
//     park: animalData.Place_Name,
//     location: [animalData.Latitude, animalData.Longitude]
//   },
// ];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < animals.length; i++) {
//   var animals = animals[i];
//   L.marker(animals.location)
//     .bindPopup("<h1>" + animals.name + "</h1>" )
//     .addTo(myMap);
// }

pgClient.end();