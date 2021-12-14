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
      name: "Black Bear & Grizzly Bear",
      park: "Denali Preserve",
      location: [63.129887, -151.197418],
    },
    {
        name: "Florida Black Bear",
        park: "Everglades National Park",
        location: [25.286615, -80.898651],
    },
    {
      name: "American Black bear & Grizzly Bear",
      park: "Glacier Bay National Park and Preserve",
      location: [58.665806,	-136.900208]
    },
    {
      name: "Black Bear",
      park: "Yosemite National Park",
      location: [37.865101,	-119.53833]
    },
    {
      name: "Black Bear",
      park: "Yosemite National Park",
      location: [37.865101,	-119.53833]
    },
    {
      name: "Black Bear",
      park: "Yellowstone National Park",
      location: [44.423691,	-110.588516]
    },
    {
      name: "Grizzly Bear",
      park: "Glacier National Park",
      location: [48.7596128, -113.787022]
    },
    {
      name: "Grizzly & Black Bear",
      park: "Grand Teton National Park",
      location: [43.472554, -110.405435]
    },
    {
        name: "Grizzly & Black Bear",
        park: "Katmai National Park and Preserve",
        location: [43.472554, -110.405435]
    },
  ];
  


  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < BlackBears.length; i++) {
    var BlackBear = BlackBears[i];
    L.marker(BlackBear.location)
        .bindPopup("<h1>" + BlackBear.park + "</h1>" + "<h4>" + BlackBear.name +"</h4>"  )
        .addTo(myMap);
  }

var animalData = data;

button.on("click", renderTable);
form.on("submit", renderTable);

var inputAnimal = d3.select("#animal");
    
// Get the value property of the input element
var inputValue = inputAnimal.property("value");

var filteredData = animalData.filter((animal) => {

  var matchesAnimal = false;

  if (inputValue.length == '0' || animal.CommonNames.toLowerCase().includes(inputValue)) {
    matchesAnimal = true;
  }

  return matchesAnimal;

});


  for (var i = 0; i < chosenAnimal.length; i++) {
    var animal = chosenAnimal[i];
    L.marker(animal.location)
        .bindPopup("<h1>" + animal.park + "</h1>" + "<h4>" + animal.name +"</h4>"  )
        .addTo(myMap);
  }
 