//Referencia global de la aplicacion
var referenciaApp = angular.module("miAyudanteClient", ["ngRoute", "ngResource"]);

//Asegurarse de que el "/" sea el ultimo caracter en las URL
referenciaApp.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);

//Cambio dinamico del titulo de pagina usando ngRoute
referenciaApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

//Routing
referenciaApp.config(function($routeProvider){
	
	$routeProvider
		.when("/", {
			title: 'Home ::.',
			controller: "login_controller",
			templateUrl: "views/login/login.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});