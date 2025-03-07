var app = angular.module('RetailInventoryApp', []);

app.controller('MainController', function($scope, $http) {
    $scope.products = [];

    $scope.getProducts = function() {
        $http.get('http://localhost:5000/api/products/')
            .then(function(response) {
                $scope.products = response.data;
            }, function(error) {
                console.error('Error fetching products:', error);
            });
    };
});
