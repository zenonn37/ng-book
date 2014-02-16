/**
 * Created by pure coder on 2/16/14.
 */

var app = angular.module('myApp',['ngRoute']);

    app.config(function($routeProvider){

        $routeProvider.

            when('/',{templateUrl:"views/home.html",

                      controller:"HomeController"})

            .when('/about',{templateUrl:"views/about.html",

                            controller:"AboutController"})

            .when('/contact',{templateUrl:"views/contact.html",
                              controller:"ContactController"
            })

            .when('/inbox/:name',{templateUrl:"views/inbox.html",

                                  controller:"InboxController"})



            .otherwise({
                redirectTo:'/'
            })
    });




