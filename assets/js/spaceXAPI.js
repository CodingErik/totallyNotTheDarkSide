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

        // pull data number 
        let id = $(buttonPressed).data('id');

        // testing to get the data-id from the specific button that was pressed 
        // code is working here we are receiving the numbers 
        // console.log(id);

        let baseUrl = "https://api.spacexdata.com/v3/";

        let builtUrlQuery = baseUrl + getSpaceXParameters(id);

        // testing the id number 
        // console.log('this is before the ajax call ' + id);

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
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'launches/latest';
            case 2:
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'rockets';
            case 3:
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

        console.log('this is the rocket name ',response[0].rocket_name);

        console.log('this is the response',response);

        if (Boolean(response.launch_success)) {
            buildLaunchDiv(response);
        } 
        // rockets works
        if (Boolean(response[0].rocket_name)) {
            buildRocketDiv(response);
        }
        // } else if () {
        //     buildMissionsDiv(response)
        // }


        // 1 2 3 response object is being sent here 
        // which build do we pass the the newsdiv

        //This is to test the reponse 
        // console.log('is this firing', response);
    }
    //**********************************

    // this function builds Elements for the specific search 



    function buildLaunchDiv(response) {
        // latest LAUNCH
        //https://api.spacexdata.com/v3/launches/latest
        let localLaunchDate = $('<div>').text(response.launch_date_local);
        let missonName = $('<div>').text(response.mission_name);
        let launchName = $('<div>').text(response.rocket.rocket_name);
        let launchPayload = $('<div>').text(response.rocket.second_stage.payloads[0].payload_type);
        let launchMissionPatch = $('<img>').attr('src', response.links.mission_patch_small);
        let launchVideoLink = $('<a>').text('click here to see the launch!').attr('href', response.links.video_link);

        let launchArr = [localLaunchDate, missonName, launchName, launchPayload, launchMissionPatch, launchVideoLink];

        // add col class and append to newsDiv
        launchArr.forEach((e) => {

            $(e).addClass('col s2')
            $('.newsDiv').append(e);
        })

        // return console.log(`we will see this if the button pressed is ${id}`);
    }

    function buildRocketDiv(response) {
        // // ROCKETS

        console.log('this is from within the buildRocketDiv',response);
        for (let i = 0; i < response.length; i++) {


            // console.log('this is each rocket i ',response[i]);
            let wiki = $('<a>').text('Wiki link here!').attr('href', response[i].wikipedia);
            let rocketImage = $('<a>').text('picture link here!').attr('href', response[i].flickr_images);
            let rocketDescription = $('<div>').text(response[i].description);
            let rocketCountry = $('<div>').text(`country: ${response[i].country}`).css({ color: 'red'});
            let rocketName = $('<div>').text(`Rocket Name: ${response[i].rocket_name}`).css({ color: 'pink'});
            // let row = $('div').addClass('row');

            // test the rocket names
            // console.log(`this is the rocket name ${response[i].rocket_name}`)
            // console.log(wiki);

            // wiki.addClass('col s2');
            // rocketImage.addClass('col s2');
            // rocketDescription.addClass('col s2');
            // rocketCountry.addClass('col s2');
            // rocketName.addClass('col s2');

            $('.newsDiv').append(rocketName);
            $('.newsDiv').append(rocketCountry);
            $('.newsDiv').append(wiki);
            $('.newsDiv').append(rocketImage);
            $('.newsDiv').append(rocketDescription);

            // $('.newsDiv').append(row);
        }





        // // return console.log(`we will see this if the button pressed is ${id}`);
    }

    function buildMissionsDiv(response) {
        // // MISSIONS 
        let missionName = $('<div>').text(response.mission_name);
        let missionDescription = $('<div>').text(response.description);
        let missionWiki = $('<a>').text('Wiki link here!').attr('href', response.wikipedia);


        let launchArr = [missionName, missionDescription, missionWiki];

        // add col class and append to newsDiv
        launchArr.forEach((e) => {

            $(e).addClass('col s2')
            $('.newsDiv').append(e);
        })

        // // return console.log(`we will see this if the button pressed is ${id}`);

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






