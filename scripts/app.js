angular.module('vacayApp', ['ui.router', 'ui.bootstrap', 'nemLogging', 'ui-leaflet'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl : 'views/header.html'
                },
				'content': {
					templateUrl : 'views/home.html'
				},
				'footer' : {
					templateUrl : 'views/footer.html'
				}
            }
        })
	
		.state('app.budapest', {
			url:'budapest',
			views: {
				'content@': {
					templateUrl: 'views/budapest.html'
				}
			}
		})
    
 		.state('app.vienna', {
			url:'vienna',
			views: {
				'content@': {
					templateUrl: 'views/vienna.html'
				}
			}
		})
    
        .state('app.prague', {
			url:'prague',
			views: {
				'content@': {
					templateUrl: 'views/prague.html'
				}
			}
		})
    
         .state('app.credits', {
			url:'credits',
			views: {
				'content@': {
					templateUrl: 'views/credits.html'
				}
			}
		});   
    
    $urlRouterProvider.otherwise('/');
	
});