//  SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY 
$(document).ready(function () {
    
    
    // Upcoming Launch API************************
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

        // empty the div everytime the launch dates populates
        $(".launchDatesDiv").empty();

        // this is an array with all the upcoming launches
        console.log(response.launches);

        let launchesArr = response.launches;

        // this this is number of upcoming launches
        console.log(response.count);

        let launchCount = $("<div>").text(`Upcoming Rocket Launches Next: ${response.count}`);
        
        // adding a class for jon to style with 
        launchCount.addClass('launchTitle');


        $(".launchDatesDiv").prepend(launchCount);

        // loop through and append the upcoming launches to the html
        launchesArr.forEach((e) => {
            let name = $("<div>").text(`launch name: ${e.name}`);
            let date = $("<div>").text(`launch date: ${moment.parseZone(e.net).utcOffset(e.net).format('LLL')}`);
            let id = $("<div>").text(`launch id: ${e.id}`);
            let launchContainer = $("<div>");
            launchContainer.addClass('launchCardStyle');

            launchContainer.append(name);
            launchContainer.append(date);
            launchContainer.append(id);


            // moment(testDate).format('MM/DD/YYYY');
            // need to use moment to parse the new date 

            // testing parsing date 
            // console.log('this is the date',moment(date).format('MM/DD/YYYY'));

            // testing   June 17, 2020 07:18:00 UTC
            // console.log(moment.utc(e.net, "MMM dd, YYYY hh:mm:ss").format('L'));

            
            console.log('this is the actual date',e.net);
            // console.log('second option', moment(e.net).utcOffset(e.net).format('L'));
            
            // this option parses and formats the time into local time zone 
            console.log('third option', moment.parseZone(e.net).utcOffset(e.net).format('LLL'));

            
            // just for testing 
            // launchContainer.addClass('col s4');

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

});