/** * Main AngularJS Web Application */ 

var app = angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider, $logProvider) {
    $routeProvider
      .when("/", {templateUrl: "views/header-view.html", controller: "HomeCtrl"})
      .when("/about", {templateUrl: "views/about-view.html", controller: "AboutCtrl"})
      .when("/contact", {templateUrl: "views/contact-view.html", controller: "ContactCtrl"})
      .when("/portfolio", {templateUrl: "views/portfolio-view.html", controller: "PortfolioCtrl"})
  });
