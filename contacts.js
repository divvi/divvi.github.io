
/*var contacts = {

	"E-mail"="gdivyareddy@gmail.com",
	 "Phone"="0413726400",
	 "location"="sydney",
	 "github"="divvi",


}
 var contactinfo='<h2 id="email">%data%</h2>';

 $("#contactinfo").on("click",function(){


 $("#contacts").append(contactinfo);
var mail=contactinfo.replace("%data%",contacts.E-mail);

 });
 
*/

var contactsApp = angular.module('myblog',['ngRoute', 'ui.bootstrap']);
contactsApp.config(function($routeProvider){
	$routeProvider.
	when('/', {
            templateUrl: 'aboutme.html',
            controller: 'HomePageCtrl'
          }).

when('/resume', {
templateUrl:'resume.html',
controller:'AccordionDemoCtrl',
}).

when('/contactme', {
templateUrl:'contactme.html',
controller:'ContactDetailsController',
}).
otherwise({
redirectTo:'/'
});
});

contactsApp.controller('HomePageCtrl',function(){
	console.log('hello');
});


contactsApp.controller('ResumeController',function(){
	console.log('Resume details');
});

contactsApp.controller('ContactDetailsController',function(){
	console.log('contact details');
});
contactsApp
.controller('AccordionDemoCtrl', function ($scope) {
	  $scope.oneAtATime = true;

	  $scope.groups = [
	    {
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }
	  ];

	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
	    var newItemNo = $scope.items.length + 1;
	    $scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
	});

