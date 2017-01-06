var Doctor = require('./../js/doctor.js').doctorModule;

var displayResults = function(results) {
  $('#result').empty();
  if (results.data.length > 0){
    $('#result').append("<li id='doctor-list'></li>");
    for (i=0; i<results.data.length; i++){
      $('#doctor-list').append(
        "<li class='doc-box pull-left'>" +
        '<img class="doc-image" src="'+results.data[i].profile.image_url+'"/>'+'</div>'+
        '<h4><span class="blue">'+ results.data[i].profile.first_name + " " + results.data[i].profile.last_name + '</span></h4><hr>' + " " +
        '<h5>Speciality</h5><h4>'+ results.data[i].specialties[0].actor + '</h4><br>'+
        '<h4>'+ results.data[i].practices[0].name + '</h4>' +
        '<h5>'+ results.data[i].practices[0].visit_address.street + '</h5>' +
        '<h5>'+ results.data[i].practices[0].visit_address.city + '</h5>' +
        '<h5>'+ results.data[i].practices[0].visit_address.zip + '</h5>' +
        '<h5>'+ results.data[i].practices[0].phones[0].number + '</h5>' +
        "</li>");
    }
  } else {
    $('#result').html("<h4 class='doc-box-error center'>There are results found. Search examples include, toothache, surgeon, etc</h4>");
  }
};

$(document).ready(function() {
  var findDoc = new Doctor();
  $('#input-button').click(function(){
    findDoc.getDoctors($('#userInput').val(), displayResults);
  });
});
