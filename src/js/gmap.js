		var map;
function initMap() {
					map = new google.maps.Map(document.getElementById('map'), {
						center: {lat: 51.508226, lng: -0.126364},  
						zoom: 12,
						
					});
					var marker = new google.maps.Marker({
			          position: {lat: 51.508226, lng: -0.126364},
			          map: map
      				  });

				}