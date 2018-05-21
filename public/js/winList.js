// Set up document listener
$(document).ready(function () {

  // hide resourceTable from user
  $("#resourceTable").hide();

  // declaring variables
  var winLocations = [];
  var winServices = ["housing", "domestic_violence", "food", "clothing", "babysitting", "doctor_visit", "medicine", "infant_items", "daycare", "auto_repair", "bus_pass", "other_transport", "furniture", "employment", "legal_aide", "school_supplies", "education_assistance", "counseling", "drug_addiction", "internet_phone_tech", "immigration_assist"];
  var winServicesLoc = [];
  var reqServices = [];

  //Event listener to list resources and reset page
  $(document).on("click", "#searchAll", searchAll);
  $(document).on("click", "#reset", reset);

  // Function to search for nearby resources
  function searchAll(event) {
    event.preventDefault();
    getResources();
    reqresources();


  }

  // Function to reset the search form
  function reset(event) {
    location.reload();
  }

  // function to list resources available
  function resources() {

    console.log(winLocations)
    for (i = 0; i < winLocations.length; i++) {
      console.log(winLocations[i]);
      console.log(winServices[i]);

    }

  }
  
  function getResources() {


    $.get("/getresources", function (data) {
      console.log("data is", data);
      console.log(data);

      // if statement to check for organization location and append to page
      if ($('#checkNW').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkNW").val()) {
            winLocations.push(data[i]);
            console.log(data[i].name);
            var name = data[i].name;
            var address = data[i].address;
            var email = data[i].email;
            var phone = data[i].phone;
            var website = data[i].website;
            

            $("#placement").append("<p>" + name + "</p><p>" + address + "</p><p>" + email + "</p><p> Phone: " + phone + "</p><p>" + website + "</p><br/>")
          }

        }

        console.log(winLocations);
      }


      // if statement to check for organization location and append to page
      if ($('#checkSW').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkSW").val()) {
            winLocations.push(data[i]);
            var name = data[i].name;
            var address = data[i].address;
            var email = data[i].email;
            var phone = data[i].phone;
            var website = data[i].website;
            $("#placement").append("<p>" + name + "</p><p>" + address + "</p><p>" + email + "</p><p> Phone: " + phone + "</p><p>" + website + "</p><br/>")
          }
        }
        console.log(winLocations);
      }

      // if statement to check for organization location and append to page
      if ($('#checkSE').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkSE").val()) {
            winLocations.push(data[i]);
            var name = data[i].name;
            var address = data[i].address;
            var email = data[i].email;
            var phone = data[i].phone;
            var website = data[i].website;
            $("#placement").append("<p>" + name + "</p><p>" + address + "</p><p>" + email + "</p><p> Phone: " + phone + "</p><p>" + website + "</p><br/>")
          }
        }
        console.log(winLocations);
      }

      // if statement to check for organization location and append to page
      if ($('#checkNE').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkNE").val()) {
            winLocations.push(data[i]);
            var name = data[i].name;
            var address = data[i].address;
            var email = data[i].email;
            var phone = data[i].phone;
            var website = data[i].website;
            $("#placement").append("<p>" + name + "</p><p>" + address + "</p><p>" + email + "</p><p> Phone: " + phone + "</p><p>" + website + "</p><br/>")
          }
        }
      }

      // if statement to check for organization location and append to page
      if ($('#checkCN').is(":checked")) {
        for (i = 0; i < data.length; i++) {
          if (data[i].location === $("#checkCN").val()) {
            winLocations.push(data[i]);
            var name = data[i].name;
            var address = data[i].address;
            var email = data[i].email;
            var phone = data[i].phone;
            var website = data[i].website;
            $("#placement").append("<p>" + name + "</p><p>" + address + "</p><p>" + email + "</p><p> Phone: " + phone + "</p><p>" + website + "</p><br/>")
          }
        }

        // check console log and running resource function
        console.log(winLocations);
        resources(winLocations);

      }


      // hide and show parts of html based on user activity
      $("#resourceForm").hide();
      $("#resourceTable").show();


    });
  }

  function reqresources(data){
    console.log("req resources is firing");
 
    $.get("/getresources", function (data) {
     console.log("data is", data);
  
    if ($('#housing').is(":checked")) {
     for (i = 0; i < winLocations.length; i++) {
       if (winLocations[i].housing === $("#housing").val()) {
         reqServices.push("housing");
         console.log(reqServices)
  }
 }
 }
 if ($('#babysitting').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].babysitting === $("#babysitting").val()) {
      reqServices.push("babysitting");
      console.log(reqServices)
}
}
}

if ($('#infant_items').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].infant_items === $("#infant_items").val()) {
      reqServices.push("InfantItems");
      console.log(reqServices)
}
}
}

if ($('#daycare').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].daycare === $("#daycare").val()) {
      reqServices.push("daycare");
      console.log(reqServices)
}
}
}

if ($('#school_supplies').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].school_supplies === $("#school_supplies").val()) {
      reqServices.push("school_supplies");
      console.log(reqServices)
}
}
}

if ($('#clothing').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].clothing === $("#clothing").val()) {
      reqServices.push("clothing");
      console.log(reqServices)
}
}
}

if ($('#counseling').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].counseling === $("#counseling").val()) {
      reqServices.push("counseling");
      console.log(reqServices)
}
}
}

if ($('#employment').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].employment === $("#employment").val()) {
      reqServices.push("employment");
      console.log(reqServices);
}
}
}

if ($('#immigration_assist').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].immigration_assist === $("#immigration_assist").val()) {
      reqServices.push("immigrationServices");
      console.log(reqServices)
}
}
}

if ($('#doctor_visit').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].doctor_visit === $("#doctor_visit").val()) {
      reqServices.push("Doctor");
      console.log(reqServices)
}
}
}

if ($('#legal_aide').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].legal_aide === $("#legal_aide").val()) {
      reqServices.push("legal");
      console.log(reqServices)
}
}
}

if ($('#furniture').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].furniture === $("#furniture").val()) {
      reqServices.push("furniture");
      console.log(reqServices)
}
}
}

if ($('#domestic_violence').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].domestic_violence === $("#domestic_violence").val()) {
      reqServices.push("domestic_violence");
      console.log(reqServices)
}
}
}

if ($('#bus_pass').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].bus_pass === $("#bus_pass").val()) {
      reqServices.push("bus_passes");
      console.log(reqServices)
}
}
}

if ($('#internet_phone_tech').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].internet_phone_tech
      === $("#internet_phone_tech").val()) {
      reqServices.push("TechServices");
      console.log(reqServices)
}
}
}

if ($('#auto_repair').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].auto_repair === $("#auto_repair").val()) {
      reqServices.push("auto_repair");
      console.log(reqServices)
}
}
}

if ($('#food').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].food === $("#food").val()) {
      reqServices.push("food/SNAP");
      console.log(reqServices)
}
}
}

if ($('#medicine').is(":checked")) {
  for (i = 0; i < winLocations.length; i++) {
    if (winLocations[i].medicine === $("#medicine").val()) {
      reqServices.push("medicine");
      console.log(reqServices)
}
}
}
$("#placement").prepend("<p>These services are available in your area:     "+reqServices+  "<p><br/>");
 })

  };

  

});