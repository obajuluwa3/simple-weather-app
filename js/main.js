console.log("We're running js!!!")

var Geo={};
const error = () => {
	alert("That's weird! We couldn't find you!");
}

const success = (position) => {
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
}
else {
	alert('Geolocation is not supported');
}

const key = "840e73603810f91a";
const Weather = "http://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

$.ajax({
	url : Weather,
	dataType : "json",
	success : (data) => {
		console.log(Weather)
	}
});
