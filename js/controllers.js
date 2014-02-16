/**
 * Created by pure coder on 2/16/14.
 */

app.controller("HomeController", function($scope){

    $scope.data = "Home Page"

});

app.controller("AboutController", function($scope){

    $scope.data = "About Muscle Flow"
    $scope.aboutHome = true;
    $scope.aboutTerry = null;
    $scope.aboutMike = null;

    $scope.setAbout = function(page){
        console.log(page);

       switch (page){

           case 1:
               $scope.aboutHome = true;
               $scope.aboutTerry = null;
               $scope.aboutMike = null;
               console.log("im in about home");


               break;
           case 2:
               $scope.aboutTerry = true;
               $scope.aboutHome = null;
               $scope.aboutMike = null;

               console.log("im in about terry");

               break;

           case 3:
               $scope.aboutMike = true;
               $scope.aboutHome = null;
               $scope.aboutTerry = null;


               console.log("im in about mike");


               break;




           default:
               $scope.aboutHome = true;
               break;




       }

    }//end setAbout function






});//end AboutController

app.controller("ContactController", function($scope){

    $scope.data = "Contact Page"
});


app.controller("InboxController", function($scope,$routeParams){
    $scope.data = "Inbox Page"
    $scope.name = $routeParams.name

});
