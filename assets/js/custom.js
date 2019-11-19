$( document ).ready(function() {
	
	getWeather();
});
	function getWeather(){
		
		 var input = document.getElementById('address');
		    var autocomplete = new google.maps.places.Autocomplete(input);
		    google.maps.event.addListener(autocomplete, 'place_changed', function () {
		        var  place = autocomplete.getPlace();
		        address = place.formatted_address;
		        lat = place.geometry.location.lat();
		        lon   = place.geometry.location.lng();
		        document.getElementById('lat').value = place.geometry.location.lat();
		        document.getElementById('lon').value = place.geometry.location.lng();
		        showPosition(lat,lon);
		    });		
		
    var $cityName = $('#cityName');
    var $weather = $('#weather');
    var $temp = $('#temp'); // C in defualt
    var $humidity = $('#humidity');
    var $windSpd = $('#windSpd');

    var cityName, weather, temp, humidity, windSpd;
    var isFtemp = true;

    function showPosition(position) {
       var lat =  $('#lat').val();
       var lon = $('#lon').val();
      if(lat =='' && lon ==''){
       var lat = position.coords.latitude;
       var lon = position.coords.longitude;
       }
      
        $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, function (a) {
        console.log(a);
        	cityName = a.name;
            weather = a.weather[0].main.toLowerCase();
            temp = a.main.temp;
            humidity = a.main.humidity;
            windSpd = a.wind.speed;

            $('.unknown').addClass("hide");

            // City Name
            if (cityName.length > 20) {
                $cityName.css("padding-top", "0");
            } else if (cityName.length > 10) {
                $cityName.css("padding-top", "0.2em");
            }
            $cityName.html(cityName);

            // Weather Icon
            switch (weather) {
                case "clear":
                    $('.sunny').removeClass("hide");
                    break;
                case "clouds":
                    $('.cloudy').removeClass("hide");
                    break;
                case "rain":
                    $('.rainy').removeClass("hide");
                    break;
                case "drizzle":
                    $('.sun-shower').removeClass("hide");
                    break;
                case "thunderstom":
                    $('.thunder-storm').removeClass("hide");
                    break;
                case "snow":
                    $('.flurries').removeClass("hide");
                    break;
                default:
                    $('.unknown').removeClass("hide");
                    break;
            }

            // Temperature 
            $temp.html(Math.round((temp * (9 / 5)) + 32) + "&#176;F");
            $temp.html(Math.round(temp) + "&#176;C");
            // Humidity (HM)
            $humidity.html(humidity);

            // Wind Speed
            $windSpd.html(Math.round(windSpd));
        });
    }

    $temp.on('click', function () {
        if(temp !== undefined) {
            if (isFtemp) {
                $temp.html(Math.round(temp) + "&#176;C");
                isFtemp = false;
            } else {
                $temp.html(Math.round((temp * (9 / 5)) + 32) + "&#176;F");
                isFtemp = true;
            }
        }
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
	}
