var Doctor = require('./../js/doctor.js').doctorModule;

var displayResults = function(results) {
  $('#result').empty();
  if (results.data.length > 0){
    $('#result').append("<li id='doctor-list'></li>");
    for (i=0; i<results.data.length; i++){
      $('#doctor-list').append(
        "<li class='doc-box pull-left'>" + results.data[i].profile.first_name + " "+ results.data[i].profile.last_name +  " "+ results.data[i].specialties[0].name +"</li>");
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


//
//   "data": [
//     {
//       "practices": [
//         {
//           "within_search_area": true,
//           "distance": 1.8916995256644518,
//           "lat": 37.800332,
//           "lon": -122.410973,
//           "uid": "fb41f996baaef0bca95592cd6bae28e1",
//           "npi": null,
//           "name": "Washington Square Park Dental",
//           "email": "wsparkdental@gmail.com",
//           "insurance_uids": [
//             "deltadental-deltadentalpremier"
//           ],
//           "visit_address": {
//             "city": "San Francisco",
//             "lat": 37.800332,
//             "lon": -122.410973,
//             "state": "CA",
//             "state_long": "California",
//             "street": "1719 Powell St",
//             "zip": "94133"
//           },
//           "office_hours": [],
//           "phones": [
//             {
//               "number": "4153984123",
//               "type": "fax"
//             },
//             {
//               "number": "4156916490",
//               "type": "landline"
//             }
//           ],
//           "languages": [
//             {
//               "name": "English",
//               "code": "en"
//             }
//           ],
//           "doctors_pagination_url": "https://api.betterdoctor.com/2016-03-01/practices/fb41f996baaef0bca95592cd6bae28e1/doctors"
//         }
//       ],
//       "educations": [
//         {
//           "school": "University of the Pacific - Arthur A. Dugoni School of Dentistry",
//           "graduation_year": "2009",
//           "degree": "DDS"
//         },
//         {
//           "school": "Santa Clara University",
//           "graduation_year": null,
//           "degree": "BS"
//         }
//       ],
//       "profile": {
//         "first_name": "Jared",
//         "middle_name": "Warren",
//         "last_name": "Pool",
//         "slug": "jared-pool",
//         "title": "DDS",
//         "image_url": "https://asset3.betterdoctor.com/images/57a8f19da44efc38ba004567-2_thumbnail.jpg",
//         "gender": "male",
//         "languages": [
//           {
//             "name": "English",
//             "code": "en"
//           }
//         ],
//         "bio": "Dr. Pool is a licensed general dentist. He co-founded Washington Square Dental with the aim of offering patients a new kind of experience at the dentist’s office. His goal is for patients to enjoy being in his office and to offer them an educational, transparent, and gentle experience.\n\nBeyond just helping his patients relax, Dr. Pool is committed to working with his patients as partners. He focuses on offering preventive dental care and keeping his patients healthy. When patients need more than a routine cleaning, he wants to be sure they understand his recommendations and can make informed decisions about their dental care.\n\nDr. Pool and his team offer all general dentistry services, including preventive care and comprehensive exams; cosmetic, prosthetic, restorative, periodontal work as well as implants, Invisalign placement and oral surgery.\n\nDr. Pool is a member of the American Dental Association, the California Dental Association, and the San Francisco Dental Society. Originally from Phoenix, Arizona, Dr. Pool graduated from Santa Clara University with Bachelor of Science degree. He completed dental school at the University of the Pacific - Arthur A. Dugoni School of Dentistry. He enjoys playing disc golf with friends in Golden Gate Park and is a Giants fan."
//       },
//       "ratings": [
//         {
//           "active": true,
//           "provider": "betterdoctor",
//           "provider_uid": "jared-pool",
//           "provider_url": "https://betterdoctor.com/jared-pool",
//           "rating": 5,
//           "review_count": 0,
//           "image_url_small": "https://asset1.betterdoctor.com/assets/consumer/stars/stars-small-5.0.png",
//           "image_url_small_2x": "https://asset1.betterdoctor.com/assets/consumer/stars/stars-small-5.0@2x.png",
//           "image_url_large": "https://asset1.betterdoctor.com/assets/consumer/stars/stars-large-5.0.png",
//           "image_url_large_2x": "https://asset1.betterdoctor.com/assets/consumer/stars/stars-large-5.0@2x.png"
//         },
//         {
//           "active": true,
//           "provider": "yelp",
//           "provider_uid": "washington-square-park-dental-san-francisco",
//           "provider_url": "http://www.yelp.com/biz/washington-square-park-dental-san-francisco",
//           "rating": 4.5,
//           "review_count": 274
//         }
//       ],
//       "insurances": [
//         {
//           "insurance_plan": {
//             "uid": "deltadentalpremier",
//             "name": "Delta Dental Premier",
//             "category": [
//               "dental"
//             ]
//           },
//           "insurance_provider": {
//             "uid": "deltadental",
//             "name": "Delta Dental"
//           }
//         }
//       ],
//       "specialties": [
//         {
//           "uid": "dentist",
//           "name": "Dentistry",
//           "description": "Specializes in teeth and oral health.",
//           "category": "dental",
//           "actor": "Dentist",
//           "actors": "Dentists"
//         }
//       ],
//       "hospital_affiliations": [],
//       "group_affiliations": [],
//       "uid": "333d4bb6fcf640e18e93b11b00fe09eb",
//       "npi": "1316276066"
//     }
//   ]
// }
