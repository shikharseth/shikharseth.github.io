
pl.view.addPatient = {
  setupUserInterface: function () {
    var saveButton = document.forms['Patient'].commit;
    Patient.loadAll();
	  

    saveButton.addEventListener("click", 
        pl.view.addPatient.handleSaveButtonClickEvent);
		
    window.addEventListener("beforeunload", function () {

        Patient.saveAll(); 
    });
  },

  handleSaveButtonClickEvent: function () {
	 var formEl = document.forms['Patient'];
			 var x = form_validation();
			 //alert(fname);
			 
			 if(x==0)
				 return false;
			 else{
				var slots = { fname: formEl.fname.value, 
					lname: formEl.lname.value, 
					age: formEl.age.value,
					dob: formEl.dob.value,
					gender: formEl.gender.value,
					phone: formEl.phone.value,
					comment: formEl.comment.value};
				Patient.create( slots);
				formEl.reset();
				alert("Your Record has been successfully added. Thanks!");
			 }
   
  }
};
function form_validation(){
//alert("Hi");
	 var formEl = document.forms['Patient'];

			var fname = formEl.fname.value;
			 var lname = formEl.lname.value;
			 var age = formEl.age.value;
			 var dob = formEl.dob.value;
			 var gender = formEl.gender.value;
			 var phone = formEl.phone.value;
			 //alert(fname);
			 //var now = new Date();
			 //alert(now);
			if(all_letter_fname(fname)==0)
				return 0;
			else if(all_letter_lname(lname) ==0)
				return 0;
			else if(age_valid(age) ==0)
				return 0;
			else if(dob_valid(dob,age) ==0)
				return 0;
			else if(gender_valid(gender) ==0)
				return 0;
			else if(phone_valid(phone,5,10) ==0)
				return 0;
			else
				return 1;
			/*if(all_letter_fname(fname)){
			if(all_letter_lname(lname)){
			if(age_valid(age)){
			if(dob_valid(dob)){
			if(gender_valid(gender)){
			if(phone_valid(phone,5,10)){
			}
			}
			}
			}
			}
			}*/
			
			
		
		}
function all_letter_fname(fname)  
{   
var letters = /^[A-Za-z]+$/;  
if(fname.match(letters))  
{  
return 1;  
}  
else  
{  
alert('First Name must have alphabet characters only');  
return 0;  
}  
} 
function all_letter_lname(lname)  
{   
var letters = /^[A-Za-z]+$/;  
if(lname.match(letters))  
{  
return 1;  
}  
else  
{  
alert('Last Name must have alphabet characters only');  
return 0;  
}  
} 
function age_valid(age)  
{  
var numbers = /^[0-9]+$/;
if (age.match(numbers))  
{  
  return 1; 
}  
alert("Age should be Vaild");  
return 0; 
}
function dob_valid(dob,entered_age)  
{  
var final_age = getAge(dob);
 //alert(final_age);
 //alert(birthdate);
/* if (dob == 0 || dob == "NULL")  
{  
alert("Date of Birth should not be empty");  
return 0;  
}*/
 if(final_age !=entered_age)
{
	if(dob ==0 || dob =="NULL"){
		alert("Date of Birth should not be empty");  
		return 0; 
	}
	else{
	alert("Please enter valid Date of Birth According to your age");
	return 0;
	}
}
else	
return 1;  
}  
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
function gender_valid(gender)  
{  
if(gender == "Select")  
{  
alert('Select your gender from the list');  
return 0;  
}  
else  
{  
return 1;  
}  
} 
function phone_valid(phone,mx,my)  
{  
var numbers = /^[0-9]+$/;
var phone_len = phone.length;  
if (phone.match(numbers) && phone_len <= my && phone_len > mx)  
{  
  return 1; 

}  
alert("Phone should not be empty / length be between "+mx+" to "+my);  
return 0; 
}  