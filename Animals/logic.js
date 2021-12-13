// Create a map object
var myMap = L.map("map", {
    center: [49, -97],
    zoom: 3.6
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Country data
  var BlackBears = [
    {
      name: "Black Bear",
      park: "Denali Preserve",
      location: [63.129887, -151.197418],
    },
    {
        name: "Florida Black Bear",
        park: "Everglades National Park",
        location: [25.286615, -80.898651],
    },
    {
      name: "American black bear",
      park: "Glacier Bay National Park and Preserve",
      location: [58.665806,	-136.900208]
    },
  ];
  
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < BlackBears.length; i++) {
    var BlackBears = BlackBears[i];
    L.marker(BlackBears.location[i])
        .bindPopup("<h1>" + BlackBears.park[i] + "</h1>" + "<h4>" + BlackBears.name[i] +"</h4>"  )
        .addTo(myMap);
  }