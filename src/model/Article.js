
function Ed_fora( slots) {
  this.id = slots.id;
  this.title = slots.title;
  this.url = slots.url;
  this.num_points = slots.num_points;
  this.num_comments = slots.num_comments;
  this.author = slots.author;
  this.created_at = slots.created_at;

  };

Ed_fora.instances = {};


Ed_fora.convertRow2Obj = function (ed_foraRow) {
  var ed_fora = new Ed_fora( ed_foraRow);
  return ed_fora;
};

Ed_fora.loadAll = function () {
  var key="", keys=[], ed_foraString="", articles={}, i=0;  
  try {
    if (localStorage.getItem("articles")) {
      ed_foraString = localStorage.getItem("articles");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (ed_foraString) {
    articles = JSON.parse( ed_foraString);
    keys = Object.keys( articles);
    console.log( keys.length +" Articles loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Ed_fora.instances[key] = Ed_fora.convertRow2Obj( articles[key]);
    }
  }
};

Ed_fora.saveAll = function () {
  var ed_foraString="", error=false,
      nmrOfarticles = Object.keys( Ed_fora.instances).length;  
  try {
    ed_foraString = JSON.stringify( Ed_fora.instances);
    localStorage.setItem("articles", ed_foraString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( ed_foraString + " articles saved.");
};


Ed_fora.createTestData = function () {
	var $id= $('#id');
	$.ajax({
		type : 'GET',
		url:  'http://starlord.hackerearth.com/edfora/hackernews',
		success: function(id){
		$.each(id,function(i,ids){
		Ed_fora.instances[ids.id] = new Ed_fora({id:ids.id, title:ids.title, url:ids.url, num_points:ids.num_points, num_comments:ids.num_comments , author:ids.author, created_at:ids.created_at});
		 Ed_fora.saveAll();
		//$id.append('<li>id:' + ids.id + '</li>');
		});
		}
		
	});

 
  alert("Sample Database Created Successfully!");
};

Ed_fora.clearData = function () {
  if (confirm("Do you really want to delete all patient data?")) {
    Ed_fora.instances = {};
    localStorage.setItem("articles", "{}");
  }
};
