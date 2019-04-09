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
};
// method to show the properties
LocationConstructor.prototype.showProperties = function() {
  return "You went to " + this.location+ ", the landmarks are " + this.landmarks + ". You went there during the " + this.season + " in " + this.year + " with this people : " + this.companions + ".Your rate for your experience in "+ this.location +  " from 0 to 5 for this city is  : " + this.rating + " !";;
};

// User Interface logic
var listPlace = new ListPlace();

function displayPlaceDetails(listPlaceToDisplay) {
  var placesList = $("ol#olFirstList");
  var htmlForPlaceInfo = "";
  listPlaceToDisplay.listofplaces.forEach(function(places) {
    htmlForPlaceInfo += "<li id=" + places.id  + ">" +"Name of the place :  "+ places.location + "  Landmarks:   " + places.landmarks + "  Season:  " + places.season + "  Year:  " + places.year + "  Rate:  " + places.rating + "  Your Companions:  " + places.companions + "</li>";
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
    var userPlace= userPlace.slice(0,1).toUpperCase() + userPlace.slice(1);
    var newLocation = new LocationConstructor(userPlace, landmarks, season, year, rating, people);

    listPlace.addPlace(newLocation);
    displayPlaceDetails(listPlace);

    $("#finalResult").text("Click here ===>      "+newLocation.showLocation()+ "      <=== to see the details of the place.");
    $("#output").show();

      jQuery(document).ready(function() {
      jQuery("#finalResult").click(function() {
        $("#finalResultProperties").text("Click here ===>      "+newLocation.showProperties()+ "     <===to hide the details of the place.");
        jQuery("#finalResultProperties").click(function() {
          $("#finalResultProperties").text(" ");
          function myFunction() {
            location.reload();
            }
        });
      });
    });
  });
});
