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
// var places = new Places();
//
// var myHoliday = new Place("Vancouver", ["Capilano Suspension Bridge", "Downtown"], "winter", 2019, 5,["my husband", "Jeremy", "Kevin", "Clement"]);
//
// places.addLocation(myHoliday);



//console.log(places)
var action;
var places = new Places();

$(document).ready(function() {

  $('#addNewPlace, #viewPlaces').click(function () {
     if (this.id === 'addNewPlace') {
       action = 'addNewPlace';
     }
     else if (this.id === 'viewPlaces') {
       action = 'viewPlaces';
     }
  });

  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var userPlace= $("input#userPlace").val();
    var landmarks= $("input#landmarks").val().split(',');
    var season= $("select#season").val();
    var year= $("input#year").val();
    var people= $("input#people").val().split(',');
    var rating= $("input:radio[name=rating]:checked").val();

    var newLocation = new LocationConstructor (userPlace, landmarks, season, year, rating, people);

    places.addLocation(newLocation);
    console.log(places);

    // if they click add another place, clear input form and redsiplay interval
    if (action === "addNewPlace") {
      ("form#userPlace").empty();
    } else {

    // if they click view places, hide input form and display list of places, each place
    // is a link and when they click on the link, it lists the properties
    // ("#formOne").hide();
    ("#output").show();
    ("#output").append("<ul></ul>")

    }
   //  function myFunction() {
   //   location.reload();
   // }


//    console.log(newPlace);

  });
});
