
pl.view.updatePatient = {
  setupUserInterface: function () {
    var formEl = document.forms['Patient'],
        saveButton = formEl.commit,
        selectPatientEl = formEl.selectPatient;
    var key="", keys=[], patient=null, optionEl=null, i=0;

    Patient.loadAll();

    keys = Object.keys( Patient.instances);
	var x= keys.length;
	//alert(x);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      patient = Patient.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = patient.fname;

      selectPatientEl.add( optionEl, null);
    }

    selectPatientEl.addEventListener("change", function () {
        var patient=null, key = selectPatientEl.value;
        if (key) {
          patient = Patient.instances[key];
          formEl.fname.value = patient.fname;
          formEl.lname.value = patient.lname;
          formEl.age.value = patient.age;
          formEl.dob.value = patient.dob;
          formEl.gender.value = patient.gender;
          formEl.phone.value = patient.phone;
          formEl.comment.value = patient.comment;

		  } else {
      	  formEl.fname.value = "";
      	  formEl.lname.value = "";
      	  formEl.age.value = "";
      	  formEl.dob.value = "";
      	  formEl.gender.value = "";
      	  formEl.phone.value = "";
      	  formEl.comment.value = "";

		  }
    });
    saveButton.addEventListener("click", 
        pl.view.updatePatient.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Patient.saveAll(); 
    });
  },

  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Patient'];
    var slots = { fname: formEl.fname.value, 
        lname: formEl.lname.value, 
        age: formEl.age.value,
		dob: formEl.dob.value,
		gender: formEl.gender.value,
		phone: formEl.phone.value,
		comment: formEl.comment.value
        };
    Patient.update( slots);
    formEl.reset();
	alert("Your Record has been updated successfully. Thanks!");
  }
};