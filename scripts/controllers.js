'use strict';

angular.module('vacayApp')

		// controller for scrolling to the top
		.controller('ScrollCtrl', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
			
			// scroll to the top
			$scope.backToTop = function () {
				$anchorScroll();
			};
			
		}])

		// controller for Navbar buttons
		.controller('NavbarBtnCtrl', function($scope, $state) {
	
			// set default active state to home
			$scope.active = $state.current.name;
	
			// function to set active state
			$scope.setActive = function(type) {
				$scope.active = type;
			};
	
			// function to determine active state
			$scope.isActive = function(type) {
				return type === $scope.active;
			};
	
		})

        .controller('budapestMapCtrl', ['$scope', 'budapestMarkerFactory', function ($scope, budapestMarkerFactory) {
			
			angular.extend($scope, {
				defaults: {
					tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					tileLayerOptions:{
						attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',	
					},
					scrollWheelZoom: true
				}, 
				markers: budapestMarkerFactory.getMarkers(),
				center: {
					lat: 47.49915,
					lng: 19.05586,
					zoom: 14
				},
				controls: {
					scale: true
				},
				geojson: {}
            });
            
      }])

    .controller('viennaMapCtrl', ['$scope', 'viennaMarkerFactory', function ($scope, viennaMarkerFactory) {

        angular.extend($scope, {
            defaults: {
                tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                tileLayerOptions:{
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',	
                },
                scrollWheelZoom: true
            }, 
            markers: viennaMarkerFactory.getMarkers(),
            center: {
                lat: 48.20483,
                lng: 16.37605,
                zoom: 14
            },
            controls: {
                scale: true
            },
            geojson: {}
        });

    }])

    .controller('pragueMapCtrl', ['$scope', '$http', 'pragueMarkerFactory', function ($scope, $http, pragueMarkerFactory) {
			
        angular.extend($scope, {
            defaults: {
                tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                tileLayerOptions:{
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',	
                },
                scrollWheelZoom: true
            }, 
            markers: pragueMarkerFactory.getMarkers(),
            center: {
                lat: 50.08419,
                lng: 14.40816,
                zoom: 13
            },
            controls: {
                scale: true
            },
            geojson: {}
        });
            
    }]);