var Doctor = require('./../js/doctor.js').doctorModule;

var displayResults = function(results) {
  $('#result').empty();
  if (results.data.length > 0){
    $('#result').append("<li id='doctor-list'></li>");
    for (i=0; i<results.data.length; i++){
      $('#doctor-list').append(
        "<li>" + results.data[i].profile.first_name + " "+ results.data[i].profile.last_name + "</li>");
    } //for end
  } else {
    $('#result').html("<h4>No results found for that medical issue.</h4>");
  } // if end
}; //function end

$(document).ready(function() {
  document.getElementById("userInput").defaultValue = "toothache";
  var findDoc = new Doctor();
  $('#input-button').click(function(){
    findDoc.getDoctors($('#userInput').val(), displayResults);
  });
});
