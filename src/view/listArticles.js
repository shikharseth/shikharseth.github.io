
 pl.view.listArticles = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#articles>tbody");
	var el1 = document.querySelectorAll("h2.title1")
    var keys=[], key="", row={}, i=0, y= {};

    Ed_fora.loadAll();
    keys = Object.keys( Ed_fora.instances);
	//y=keys[0];
	//el1.textContent  = Ed_fora.instances[y].title;
	//el1 = x
	//alert(el1);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
	  
	  el1[i].textContent = Ed_fora.instances[key].title;
     /* row = tableBodyEl.insertRow();
	  //x=Ed_fora.instances[0].id;
	  //console.log(x);
      row.insertCell(-1).textContent = Ed_fora.instances[key].id;      
      row.insertCell(-1).textContent = Ed_fora.instances[key].title;  
      row.insertCell(-1).textContent = Ed_fora.instances[key].url;
      row.insertCell(-1).textContent = Ed_fora.instances[key].num_points;
      row.insertCell(-1).textContent = Ed_fora.instances[key].num_comments;
      row.insertCell(-1).textContent = Ed_fora.instances[key].author;
      row.insertCell(-1).textContent = Ed_fora.instances[key].created_at;
*/
	  }
  }
};