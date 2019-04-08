//Constructor for the collection of places I've been
function Places() {
this.places = [];
}
// Constructor for individual place
function LocationConstructor (location, landmarks, season, year, rating, companions) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.year = year;
  this.rating = rating;
  this.companions= companions;
}

// method to add a place to the collection
Places.prototype.addLocation = function(location) {
  this.places.push(location);
};

var placesVar = new Places();


// User logic

$(document).ready(function() {
$("form#formOne").submit(function(event) {
  event.preventDefault();

  var userPlace= $("input#userPlace").val();
  var landmarks= $("input#landmarks").val().split(',');
  var season= $("select#season").val();
  var year= $("input#year").val();
  var people= $("input#people").val().split(',');
  var rating= $("input:radio[name=rating]:checked").val();

  var newLocation = new LocationConstructor (userPlace, landmarks, season, year, rating, people); placesVar.addLocation(newLocation)


  var placesList;
    placesVar.places.forEach(function(loc) {
    placesList = loc.location ;
  });
    var propertiesList= "You went to " + userPlace + ", the landmarks are " + landmarks + ". You went there during the " + season + " in " + year + " with this people : " + people + ".Your rate for your experience in "+userPlace +  " from 0 to 5 for this city is  : " + rating + " !";

  $("#finalResult").text(placesList);
  $("#output").show();

  jQuery(document).ready(function() {
  jQuery("#finalResult").click(function() {
      $("#finalResultProperties").text(propertiesList);

  });
});
});
});
