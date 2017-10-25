console.log("We're running js!!!");

var Geo={};
const error = () => {
	alert("That's weird! We couldn't find you!");
}

const success = (position) => {
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
	const Weather = "http://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
	$.ajax({
		url : Weather,
		dataType : "jsonp",
		success : (data) => {
			console.log(data)
			const location = data['location']['city'];
			const temp = data['current_observation']['temp_f'];
			const img = data['current_observation']['icon_url'];
			const desc = data['current_observation']['weather'];
			const wind = data['current_observation']['wind_string'];
			//setting the spans to the correct parameters
			$('#location').html(location);
			$('#temp').html(temp);
			$('#desc').html(desc);
			$('#wind').html(wind);
			//filling the image src attribute with the image url
			$('#img').attr('src', img);
		}
	});
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
}
else {
	alert('Geolocation is not supported');
}

const key = "840e73603810f91a";
