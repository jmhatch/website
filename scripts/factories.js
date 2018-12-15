'use strict';

angular.module('vacayApp')

	.factory('budapestMarkerFactory', function() {
	
		var markers = {

			hotelMarker: {
				lat:  47.50824,
				lng: 19.05943,
				message: "<span style='color: black'>Radisson Blu Beke</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-bed',
                    markerColor: 'red',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            parliamentMarker: {
				lat: 47.50726,
				lng: 19.04536,
				message: "<span style='color: black'>Hungarian Parliament Building</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            herosMarker: {
  				lat: 47.51477,
				lng: 19.0776,
				message: "<span style='color: black'>Hero's Square</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }             
            },
            budaMarker: {
           	    lat: 47.49611,
				lng: 19.03972,
				message: "<span style='color: black'>Royal Palace (Buda Castle)</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }        
            },
            matthiaMarker: { 
                lat: 47.50211,
				lng: 19.03412,
				message: "<span style='color: black'>Matthias Church</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }              
            },
            fishermansMarker: {
                lat: 47.50233,
				lng: 19.03493, 
				message: "<span style='color: black'>Fisherman's Bastion</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }             
            },
            stephensMarker: {
				lat: 47.50083,
				lng: 19.05389,
				message: "<span style='color: black'>St. Stephen's Basilica</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            greatMarketMarker: {
				lat: 47.48667,
				lng: 19.05889,
				message: "<span style='color: black'>Great Market Hall</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            goodSpiritMarker: {
				lat: 47.490904,
				lng: 19.056196,
				message: "<span style='color: black'>Good Spirit Bar</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            tastingTableMarker: {
				lat: 47.492448,
				lng: 19.065124,
				message: "<span style='color: black'>Tasting Table</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            bestiaMarker: {
				lat: 47.500950,
				lng: 19.052982,
				message: "<span style='color: black'>Bestia</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-cutlery',
                    markerColor: 'green',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            costesDowntownMarker: {
				lat: 47.500994,
				lng: 19.048496,
				message: "<span style='color: black'>Costes Downtown</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-cutlery',
                    markerColor: 'green',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            boutiqBarMarker: {
				lat: 47.499568,
				lng: 19.056045,
				message: "<span style='color: black'>Boutiq Bar</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            printaMarker: {
				lat: 47.497527,
				lng: 19.058795,
				message: "<span style='color: black'>Printa</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-shopping-bag',
                    markerColor: 'yellow',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            elesztoMarker: {
				lat: 47.483580,
				lng: 19.072633,
				message: "<span style='color: black'>Eleszto</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-beer',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            kandalloMarker: {
				lat: 47.501617,
				lng: 19.065829,
				message: "<span style='color: black'>Kandallo</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-beer',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            lehutoMarker: {
				lat: 47.498893,
				lng: 19.059766,
				message: "<span style='color: black'>Lehuto</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-beer',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            hopaholicMarker: {
				lat: 47.499899,
				lng: 19.065657,
				message: "<span style='color: black'>Hopaholic</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-beer',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
			} 
             
		};

    var mapmarkerfac = {};
	
		mapmarkerfac.getMarkers = function () {
			return markers;
		};
	
		return mapmarkerfac;
	
	})

// R code to find center
// lat = c(47.50824, 47.50726, 47.51477, 47.49611, 47.50211, 47.50233, 47.50083, 47.48667, 47.490904, 47.492448, 47.500950, 47.500994, 47.499568, 47.497527, 47.483580, 47.501617, 47.498893, 47.499899) 
// lon = c(19.05943, 19.04536, 19.0776, 19.03972, 19.03412, 19.03493, 19.05389, 19.05889, 19.056196, 19.065124, 19.052982, 19.048496, 19.056045, 19.058795, 19.072633, 19.065829, 19.059766, 19.065657)

	.factory('viennaMarkerFactory', function() {
	
		var markers = {

			hotelMarker: {
				lat: 48.191575, 
				lng: 16.354585,
				message: "<span style='color: black'>Austria Trend Hotel Ananas</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-bed',
                    markerColor: 'red',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            hofburgMarker: {
				lat: 48.207658,
				lng: 16.366054,
				message: "<span style='color: black'>Hofburg Palace</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            votiveMarker: {
				lat: 48.2154012,
				lng: 16.3590821,
				message: "<span style='color: black'>Votive Church</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
             parkMarker: {
				lat: 48.216720,
				lng: 16.398055,
				message: "<span style='color: black'>Prater Amusement Park</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},           
            cityMarker: {
				lat: 48.21071,
				lng: 16.3576,
				message: "<span style='color: black'>City Hall</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            belvedereMarker: {
				lat: 48.191560,
				lng: 16.380942,
				message: "<span style='color: black'>Belvedere Palace</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},           
            stephensMarker: {
				lat: 48.20847,
				lng: 16.37265,
				message: "<span style='color: black'>St. Stephen's Cathedral</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},                 
            operaMarker: {
                lat: 48.203021,
                lng: 16.369075,
                message: "<span style='color: black'>the Opera House</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },
            theresiaMarker: {
                lat: 48.204456,
                lng: 16.360718,
                message: "<span style='color: black'>the monument of Empress Maria Theresia</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },
            karmelitermarktMarker: {
                lat: 48.217386,
                lng: 16.376333,
                message: "<span style='color: black'>Karmelitermarkt</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-cutlery',
                    markerColor: 'green',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },           
            supersenseMarker: {
                lat: 48.216917,
                lng: 16.389245,
                message: "<span style='color: black'>Supersense</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-coffee',
                    markerColor: 'orange-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },
            lugeckMarker: {
                lat: 48.209709,
                lng: 16.375168,
                message: "<span style='color: black'>Lugeck</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-cutlery',
                    markerColor: 'green',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },
            labstelleMarker: {
                lat: 48.209639,
                lng: 16.374695,
                message: "<span style='color: black'>Labstelle</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-cutlery',
                    markerColor: 'green',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },             
            dinosMarker: {
                lat: 48.213343,
                lng: 16.370653,
                message: "<span style='color: black'>Dino's American Bar</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },    
            robertoMarker: {
                lat: 48.210035,
                lng: 16.372526,
                message: "<span style='color: black'>Roberto American Bar</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },    
            kleinodMarker: {
                lat: 48.207449,
                lng: 16.373719,
                message: "<span style='color: black'>Kleinod</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-glass',
                    markerColor: 'purple',
                    shape: 'circle',
                    prefix: 'fa'
                }
            },
            centralMarker: {
                lat: 48.148096,
                lng: 16.441693,
                message: "<span style='color: black'>Central Cemetery</span>",
                draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
            }  
             
		};

		var mapmarkerfac = {};
	
		mapmarkerfac.getMarkers = function () {
			return markers;
		};
	
		return mapmarkerfac;
	
	})

// R code to find center
// lat = c(48.191575, 48.207658, 48.2154012, 48.216720, 48.21071, 48.191560, 48.20847, 48.203021, 48.204456, 48.217386, 48.216917, 48.209709, 48.209639, 48.213343, 48.210035, 48.207449, 48.148096) 
// lon = c(16.354585, 16.366054, 16.3590821, 16.398055, 16.3576, 16.380942, 16.37265, 16.369075, 16.360718, 16.376333, 16.389245, 16.375168, 16.374695, 16.370653, 16.372526, 16.373719, 16.441693)

	.factory('pragueMarkerFactory', function() {
	
		var markers = {
            
			hotelMarker: {
				lat: 50.068157, 
				lng: 14.418280,
				message: "<span style='color: black'>Park Inn Prague</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-bed',
                    markerColor: 'red',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
			vitusMarker: {
				lat: 50.090892, 
				lng: 14.400513,
				message: "<span style='color: black'>St. Vitus Cathedral</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			},
            charlesMarker: {
				lat: 50.086477,
				lng: 14.411440,
				message: "<span style='color: black'>Charles Bridge</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			}, 
            georgesMarker: {
				lat: 50.091233,
				lng: 14.402393,
				message: "<span style='color: black'>St. George's Basilica</span>",
				draggable: false,
				icon: {    
					type: 'extraMarker',
                    icon: 'fa-university',
                    markerColor: 'blue-dark',
                    shape: 'circle',
                    prefix: 'fa'
                }
			}      
            
		};

		var mapmarkerfac = {};
	
		mapmarkerfac.getMarkers = function () {
			return markers;
		};
	
		return mapmarkerfac;
	
	});

// R code to find center
// lat = c(50.068157, 50.090892, 50.086477, 50.091233) 
// lon = c(14.418280, 14.400513, 14.411440, 14.402393)