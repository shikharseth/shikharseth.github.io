
 pl.view.listPatients = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#patients>tbody");
    var keys=[], key="", row={}, i=0;

    Patient.loadAll();
    keys = Object.keys( Patient.instances);

    for (i=0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Patient.instances[key].fname;      
      row.insertCell(-1).textContent = Patient.instances[key].lname;  
      row.insertCell(-1).textContent = Patient.instances[key].age;
      row.insertCell(-1).textContent = Patient.instances[key].dob;
      row.insertCell(-1).textContent = Patient.instances[key].gender;
      row.insertCell(-1).textContent = Patient.instances[key].phone;
      row.insertCell(-1).textContent = Patient.instances[key].comment;

	  }
  }
};