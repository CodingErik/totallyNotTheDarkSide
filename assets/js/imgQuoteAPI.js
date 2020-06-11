// adding document .ready SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY 
$(document).ready(function () {



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

});