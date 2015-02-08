
var contacts = {

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
 

