var ways_by_car = [],
	ways_by_foot = [],
	map;
function init_map() {
	var addr_end = 'Лужнецкая набережная, 2/4 строение 37, Москва, Россия',
		image_end = 'img/logo_cq.svg',
		image_start = 'img/logo_metro.svg',
		center_end, center_start,
		geocoder = new google.maps.Geocoder(),
        latlngbounds = new google.maps.LatLngBounds(),
		directionsService = new google.maps.DirectionsService;
		map_style = 
			[{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#475a8b"
				}]
			}, {
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#6782ba"
				}]
			}, {
				"featureType": "water",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#3b4360"
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#3b4360"
				}]
			}, {
				"featureType": "landscape.man_made",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#475a8b"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#6e89c0"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#3b4360"
				}]
			}, {
				"featureType": "poi",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"color": "#3b4360"
				}]
			}, {
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#ccddfb"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#ccddfb"
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"color": "#3b4360"
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#b0c5eb"
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#2f3756"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#2f3756"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}];
		lineSymbol = {
			path: google.maps.SymbolPath.CIRCLE,
			strokeOpacity: 1,
			scale: 3,
			fillColor: '#ffffff',
			fillOpacity: .7,
			strokeWeight: 0,
		},
		myMapOptions = {
			zoom: 15,
			scrollwheel: false,
			disableDefaultUI: true,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			center: {lat: 55.715581, lng: 37.572087},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles:map_style
		},
		map = new google.maps.Map(document.getElementById("gmap_canvas"), myMapOptions),

		// маркер квестов
		marker_end = new google.maps.Marker({
			position: {lat: 55.715581, lng: 37.572087},
			map: map,
			title: addr_end,
			icon: image_end
		}),
		// маркер метро
		marker_start = new google.maps.Marker({
			position: {lat: 55.711497, lng: 37.561201},
			map: map,
			title: 'Метро',
			icon: image_start
		});

	// путь на машине 1
	ways_by_car.push(
		new google.maps.Polyline({path:
			[
				new google.maps.LatLng(55.721940, 37.555088),
				new google.maps.LatLng(55.718991, 37.564915),
				new google.maps.LatLng(55.717746, 37.568456),
				new google.maps.LatLng(55.717609, 37.568640),
				new google.maps.LatLng(55.717446, 37.568533),
				new google.maps.LatLng(55.716542, 37.567296),
				new google.maps.LatLng(55.716563, 37.566026),
				new google.maps.LatLng(55.715459, 37.564191),
				new google.maps.LatLng(55.712643, 37.569189),
				new google.maps.LatLng(55.712477, 37.569411),
				new google.maps.LatLng(55.712823, 37.571184),
				new google.maps.LatLng(55.713026, 37.571882),
				// new google.maps.LatLng(55.713198, 37.572524),
				// new google.maps.LatLng(55.713217, 37.572532),
				// new google.maps.LatLng(55.713219, 37.572522),
			],
			strokeColor: "#ffffff", strokeOpacity: 1.0, strokeWeight: 4,
		})
	);

	// путь на машине 2
	ways_by_car.push(
		new google.maps.Polyline({path:
			[
				new google.maps.LatLng(55.716642, 37.579451),
				new google.maps.LatLng(55.714705, 37.575916),
				new google.maps.LatLng(55.714541, 37.575704),
				new google.maps.LatLng(55.714297, 37.575598),
				new google.maps.LatLng(55.713685, 37.573937),
				// new google.maps.LatLng(55.713217, 37.572532),
				new google.maps.LatLng(55.713352, 37.572957),
			],
			strokeColor: "#ffffff", strokeOpacity: 1.0, strokeWeight: 4
		})
	);
	// путь на машине 3
	ways_by_car.push(
		new google.maps.Polyline({path:
			[
				new google.maps.LatLng(55.714153, 37.577268),
				new google.maps.LatLng(55.714914, 37.576190),
				new google.maps.LatLng(55.715586, 37.575041),
				new google.maps.LatLng(55.715751, 37.574926),
				new google.maps.LatLng(55.716492, 37.573495),
				new google.maps.LatLng(55.717334, 37.571453),
				new google.maps.LatLng(55.719165, 37.565559),
				new google.maps.LatLng(55.719160, 37.565329),
				new google.maps.LatLng(55.719016, 37.565056),
				new google.maps.LatLng(55.718812, 37.564941),
				new google.maps.LatLng(55.718618, 37.565082),
				new google.maps.LatLng(55.718538, 37.565356),
				new google.maps.LatLng(55.717697, 37.568246),
				new google.maps.LatLng(55.717606, 37.568411),
				new google.maps.LatLng(55.717479, 37.568437),
				new google.maps.LatLng(55.717374, 37.568415),
			],
			strokeColor: "#78c3e7", strokeOpacity: 1.0, strokeWeight: 4
		})
	);
	// Проезд по территории 
	ways_by_car.push(
		new google.maps.Polyline({
			path:[
				new google.maps.LatLng(55.713220, 37.572491),
				new google.maps.LatLng(55.713365, 37.572341),
				new google.maps.LatLng(55.713561, 37.572081),
				new google.maps.LatLng(55.713845, 37.571561),
				new google.maps.LatLng(55.714015, 37.571291),
				new google.maps.LatLng(55.714126, 37.571176),
				new google.maps.LatLng(55.714220, 37.571187),
				new google.maps.LatLng(55.714328, 37.571280),
				new google.maps.LatLng(55.714404, 37.571390),
				new google.maps.LatLng(55.714588, 37.571691),
				new google.maps.LatLng(55.714706, 37.571847),
				new google.maps.LatLng(55.714763, 37.571880),
				new google.maps.LatLng(55.714829, 37.571832),
				new google.maps.LatLng(55.715053, 37.571526),
				new google.maps.LatLng(55.715537, 37.572309),
			],
			strokeColor: "#ffffff", strokeOpacity: 1.0, strokeWeight: 4
		})
	);
	// соединим стрелки
	ways_by_car.push(
		new google.maps.Polyline({
			path:[
				new google.maps.LatLng(55.713327, 37.572883),
				new google.maps.LatLng(55.713053, 37.571975),
			],
			strokeColor: "#ffffff", strokeOpacity: 1.0, strokeWeight: 4
		})
	)
	// Create the polyline and add the symbol via the 'icons' property.
	ways_by_car.push(
		new google.maps.Polyline({
			path: [
				new google.maps.LatLng(55.713352, 37.572957),
				// new google.maps.LatLng(55.713219, 37.572522), // стрелки впритык друг к другу
				new google.maps.LatLng(55.713327, 37.572883),
			],
			icons: [{
				icon: {
						path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
					},
				offset: '100%'
			}],
			strokeColor: "#ffffff",
			strokeWeight: 4
		})
	);
	// Create the polyline and add the symbol via the 'icons' property.
	ways_by_car.push(
		new google.maps.Polyline({
			path: [
				new google.maps.LatLng(55.713026, 37.571882),
				// new google.maps.LatLng(55.713219, 37.572522),// стрелки впритык друг к другу
				new google.maps.LatLng(55.713053, 37.571975),
				
			],
			icons: [{
				icon: {
						path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
					},
				offset: '100%'
			}],
			strokeColor: "#ffffff",
			strokeWeight: 4
		})
	);

	// Проход по территории пешком
	ways_by_foot.push(
		new google.maps.Polyline({path:
			[
				new google.maps.LatLng(55.713220, 37.572491),
				new google.maps.LatLng(55.713365, 37.572341),
				new google.maps.LatLng(55.713561, 37.572081),
				new google.maps.LatLng(55.713845, 37.571561),
				new google.maps.LatLng(55.714015, 37.571291),
				new google.maps.LatLng(55.714126, 37.571176),
				new google.maps.LatLng(55.714220, 37.571187),
				new google.maps.LatLng(55.714328, 37.571280),
				new google.maps.LatLng(55.714404, 37.571390),
				new google.maps.LatLng(55.714588, 37.571691),
				new google.maps.LatLng(55.714706, 37.571847),
				new google.maps.LatLng(55.714763, 37.571880),
				new google.maps.LatLng(55.714829, 37.571832),
				new google.maps.LatLng(55.715053, 37.571526),
				new google.maps.LatLng(55.715537, 37.572309),
			],
			strokeOpacity: 0,
			icons: [{
				icon: lineSymbol,
				offset: '0',
				repeat: '10px'
			}],
		})
	);

	ways_by_foot.push(
		new google.maps.Polyline({path:
			[
				new google.maps.LatLng(55.711490000000005,37.561330000000005),
				new google.maps.LatLng(55.71190000000001,37.56179),
				new google.maps.LatLng(55.711420000000004,37.56273),
				new google.maps.LatLng(55.711580000000005,37.564220000000006),
				new google.maps.LatLng(55.71172000000001,37.56524),
				new google.maps.LatLng(55.71190000000001,37.56633),
				new google.maps.LatLng(55.71204,37.56709),
				new google.maps.LatLng(55.71202,37.56725),
				new google.maps.LatLng(55.71206,37.567420000000006),
				new google.maps.LatLng(55.712210000000006,37.56815),
				new google.maps.LatLng(55.71269,37.57054),
				new google.maps.LatLng(55.712820, 37.571188),
				new google.maps.LatLng(55.713220, 37.572491),
			],
			strokeOpacity: 0,
			icons: [{
				icon: lineSymbol,
				offset: '0',
				repeat: '10px'
			}],
		})
	);

	/* Маршрут пешком */
	$.each(ways_by_foot, function(i, ways){
		ways.setMap(map);
	});
}

