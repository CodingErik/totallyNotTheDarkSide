// adding document .ready SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY 
$(document).ready(function () {

    // this is the SPACE X API


    // RUN SEARCH FOR API SEARCH BUTTON
    // SPACE X API REQUEST *************
    // possible switch for the space x instead of button  in updated version 
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

            // call function to make ajax call 
            spaceXAjax(e.target);
        }

    });
    //**********************************

    //SPACEXAJAX FUNCTION
    // Makes a ajax request to the Space X API
    //**********************************
    function spaceXAjax(buttonPressed) {

        // pull data number from button pressed  
        let id = $(buttonPressed).data('id');

        // testing to get the data-id from the specific button that was pressed 
        // code is working here we are receiving the numbers 
        // console.log(id);

        let baseUrl = "https://api.spacexdata.com/v3/";

        let builtUrlQuery = baseUrl + getSpaceXParameters(id);

        // testing the id number 
        // console.log('this is before the ajax call ' + id);

        // making an ajax call for the specific builtUrlQuery
        $.ajax({
            url: builtUrlQuery,
            method: "GET",
        }).then(populateSpaceXData);

        //test the query being built
        // console.log("this is the built query", builtUrlQuery);

    }
    //**********************************

    //getSpaceXParameters function
    //function gets the correct endpoints for the url for SPACEXAJAX the Ajax call ***
    //**********************************
    function getSpaceXParameters(id) {
        let userInput = $("#searchInput").val();
        console.log(userInput);

        // SWITCH RETURNS the right parameter according to button pressed 
        switch (id) {
            case 1:
                // TO BE ADDED IN LATE VERSION OF PROGRAM 
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'launches/latest';
            case 2:
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'rockets';
            case 3:
                // TO BE ADDED IN LATE VERSION OF PROGRAM 
                // return console.log(`we will see this if the button pressed is ${id}`);
                return 'missions';
        };

    };
    //**********************************

    // POPULATESPACEXDATA function  *APPEND DATA*
    // This populateSpaceXData on the page
    //**********************************
    function populateSpaceXData(response) {

        //testing
        // $(".spaceDataPopulate").empty();
        $(".newsDiv").empty();

        // test response
        // console.log('this is the response', response);

        // calling the buildRocketDiv with the reponse as an argument 
        buildRocketDiv(response);

    };
    //**********************************


    /// to be used in later version
    function buildLaunchDiv(response) {

        console.log('we are gettingn to buildLaunchDiv')

        let col = $('<div>');
        let col2 = $('<div>').addClass('col s6');

        // latest LAUNCH
        //https://api.spacexdata.com/v3/launches/latest

        let localLaunchDate = $('<div>').text(response.launch_date_local);
        let missonName = $('<div>').text(response.mission_name);
        let launchName = $('<div>').text(response.rocket.rocket_name);
        let launchPayload = $('<div>').text(response.rocket.second_stage.payloads[0].payload_type);
        let launchMissionPatch = $('<img>').attr('src', response.links.mission_patch_small);
        let launchVideoLink = $('<a>').text('click here to see the launch!').attr('href', response.links.video_link);
        launchVideoLink.css({ 'font-style': 'italic', color: 'red', 'font-weight': '900' });



        col.append(localLaunchDate);
        col.append(missonName);
        col.append(launchName);
        col.append(launchPayload);
        col.append(launchVideoLink);
        col2.append(launchMissionPatch);


        $('.newsDiv').appendTo(col1);

        // $('.newsDiv').append(row);

        // $('.newsDiv').prepend('<strong>LATEST LAUNCH<strong>');

        // return console.log(`we will see this if the button pressed is ${id}`);
    }

    // MVP FOR buildRocketDiv DONE 
    function buildRocketDiv(response) {
        // // ROCKETS

        let rocketContainer = $('<div>').addClass('rocketContainer');

        console.log('this is from within the buildRocketDiv', response);
        for (let i = 0; i < response.length; i++) {


            // console.log('this is each rocket i ',response[i]);
            let wiki = $('<a>').text('Wiki link here!').attr('href', response[i].wikipedia).attr('target', 'target="_blank"');
            let rocketImage = $('<a>').text('picture link here!').attr('href', response[i].flickr_images).attr('target', 'target="_blank"');
            let rocketDescription = $('<div>').text(`Description: ${response[i].description}`);
            let rocketCountry = $('<div>').text(`country: ${response[i].country}`);
            let rocketName = $('<div>').text(`Rocket Name: ${response[i].rocket_name}`);

            // test the rocket names
            // console.log(`this is the rocket name ${response[i].rocket_name}`)
            // console.log(wiki);

            // generating classes for john
            rocketDescription.addClass('rocketDescription');
            rocketCountry.addClass('rocketCountry');
            rocketName.addClass('rocketName');



            let container = $('<div>');
            container.addClass('rocketsDiv');


            container.append(rocketName);
            container.append(rocketCountry);
            container.append(rocketImage);
            container.append(rocketDescription);
            container.append(wiki);

            rocketContainer.append(container);
           


        }
        
        // this is the title of the returned content
        rocketContainer.prepend('<strong>ALL SPACE X ROCKETS<strong>');
        
        $('.newsDiv').append(rocketContainer);
        
        // // return console.log(`we will see this if the button pressed is ${id}`);
    }

    /// to be used in later version
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






