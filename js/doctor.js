var apiKey = require('./../.env').apiKey;

function Doctor() {
  var medicalIssue;
  var searchResults;
}

Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  this.medicalIssue = medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log("result =" + result);
     this.searchResults=result;
     displayFunction(result);
    })
   .fail(function(error){
     $('.showDiv').text(error.responseJSON.message);
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
