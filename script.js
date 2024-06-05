var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/index", {
        templateUrl : "index.html",
        controller: 'HomeController' // You can specify a controller for each route if needed
    })
    .when("/cart", {
        templateUrl : "cart.html",
        controller: 'CartController' // You can specify a different controller for each route if needed
    })
    .otherwise({
        redirectTo: '/'
    });
});

// Define controllers if needed
app.controller('HomeController', function($scope) {
    // Controller logic for the home page
});

app.controller('CartController', function($scope) {
    // Controller logic for the cart page
});
