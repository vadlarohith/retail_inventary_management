app.controller('HomeController', function($scope) {
    $scope.message = "Welcome to the Retail Inventory System";
});

app.controller('LoginController', function($scope, $location) {
    $scope.username = '';
    $scope.password = '';
    
    $scope.login = function() {
        if ($scope.username === 'admin' && $scope.password === 'password') {
            localStorage.setItem('loggedInUser', $scope.username);
            $location.path('/dashboard');
        } else {
            alert('Invalid credentials! Try again.');
        }
    };
});

app.controller('DashboardController', function($scope, $location) {
    $scope.username = localStorage.getItem('loggedInUser');

    if (!$scope.username) {
        $location.path('/login');
    }

    $scope.logout = function() {
        localStorage.removeItem('loggedInUser');
        $location.path('/');
    };
});
// app.controller('HomeController', function($scope) {
//     $scope.message = "Welcome to Retail Inventory Management";
// });

// app.controller('LoginController', function($scope) {
//     $scope.message = "Login to your account";
// });

// app.controller('DashboardController', function($scope) {
//     $scope.message = "This is the dashboard";
// });