// hubble News API this lets us the latest news  ******* WORK ON THIS

// adding document .ready SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY 
$(document).ready(function () {


    // HUBBLE SEARCH BUTTON 
    // this button calls the hubbleAjaxCall function 
    //****************************************************
    $('.hubbleSearch').on('click', function (e) {
        e.preventDefault();
        // clear newsDiv before making the call 
        $('.newsDiv').empty();
        // call hubbleAjaxCall function 
        hubbleAjaxCall();

        // for testing
        // console.log('this is being clicked')
    });
    //****************************************************

    // ENTER PREVENT DEFAULT 
    // prevent enter from returning a return
    //****************************************************
    $('.focusHub').on('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            // testing
            // console.log('hello');
            // clear newsDiv before making the call 
            $('.newsDiv').empty();
            // // call hubbleAjaxCall function 
            // hubbleAjaxCall();

            //testing
            // console.log('no');

            // simulate the search button click
            $('.hubbleSearch').click();

        }
    });
    //****************************************************


    // HUBBLE CLEAR BUTTON 
    //****************************************************
    $('.hubbleClear').on('click', function (e) {
        e.preventDefault();
        // empties div for new search 
        $('.newsDiv').empty();
    });
    //****************************************************


    // this prefilter was used to correct CORS that prevented the ajax from calling 
    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
    });



    // hubbleAjaxCall function 
    // hubble glossary 
    //****************************************************
    function hubbleAjaxCall() {




        console.log('call hubble is happening')
        // this is the latest news 
        //http://hubblesite.org/api/v3/news_release/last


        // this is a list of the news 
        // http://hubblesite.org/api/v3/news


        // user input
        let userInput = $('#hubbleUserInput').val().trim();

        // making a request to url via ajax 
        $.ajax({
            url: `http://hubblesite.org/api/v3/glossary/${userInput}`,
            method: 'GET'
        }).then((response) => {

            // testing user output 
            // console.log(response.definition);


            // making a dom element for the definition text that will populate from the query 
            let definition = $('<div>').text(response.definition).css({
                padding: '30px'
            })

            // adding hubbleDefinition class
            definition.addClass('hubbleDefinition')
            // finally appending to the newsDiv
            $('.newsDiv').append(definition);

        })
    }
    //****************************************************

});
