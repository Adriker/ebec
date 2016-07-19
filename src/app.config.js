app.config(function ($routeProvider) {
   $routeProvider
       .when('/ebec', {
           templateUrl: './views/main.template.html',
           controller: 'mainController'
       })
       .otherwise('/ebec')
});