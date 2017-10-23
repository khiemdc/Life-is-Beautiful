
// // var weatherQuery = "http://api.openweathermap.org/data/2.5/weather?q="+usersearch+"&units=imperial&appid=6aec4391886be38edb554739debf8733";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=newyork&units=imperial&appid=6aec4391886be38edb554739debf8733";

// $.ajax({
// 	url: queryURL,
// 	method: "POST"
// })
// .done(function(response) {
// 	console.log(queryURL);
	
// 	console.log(response);
// 	$(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").html("Wind Speed: " + response.wind.speed);
//   //  $(".humidity").html("Humidity: " + response.main.humidity);
//     $(".temp").html("Temperature (F) " + response.main.temp);
// });

// $("submit").click(function(event){

// 	console.log($("#form").val())
// 	// usersearch = $("#thecity").val() 
//   // action goes here!!
// });


<script>
        $(document).ready(function() {
            var city;
           $('#newyork').click(function(){
                city = "Newyork";
                localStorage.setItem('city', city);
                citysearch(city);
            }); 

           $('#california').click(function(){
                city = "California";
                localStorage.setItem('city', city);
                citysearch(city);
            }); 

           $('#florida').click(function(){
                city = "Florida";
                localStorage.setItem('city', city);
                citysearch(city);
            }); 

           $('#Chicago').click(function(){
                city = "Chicago";
                localStorage.setItem('city', city);
                citysearch(city);
            }); 

           $('#Washington,DC').click(function(){
                city = "WashingtonDC";
                localStorage.setItem('city', city);
                citysearch(city);
            }); 

           function citysearch(city){
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=6aec4391886be38edb554739debf8733";

            $.ajax({
                url: queryURL,
                method: "POST"
            })
            .done(function(response) {
                console.log(queryURL);
                
                console.log(response);
                $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                $(".wind").html("Wind Speed: " + response.wind.speed);
              //  $(".humidity").html("Humidity: " + response.main.humidity);
                $(".temp").html("Temperature (F) " + response.main.temp);
            });

        }

        });
