// create an interactive closet to showcase how a capsule wardobe functions
//make all closet items visible
//when user clicks "Let's begin" button, all closet items displayedd in the center categorize themselves into respective item tpes on the left hand side
//another button unhides, reveal one styling, hides, and the next styling button appears
//loop desired 



$(document).ready(function(){
  
$("#canDo").click(function(){
         $("#container").append(this);
            $(this).removeClass("moveLeft");
            console.log(this);
        
        });

var imgIndex = 0;
  (function(){
    setInterval(function(){
    $(".slide").eq(imgIndex).addClass("moveLeft")
    if (imgIndex < $(".slide").length-1) {
      imgIndex++;
    }
    else {
      $(".slide").removeClass('moveLeft');
      imgIndex = 0;
    };
    console.log(imgIndex)
    console.log("done");
  },3000)
})();
// setInterval(function(){
// $("#container").eq(0).toggleClass("moveLeft")
// console.log("done");

// },3000);

});

function initMap() {

  var rosie = {
    info: '<strong>Rosie\'s Place in Boston</strong><br>\
        889 Harrison Ave <br>Boston, MA 02118<br>\
          <a href="https://goo.gl/maps/ZQG6KhQtku22">Get Directions</a>',
    lat: 41.976816,
    long: -71.1469568
  };

  var boomerangs = {
    info: '<strong>Boomerangs in Cambridge</strong><br>\
          563 Massachusetts Ave <br> Cambridge, MA 02139<br>\
          <a href="https://www.google.com/maps/@42.4346346,-71.067605,15z">Get Directions</a>',
    lat: 42.364847,
    long: -71.102083
  };

  var dress = {
    info: '<strong>Dress for Success in Boston</strong><br>\r\
          989 Commonwealth Avenue<br> Boston, MA 02215<br>\
          <a href="https://goo.gl/maps/esMtyJXHLEK2">Get Directions</a>',
    lat: 42.3521807,
    long: -71.1906589
  };

  var locations = [
      [rosie.info, rosie.lat, rosie.long, 0],
      [boomerangs.info, boomerangs.lat, boomerangs.long, 1],
      [dress.info, dress.lat, dress.long, 2],
    ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: new google.maps.LatLng(42.3521807, -71.1906589),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

function displayOutfit(x,y,z){
    var shirt = "images/shirt" + x +".jpg";
    var pants = "images/pants" + y +".jpg";
    var shoes = "images/shoes" + z +".jpg";
  
    document.getElementById("capsuleShirt").src = shirt;
    document.getElementById("capsulePants").src = pants;
    document.getElementById("capsuleShoes").src = shoes;    
  }