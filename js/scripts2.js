// Business Logic for ListPlace
function ListPlace() {
  this.listofplaces= [],
  this.currentId = 0
}

ListPlace.prototype.addPlace = function(newplace) {
  newplace.id = this.assignId();
  this.listofplaces.push(newplace);
}

ListPlace.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


// Business Logic for LocationConstructor
function LocationConstructor (location, landmarks, season, year, rating, companions) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.year = year;
  this.rating = rating;
  this.companions= companions;
}

// method to show just the location
LocationConstructor.prototype.showLocation = function() {
  return this.location;
}
// method to show the properties
LocationConstructor.prototype.showProperties = function() {
  return "You went to " + this.location+ ", the landmarks are " + this.landmarks + ". You went there during the " + this.season + " in " + this.year + " with this people : " + this.companions + ".Your rate for your experience in "+ this.location +  " from 0 to 5 for this city is  : " + this.rating + " !";;
};

// User Interface logic
var listPlace = new ListPlace();

function displayPlaceDetails(listPlaceToDisplay) {
  var placesList = $("ul#ulFirstList");
  var htmlForPlaceInfo = "";
  listPlaceToDisplay.listofplaces.forEach(function(places) {
    htmlForPlaceInfo += "<li id=" + places.id  + ">" + places.location + " " + places.landmarks + " " + places.season + " " + places.year + " " + places.rating + " " + places.companions + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userPlace= $("input#userPlace").val();
    var landmarks= $("input#landmarks").val().split(',');
    var season= $("select#season").val();
    var year= $("input#year").val();
    var people= $("input#people").val().split(',');
    var rating= $("input:radio[name=rating]:checked").val();
    var newLocation = new LocationConstructor(userPlace, landmarks, season, year, rating, people);

    listPlace.addPlace(newLocation);
    displayPlaceDetails(listPlace);

  $("#finalResult").text(newLocation.showLocation());
  $("#output").show();

  jQuery(document).ready(function() {
  jQuery("#finalResult").click(function() {
      $("#finalResultProperties").text(newLocation.showProperties());


      });
    });
  });
});
