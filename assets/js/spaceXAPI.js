$(document).ready(function () {

    // this is the SPACE X API


    // RUN SEARCH FOR API SEARCH BUTTON
    // SPACE X API REQUEST *************
    //**********************************
    $(".radioButton").on("click", function (e) {
        e.preventDefault();
        $(".newsDiv").empty();

        // testing
        // console.log($(e.target));

        if ($(e.target).hasClass('btn')) {

            //testing
            // console.log('hello');
            // call function to make ajax call 
            spaceXAjax();
        }

    });
    //**********************************



    function spaceXAjax() {

        let baseUrl = "https://api.spacexdata.com/v3/";

        let builtUrlQuery = baseUrl + getSpaceXParameters();

        $.ajax({
            url: builtUrlQuery,
            method: "GET",
        }).then(populateSpaceXData);
        console.log("this is the built query", builtUrlQuery);

    }



    // CLEAR BUTTON  ******************
    $('.spaceXClear').on('click', function (e) {
        e.preventDefault();
        // empties div for new search 
        $('.newsDiv').empty();
    })
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


        // latest LAUNCH
        //https://api.spacexdata.com/v3/launches/latest
        // > launch_date_local 
        // > mission_name
        // > rocket > rocket_name
        // rocket > second_stage > payloads > rocket_name
        // > links > mission_patch_small
        // > links > video_link



        // ROCKETS
        // > wikipedia 
        // > flickr_images (jpeg if available)
        //> description 
        //> country 
        //> name 


        // MISSIONS 
        // > mission_name
        // > description
        // > wikipedia





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

});






