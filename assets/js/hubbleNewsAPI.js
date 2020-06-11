// hubble News API this lets us the latest news  ******* WORK ON THIS

$(document).ready(function () {




    $('.hubbleSearch').on('click', function (e) {
        e.preventDefault();
        // clear div 
        $('.newsDiv').empty();
        // call 
        hubbleAjaxCall();
        

        console.log('this is being clicked')
    })


    $('.hubbleClear').on('click', function (e) {
        e.preventDefault();
        // empties div for new search 
        $('.newsDiv').empty();
    })



    $.ajaxPrefilter( function (options) {
        if (options.crossDomain && jQuery.support.cors) {
          var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
          options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
          //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
      });



    // hubble glossary 
    function hubbleAjaxCall() {


        

        console.log('call hubble is happening')
        // this is the latest news 
        //http://hubblesite.org/api/v3/news_release/last


        // this is a list of the news 
        // http://hubblesite.org/api/v3/news


        // user input
        let userInput = $('#hubbleUserInput').val().trim();

        $.ajax({
            // url: `https://hubblesite.org/api/v3/glossary/asteroid?callback=json`,
            url: `http://hubblesite.org/api/v3/glossary/${userInput}`,
            method: 'GET'
        }).then((response) => {

            // testing user output 
            // console.log(response.definition);


            let definition = $('<div>').text(response.definition).css({
                padding: '30px'
            })

            definition.addClass('hubbleDefinition')

            $('.newsDiv').append(definition);

        })

        


    }

});
