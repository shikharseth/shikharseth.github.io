
pl.view.deletePatient = {
  setupUserInterface: function () {
    var deleteButton = document.forms['Patient'].commit;
    var selectEl = document.forms['Patient'].selectPatient;
    var key="", keys=[], patient=null, optionEl=null, i=0;

    Patient.loadAll();
    keys = Object.keys( Patient.instances);

    for (i=0; i < keys.length; i++) {
      key = keys[i];
      patient = Patient.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = patient.fname;

      selectEl.add( optionEl, null);
    }
    deleteButton.addEventListener("click", 
        pl.view.deletePatient.handleDeleteButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Patient.saveAll(); 
    });
  },

  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['Patient'].selectPatient;
    var fname = selectEl.value;
    if (fname) {
      Patient.destroy( fname);

      selectEl.remove( selectEl.selectedIndex);
	  alert("Record successfully deleted");
    }
  }
};