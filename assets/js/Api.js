// DONE!!!!!
// this is quote & picture/video API

//imageVideoOfTheDay **
// call to get the video or image of the day
//**********************************
function imageVideoOfTheDayAjax() {
<<<<<<< HEAD:Api.js
    // used to test img
    // https://apodapi.herokuapp.com/api/?date=2020-06-01

    $.ajax({
        url: `https://apodapi.herokuapp.com/api/`,
        method: "GET",
    }).then((response) => {
        // console.log(response.url);

        // console.log(response.media_type);

        if (response.media_type === "image") {
            // console.log('this is an image')
            // the image has to be reponsive find the correct class for the materialize
            let img = $('<img width="420" height="315"> </img>');
            img.attr("src", response.url);
            img.addClass("responsive-img");

            $(".results").append(img);
            // $('body').append(img);

            console.log(img);
        } else if (response.media_type === "video") {
            // console.log('this is a video')
            // the image has to be reponsive find the correct class for the materialize
            let video = $("<iframe>");
            video.attr("src", response.url);
            video.addClass("responsive-video");

            $(".results").append(video);
            // $('.results').append(video);

            console.log(video);
        }
        // else {
        //     // this is a default image if we dont have an image
        //     // let img = $('<img width="420" height="315"> </img>');
        //     // img.attr('src', response.url);
        //     // img.addClass("responsive-img");

        //     // $('.results').append(img);
        // }
    });
=======
  // used to test img
  // https://apodapi.herokuapp.com/api/?date=2020-06-01

  $.ajax({
    url: `https://apodapi.herokuapp.com/api/`,
    method: "GET",
  }).then((response) => {
    console.log(response.url);

    // console.log(response.media_type);

    if (response.media_type === "image") {
      // console.log('this is an image')
      // the image has to be reponsive find the correct class for the materialize
      let img = $('<img width="420" height="315"> </img>');
      img.attr("src", response.url);
      img.addClass("responsive-img");

      $(".results").append(img);
      // $('body').append(img);

      console.log(img);
    } else if (response.media_type === "video") {
      // console.log('this is a video')
      // the image has to be reponsive find the correct class for the materialize
      let video = $("<iframe>");
      video.attr("src", response.url);
      video.addClass("responsive-video");

      $(".results").append(video);
      // $('.results').append(video);

      console.log(video);
    }
    // else {
    //     // this is a default image if we dont have an image
    //     // let img = $('<img width="420" height="315"> </img>');
    //     // img.attr('src', response.url);
    //     // img.addClass("responsive-img");

    //     // $('.results').append(img);
    // }
  });
>>>>>>> bab77740a2c410170bd03dabecb6e273c9eb9c3d:assets/js/Api.js
}
//**********************************

// calling the imageVideoOfTheDayAjax function
imageVideoOfTheDayAjax();

//quoteOfTheDay **
// calls for author and quote of the day
function quoteOfTheDayAjax() {
    $.ajax({
        url: `https://quote-garden.herokuapp.com/api/v2/quotes/random`,
        method: "GET",
    }).then((response) => {
        console.log(response);
        let quoteAuthor = $("<strong>")
            .text(`${response.quote.quoteAuthor} :`)
            .css({
                "margin-right": "10px",
            });
        let quoteGenre = $("<span>").text(response.quote.quoteGenre);
        let quoteText = $("<span>").text(response.quote.quoteText);

        let quoteDiv = $("<div>");
        quoteDiv.append(quoteText);
        quoteDiv.prepend(quoteAuthor);

        // $('.results').prepend(quoteDiv);
        $(".quoteDiv").prepend(quoteDiv);
    });
}

// calling the quoteOfTheDayAjax function
quoteOfTheDayAjax();

// have the image have the ability to download  ******* WORK ON THIS

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


// [DONE]!!!!!
// Upcoming Launch API

// BUTTON that get us all the Upcoming Launched
// this call request most recent launches BTN
//**********************************
function callLaunchDates() {

    let baseUrl = "https://launchlibrary.net/1.3/";

    let queryParameters = {
        launch: "launch",
    };

    $.ajax({
        url: baseUrl + queryParameters.launch,
        method: "GET",
    }).then(appendUpcomingLaunches);
};
//**********************************

// APPENDUPCOMINGLAUNCHES function
// this function appends the most recent launches to the html
// plus all the juicy stats that come with that
//**********************************
function appendUpcomingLaunches(response) {
    // this is an array with all the upcoming launches
    console.log(response.launches);

    let launchesArr = response.launches;

    // this this is number of upcoming launches
    console.log(response.count);

    let launchCount = $("<div>").text(`Upcoming Count Launch: ${response.count}`);

    $(".launchDatesDiv").prepend(launchCount);

    // loop through and append the upcoming launches to the html
    launchesArr.forEach((e) => {
        let name = $("<div>").text(`launch name: ${e.name}`);
        let date = $("<div>").text(`launch date: ${e.net}`);
        let id = $("<div>").text(`launch id: ${e.id}`);
        let launchContainer = $("<div>").css({
            margin: " 2px",
            padding: "5px",
            // "background-color": "black",
            opacity: ".7",
            "border-radius": "5px",
        });

        launchContainer.addClass('launchCardStyle');

        launchContainer.append(name);
        launchContainer.append(date);
        launchContainer.append(id);

        // $('.upcomingLauchesContainer').append(launchContainer)
        $(".launchDatesDiv").append(launchContainer);

    });


}
//**********************************

// BUTTON clears the upcomingLaunchesContainer
//**********************************
$("#clearLaunch").on("click", function () {
    $(".launchDatesDiv").empty();
});
//**********************************

callLaunchDates();