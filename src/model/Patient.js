
function Patient( slots) {
  this.fname = slots.fname;
  this.lname = slots.lname;
  this.age = slots.age;
  this.dob = slots.dob;
  this.gender = slots.gender;
  this.phone = slots.phone;
  this.comment = slots.comment;

  };

Patient.instances = {};


Patient.convertRow2Obj = function (patientRow) {
  var patient = new Patient( patientRow);
  return patient;
};

Patient.loadAll = function () {
  var key="", keys=[], patientsString="", patients={}, i=0;  
  try {
    if (localStorage.getItem("patients")) {
      patientsString = localStorage.getItem("patients");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (patientsString) {
    patients = JSON.parse( patientsString);
    keys = Object.keys( patients);
    console.log( keys.length +" Patients loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Patient.instances[key] = Patient.convertRow2Obj( patients[key]);
    }
  }
};

Patient.saveAll = function () {
  var patientsString="", error=false,
      nmrOfPatients = Object.keys( Patient.instances).length;  
  try {
    patientsString = JSON.stringify( Patient.instances);
    localStorage.setItem("patients", patientsString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( patientsString + " patients saved.");
};

Patient.create = function (slots) {
  var patient = new Patient( slots);
  Patient.instances[slots.fname] = patient;
  console.log("Patient " + slots.fname + " created!");
};

Patient.update = function (slots) {
	var patient = Patient.instances[slots.fname];
    var age = parseInt( slots.age);
	var phone = parseFloat( slots.phone);
	
	if (patient.fname !== slots.fname) { patient.fname = slots.fname;}
 if (patient.lname !== slots.lname) { patient.lname = slots.lname;}
  if (patient.age !== slots.age) { patient.age = age;}
    if (patient.dob !== slots.dob) { patient.dob = slots.dob;}
   if (patient.gender !== slots.gender) { patient.gender = slots.gender;}
 if (patient.phone !== slots.phone) { patient.phone = phone;}
  if (patient.comment !== slots.comment) { patient.comment = slots.comment;}

  console.log("Patient " + slots.fname + " modified!");
};

Patient.destroy = function (fname) {
  if (Patient.instances[fname]) {
    console.log("Patient " + fname + " deleted");
    delete Patient.instances[fname];
  } else {
    console.log("There is no Patient with FirstName " + fname + " in the database!");
  }
};

Patient.createTestData = function () {
  Patient.instances["Harry"] = new Patient({fname:"Harry", lname:"Jackson", age:20, dob:"1993-10-26", gender:"male" , phone:"01278994 ", comment:"NA"});
  Patient.instances["John"] = new Patient({fname:"John", lname:"Cena", age:21, dob:"1999-11-27", gender:"male" , phone:"8719226656" , comment:"NA"});
  Patient.instances["Marry"] = new Patient({fname:"Marry", lname:"Williams", age:22, dob:"1993-12-30", gender:"female" , phone:"585856669" , comment:"NA"});
  Patient.saveAll();
  alert("Sample Database Created Successfully!");
};

Patient.clearData = function () {
  if (confirm("Do you really want to delete all patient data?")) {
    Patient.instances = {};
    localStorage.setItem("patients", "{}");
  }
};
