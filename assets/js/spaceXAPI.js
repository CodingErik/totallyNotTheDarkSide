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

        // if the button has this class 
        // then it makes a ajax call so that we can pull the right info 
        if ($(e.target).hasClass('btn')) {

            //testing
            // console.log('hello');

            // the call is working so far here !!!!!!!!!!!

            // call function to make ajax call 
            spaceXAjax(e.target);
        }

    });
    //**********************************

    //SPACEXAJAX FUNCTION
    // Makes a ajax request to the Space X API
    //**********************************
    function spaceXAjax(buttonPressed) {

        let id = $(buttonPressed).data('id');

        // testing to get the data-id from the specific button that was pressed 
        // code is working here we are receiving the numbers 
        // console.log(id);

        let baseUrl = "https://api.spacexdata.com/v3/";

        let builtUrlQuery = baseUrl + getSpaceXParameters(id);

        $.ajax({
            url: builtUrlQuery,
            method: "GET",
        }).then(populateSpaceXData);

        //test the query being built
        // console.log("this is the built query", builtUrlQuery);

    }
    //**********************************

    //    ^^^^^      getSpaceXParameters function BUILDSURL
    //function gets the correct endpoints for the url for SPACEXAJAX the Ajax call ***
    //**********************************
    function getSpaceXParameters(id) {
        let userInput = $("#searchInput").val();
        console.log(userInput);

        // RETURNS the right parameter according to button pressed 
        switch (id) {
            case 1:
                // latest LAUNCH
                //https://api.spacexdata.com/v3/launches/latest
                // > launch_date_local 
                // > mission_name
                // > rocket > rocket_name
                // rocket > second_stage > payloads > rocket_name
                // > links > mission_patch_small
                // > links > video_link
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'launches/latest';
            case 2:
                // ROCKETS
                // > wikipedia 
                // > flickr_images (jpeg if available)
                //> description 
                //> country 
                //> name 
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'rockets';
            case 3:
                // MISSIONS 
                // > mission_name
                // > description
                // > wikipedia
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'missions';
        }

    }
    //**********************************

    // POPULATESPACEXDATA function  *APPEND DATA*
    // This populateSpaceXData on the page
    //**********************************
    function populateSpaceXData(response) {
        // console.log(response[0]['capsule_id']);

        //testing
        // $(".spaceDataPopulate").empty();
        $(".newsDiv").empty();


        // cool this is working now and populating results on the website dynamically
        // we are gonna not have to specify anything
        // we will just have to loop HERE
        // response.forEach((e) => {
        //     console.log(e["capsule_id"]);

        //     // this will stay here                  this will just say reponse
        //     $(".spaceDataPopulate").append($("<div>").text(e["capsule_id"]));
        // });

        //This is to test the reponse 
        console.log('is this firing', response);
    }
    //**********************************

    // this function builds Elements for the specific search 
    function buildElements() {


        // latest LAUNCH
        //https://api.spacexdata.com/v3/launches/latest
        // reponse.launch_date_local 
        // reponse.mission_name
        // reponse.rocket.rocket_name
        // reponse.rocket.second_stage.payloads.payload_type
        // reponse.links.mission_patch_small
        // response.links.video_link
        // return console.log(`we will see this if the button pressed is ${id}`);

        // ROCKETS
        // > wikipedia 
        // > flickr_images (jpeg if available)
        //> description 
        //> country 
        //> name 
        // return console.log(`we will see this if the button pressed is ${id}`);

        // MISSIONS 
        // > mission_name
        // > description
        // > wikipedia
        // return console.log(`we will see this if the button pressed is ${id}`);

    }


    // BUTTON
    // clears the newsDiv container
    //**********************************
    $(".spaceXClear").on("click", function (e) {
        e.preventDefault();
        $(".newsDiv").empty();
    });
    //**********************************

});






