var apiKey = require('./../.env').apiKey;

function Doctor() {
  this.results = [];
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     $('.showDiv').append('<h2>' + medicalIssue + '</h2>' + "Doctors that specialize in your issue: " + result.conditions);
      console.log(result);
    })
   .fail(function(error){
     $('.showDiv').text(error.responseJSON.message);
      console.log("fail");
    });
};


exports.doctorModule = Doctor;


// .main.humidity needs changed to point to specific field
