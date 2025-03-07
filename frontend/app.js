// var app = angular.module('RetailInventoryApp', []);

// app.controller('MainController', function($scope, $http) {
//     $scope.products = [];

//     $scope.getProducts = function() {
//         $http.get('http://localhost:5000/api/products/')
//             .then(function(response) {
//                 $scope.products = response.data;
//             }, function(error) {
//                 console.error('Error fetching products:', error);
//             });
//     };
// });
var app = angular.module('RetailInventoryApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');  // ✅ This removes extra encoding
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

