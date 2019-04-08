//Constructor for the collection of places I've been
function Places() {
this.places = [];
}
// Constructor for individual place
function Place (location, landmarks, season, year, rating, companions) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.year = year;
  this.rating = rating;
  this.companions= companions;
}

// method to add a place to the collection
Places.prototype.addPlace = function(place) {
  this.places.push(place);
};
var places = new Places();

var myHoliday = new Place("Vancouver", ["Capilano Suspension Bridge", "Downtown"], "winter", 2019, 5,["my husband", "Jeremy", "Kevin", "Clement"]);

places.addPlace(myHoliday);



//console.log(places)

$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
//    var landmarks = [];
    var userPlace= $("input#userPlace").val();
    var landmarks= $("input#landmarks").val().split(',');
    var season= $("select#season").val();
    var year= $("input#year").val();
    var people= $("input#people").val().split(',');
    var rating= $("input:radio[name=rating]:checked").val();

    var newPlace = new Place (userPlace, landmarks, season, year, rating, people);
//    console.log(newPlace);
    places.addPlace(newPlace);
    console.log(places);
  });
});
