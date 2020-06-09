// adding document .ready 
$(document).ready(function () {

    $('.tabs').tabs();

    // this is quote & picture/video API

    //imageVideoOfTheDay **
    // call to get the video or image of the day
    //**********************************
    function imageVideoOfTheDayAjax() {
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
                let img = $('<img width="100%" height="auto"> </img>');
                img.attr("src", response.url);
                img.addClass("responsive-img");

                $(".imageOfTheDay").append(img);
                // $('body').append(img);

                console.log(img);
            } else if (response.media_type === "video") {
                // console.log('this is a video')
                // the image has to be reponsive find the correct class for the materialize
                let video = $('<iframe width="100%" height="auto"> <iframe>');
                video.attr("src", response.url);
                video.addClass("responsive-video");

                $(".imageOfTheDay").append(video);
                // $('.results').append(video);

                console.log(video);
            }
        });
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

        let launchCount = $("<div>").text(`Upcoming Count Launch: ${response.count}`);

        $(".launchDatesDiv").prepend(launchCount);

        // loop through and append the upcoming launches to the html
        launchesArr.forEach((e) => {
            let name = $("<div>").text(`launch name: ${e.name}`);
            let date = $("<div>").text(`launch date: ${e.net}`);
            let id = $("<div>").text(`launch id: ${e.id}`);
            let launchContainer = $("<div>").css({
                // margin: " 2px",
                // padding: "5px",
                // "border-radius": "5px",
            });

            launchContainer.addClass('launchCardStyle');

            launchContainer.append(name);
            launchContainer.append(date);
            launchContainer.append(id);
            launchContainer.addClass('col s4');

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