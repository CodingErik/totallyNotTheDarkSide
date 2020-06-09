// this is the SPACE X API


// RUN SEARCH FOR API SEARCH BUTTON
// SPACE X API REQUEST *************
//**********************************
$("#runSearch").on("click", function (e) {
    e.preventDefault();
    $(".spaceDataPopulate").empty();
    let baseUrl = "https://api.spacexdata.com/v3/";

    let builtUrlQuery = baseUrl + getSpaceXParameters();

    $.ajax({
        url: builtUrlQuery,
        method: "GET",
    }).then(populateSpaceXData);
    console.log("this is the built query", builtUrlQuery);
});
//**********************************

//    ^^^^^      getSpaceXParameters function BUILDURL
//functions gets the correct endpoints for the url for making the SPACE X the Ajax call ***
//**********************************
function getSpaceXParameters() {
    let userInput = $("#searchInput").val();
    console.log(userInput);

    // here we would have some kind of listener that waits for all the parameters to be checked

    //Capsules
    //Cores
    //Dragons
    //History
    //Info
    //Landing Pads
    //Launches
    //Launch Pads
    //Missions
    //Payloads
    //Rockets
    //Roadster
    //Ships

    return "capsules";
}
//**********************************

// POPULATESPACEXDATA function
// This populateSpaceXData on the page
//**********************************
function populateSpaceXData(response) {
    // console.log(response[0]['capsule_id']);

    $(".spaceDataPopulate").empty();

    // cool this is working now and populating results on the website dynamically
    // we are gonna not have to specify anything
    // we will just have to loop HERE
    response.forEach((e) => {
        console.log(e["capsule_id"]);

        // this will stay here                  this will just say reponse
        $(".spaceDataPopulate").append($("<div>").text(e["capsule_id"]));
    });
}
//**********************************

// clears the spaceDataPopulate container
//**********************************
$("#clear").on("click", function (e) {
    e.preventDefault();
    $(".spaceDataPopulate").empty();
});
//**********************************