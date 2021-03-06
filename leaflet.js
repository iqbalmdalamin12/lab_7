var mymap = L.map('mapid').setView([38.9860, -76.9451], 15);

		L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=dBEFDEUowEMZFsV2U83h', {
		    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
		    maxZoom: 18,
		    id: 'mapbox/streets-v11',
		    tileSize: 512,
		    zoomOffset: -1,
		    accessToken: 'your.mapbox.access.token'
		    
		}).addTo(mymap);

		
		
		var popupContent = "McKeldin Library";
		var popupOptions =
		    {
		      
		      'className' : 'custom-popup' // classname for another popup
		    }
			    
		    var marker = L.marker([38.9860, -76.9451]).addTo(mymap)
		    	.bindPopup(popupContent, popupOptions);
 

		var geoLocation = [{
			"type": "Feature",
			"properties": {
			    "name": "FOOD INSPECTION",
			    "popupContent": "This is where the Rockies play!"
			},
			"geometry": {
			    "type": "Point",
			    "coordinates":
			    [-76.958574,38.966903]
			    
			     
			    
			}
		},{
			"type": "Feature",
			"properties": {
			    "name": "FOOD INSPECTION",
			    "popupContent": "sds"
			},
			"geometry": {
			    "type": "Point",
			    "coordinates":
			    [-76.872392,38.685163]
			    
			     
			    
			}
		},
		{
			"type": "Feature",
			"properties": {
			    "name": "FOOD INSPECTION",
			    "popupContent": "sds"
			},
			"geometry": {
			    "type": "Point",
			    "coordinates":
			    [-76.868849,38.931458]
			    
			     
			    
			}
		}
		];

		var markerOption = {
		    radius: 5,
		    fillColor: "red",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.8,
		    backgroundColor:"red"
		};

		L.geoJSON(geoLocation, {
		    pointToLayer: function (feature, latlng) {
		        return L.marker(latlng, markerOption);
		    }
		}).addTo(mymap);