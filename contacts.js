
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

var contactsApp = angular.module('myblog',['ngRoute']);
contactsApp.config(function($routeProvider){
	$routeProvider.
	when('/', {
            template: '<ul><li>Test</li><ul>',
            controller: 'HomePageCtrl'
          }).
when('/contactme', {
template:'<h1>Test</h1>',
controller:'ContactDetailsController',
}).
otherwise({
redirectTo:'/'
});
});

contactsApp.controller('HomePageCtrl',function(){
	console.log('hello');
});

contactsApp.controller('ContactDetailsController',function(){
	console.log('contact details');
});