google.maps.event.addDomListener(window, "load", init_map);

$(function() {

	var a_walk = $('a[href="#walk"]'),
		a_bycar = $('a[href="#bycar"]');

	/* Переключаем маршруты на карте */
	a_walk.on('shown.bs.tab', function (e) {
		
		$.each(ways_by_car, function(i, ways){
			ways.setMap(null);
		});
		$.each(ways_by_foot, function(i, ways){
			ways.setMap(map);
		});
	});
	/* Переключаем маршруты на карте */
	a_bycar.on('shown.bs.tab', function (e) {
		
		$.each(ways_by_foot, function(i, ways){
			ways.setMap(null);
		});

		$.each(ways_by_car, function(i, ways){
			ways.setMap(map);
		});

	});


	if ($('body').hasClass('video')) {

		function set_video_bgr() {
			if (document.body.clientWidth > 1023) {
				var w = $('.jumbotron').outerWidth();
				var $video = $('<div id="video_container" style="display:none"><video autoplay="autoplay" id="bgr_video" loop="loop"></video></div>')
						.prependTo('body.video');

				video = document.getElementById('bgr_video');
				video.addEventListener('loadeddata', function() {
					$('.jumbotron').css('backgroud', 'none');

					var jh = parseInt($('.jumbotron').outerHeight()) +  parseInt($('.row-black').css("margin-top"));
					
					$video
						.css({
							width:'100%',
							height:jh,
							overflow:'hidden',
							position:'absolute',
						})
						.fadeIn(2000)
						.find('video')
						.css({
							width: '100%',
							height: 'auto',
							display: 'block',
						});
				}, false);
				
				video.src = '/img/fog_bg3.mp4';
				video.load();
			}
		}

		set_video_bgr();
	}
});