var Doctor = require('./../js/doctor.js').doctorModule


$(document).ready(function() {
  document.getElementById("userInput").defaultValue = "toothache";
  var currentDoctorObject = new Doctor();
  $('#input-button').click(function(){
    var medicalIssue = $('#userInput').val();
    $('#userInput').val("");
    currentDoctorObject.getDoctors(medicalIssue);
  });
});
