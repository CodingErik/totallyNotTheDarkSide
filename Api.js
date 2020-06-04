
// this is quote & picture/video API
{

//imageVideoOfTheDay ** 
// call to get the video or image of the day 
//**********************************
function imageVideoOfTheDayAjax() {

    // used to test img 
    // https://apodapi.herokuapp.com/api/?date=2020-06-01

    $.ajax({
        url: `https://apodapi.herokuapp.com/api/`,
        method: 'GET'
    }).then((response) => {

        // console.log(response.url);

        // console.log(response.media_type);

        if (response.media_type === 'image') {
            // console.log('this is an image')
            // the image has to be reponsive find the correct class for the materialize 
            let img = $('<img width="420" height="315"> </img>');
            img.attr('src', response.url);
            img.addClass("responsive-img");

            $('.results').append(img);


        } else if (response.media_type === 'video') {
            // console.log('this is a video')
            // the image has to be reponsive find the correct class for the materialize 
            let video = $('<iframe>');
            video.attr('src', response.url);
            video.addClass('responsive-video');

            $('.results').append(video);

        } 
        // else {
        //     // this is a default image if we dont have an image
        //     // let img = $('<img width="420" height="315"> </img>');
        //     // img.attr('src', response.url);
        //     // img.addClass("responsive-img");

        //     // $('.results').append(img);
        // }

    });
};
//**********************************

// calling the imageVideoOfTheDayAjax function
imageVideoOfTheDayAjax();


//quoteOfTheDay ** 
// calls for author and quote of the day  
//**********************************
function quoteOfTheDayAjax() {

    $.ajax({
        url: `https://quote-garden.herokuapp.com/api/v2/quotes/random`,
        method: 'GET'
    }).then((response) => {

        console.log(response);
        let quoteAuthor = $('<strong>').text(`${response.quote.quoteAuthor} :`).css({
            'margin-right': '10px'
        })
        let quoteGenre = $('<span>').text(response.quote.quoteGenre);
        let quoteText = $('<span>').text(response.quote.quoteText);

        let quoteDiv = $('<div>');
        quoteDiv.append(quoteText);
        quoteDiv.prepend(quoteAuthor);

        $('.results').prepend(quoteDiv);
    });
};
//**********************************

// calling the quoteOfTheDayAjax function
quoteOfTheDayAjax();


}


// have the image have the ability to download  ******* WORK ON THIS 


// this is the SPACE X API
{

// RUN SEARCH FOR API SEARCH BUTTON 
// SPACE X API REQUEST *************
//**********************************
$('#runSearch').on('click', function () {

    let baseUrl = 'https://api.spacexdata.com/v3/'


    let builtUrlQuery = baseUrl + getSpaceXParameters();

    $.ajax({
        url: builtUrlQuery,
        method: 'GET'
    }).then(populateSpaceXData)
    console.log('this is the built query', builtUrlQuery);
});
//**********************************

//    ^^^^^      getSpaceXParameters function BUILDURL
//functions gets the correct endpoints for the url for making the SPACE X the Ajax call ***
//**********************************
function getSpaceXParameters() {

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

    return 'capsules';
};
//**********************************

// POPULATESPACEXDATA function 
// This populateSpaceXData on the page 
//**********************************
function populateSpaceXData(response) {
    // console.log(response[0]['capsule_id']);

    // cool this is working now and populating results on the website dynamically
    // we are gonna not have to specify anything 
    // we will just have to loop HERE  
    response.forEach((e)=>{
        console.log(e['capsule_id'])

        // this will stay here                  this will just say reponse
       $('.spaceDataPopulate').append($('<div>').text(e['capsule_id'])); 

    })

};
//**********************************

// clears the spaceDataPopulate container
//**********************************
$('#clear').on('click', function(){

    $('.spaceDataPopulate').empty();
})
//**********************************


}


// Upcoming Launch API
{

// BUTTON that get us all the Upcoming Launched 
// this call request most recent launches BTN
//**********************************
$('#upComingLaunchBtn').on('click', function(){

    let baseUrl = 'https://launchlibrary.net/1.3/';

    let queryParameters = {
            launch: 'launch'
    }
    
    $.ajax({
        url: baseUrl + queryParameters.launch,
        method: 'GET'
    }).then((appendUpcomingLaunches))
});
//**********************************

// APPENDUPCOMINGLAUNCHES function 
// this function appends the most recent launches to the html
// plus all the juicy stats that come with that
//**********************************
function appendUpcomingLaunches(response){
   
    // this is an array with all the upcoming launches
    console.log(response.launches);

    let launchesArr = response.launches;

    // this this is number of upcoming launches
    console.log(response.count);

    let launchCount = $('<div>').text(`Upcoming Count Launch: ${response.count}`)
    

    $('.upcomingLauchesContainer').prepend(launchCount);

    // loop through and append the upcoming launches to the html
    launchesArr.forEach((e)=>{
        
        let name = $('<div>').text(`launch name: ${e.name}`);
        let date = $('<div>').text(`launch date: ${e.net}`);
        let id = $('<div>').text(`launch id: ${e.id}`);
        let launchContainer = $('<div>').css({
            'border': ' 1px solid red'
        });

        launchContainer.prepend(name);
        launchContainer.append(date);
        launchContainer.append(id);

        $('.upcomingLauchesContainer').append(launchContainer)

    })

}
//**********************************

// BUTTON clears the upcomingLauchesContainer
//**********************************
$('#clearLaunch').on('click', function(){

    $('.upcomingLauchesContainer').empty();
})
//**********************************

}


// hubble News API this lets us the latest news  ******* WORK ON THIS
{
    function hubbleAjaxCall(){

        // this is the latest news 
        //http://hubblesite.org/api/v3/news_release/last


        // this is a list of the news 
        // http://hubblesite.org/api/v3/news

        let baseUrl = 'https://hubblesite.org/';





    }
}


























// $("#run-search").on("click", function(event) {
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();

//     // Empty the region associated with the articles
//     clear();

//     // Build the query URL for the ajax request to the NYT API
//     var queryURL = buildQueryURL();

//     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
//     // The data then gets passed as an argument to the updatePage function
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(updatePage);
//   });


//   function buildQueryURL() {
//     // queryURL is the url we'll use to query the API
//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//     // Begin building an object to contain our API call's query parameters
//     // Set the API key
//     var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

//     //QUERY PARAMS ************************************************************
//     //************************************************************************
//     // Grab text the user typed into the search input, add to the queryParams object
//     queryParams.q = $("#search-term")
//       .val()
//       .trim();

//     // If the user provides a startYear, include it in the queryParams object
//     var startYear = $("#start-year")
//       .val()
//       .trim();

//     if (parseInt(startYear)) {
//       // this is where it is being added to the queryParams object 
//       queryParams.begin_date = startYear + "0101";
//     }

//     // If the user provides an endYear, include it in the queryParams object
//     var endYear = $("#end-year")
//       .val()
//       .trim();

//     if (parseInt(endYear)) {
//       queryParams.end_date = endYear + "0101";
//     }
//     // console.log(queryParams);
//     // Logging the URL so we have access to it for troubleshooting
//     // console.log("---------------\nURL: " + queryURL + "\n---------------");
//     // console.log('this is just the parameters',$.param(queryParams));
//     // console.log(queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
//   }




































// /**
//  * pulls information from the form and build the query URL
//  * @returns {string} URL for NYT API based on form inputs
//  */
// function buildQueryURL() {
//     // queryURL is the url we'll use to query the API
//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//     // Begin building an object to contain our API call's query parameters
//     // Set the API key
//     var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

//     //QUERY PARAMS ************************************************************
//     //************************************************************************
//     // Grab text the user typed into the search input, add to the queryParams object
//     queryParams.q = $("#search-term")
//       .val()
//       .trim();

//     // If the user provides a startYear, include it in the queryParams object
//     var startYear = $("#start-year")
//       .val()
//       .trim();

//     if (parseInt(startYear)) {
//       // this is where it is being added to the queryParams object 
//       queryParams.begin_date = startYear + "0101";
//     }

//     // If the user provides an endYear, include it in the queryParams object
//     var endYear = $("#end-year")
//       .val()
//       .trim();

//     if (parseInt(endYear)) {
//       queryParams.end_date = endYear + "0101";
//     }
//     // console.log(queryParams);
//     // Logging the URL so we have access to it for troubleshooting
//     // console.log("---------------\nURL: " + queryURL + "\n---------------");
//     // console.log('this is just the parameters',$.param(queryParams));
//     // console.log(queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
//   }

//   /**
//    * takes API data (JSON/object) and turns it into elements on the page
//    * @param {object} NYTData - object containing NYT API data
//    */
//   function updatePage(NYTData) {
//     // Get from the form the number of results to display
//     // API doesn't have a "limit" parameter, so we have to do this ourselves
//     var numArticles = $("#article-count").val();
//     // console.log(numArticles)

//     // Log the NYTData to console, where it will show up as an object //ED: this is the reponse
//     console.log(NYTData);
//     console.log("------------------------------------");

//     // Loop through and build elements for the defined number of articles
//     for (var i = 0; i < numArticles; i++) {
//       // Get specific article info for current index
//       var article = NYTData.response.docs[i];

//       // Increase the articleCount (track article # - starting at 1)
//       var articleCount = i + 1;

//       // Create the  list group to contain the articles and add the article content for each
//       var $articleList = $("<ul>");
//       $articleList.addClass("list-group");

//       // Add the newly created element to the DOM
//       $("#article-section").append($articleList);

//       // If the article has a headline, log and append to $articleList
//       var headline = article.headline;
//       var $articleListItem = $("<li class='list-group-item articleHeadline'>");

//       if (headline && headline.main) {
//         console.log(headline.main);  //ED check for the title 
//         $articleListItem.append(
//           "<span class='label label-primary'>" +
//             articleCount +
//             "</span>" +
//             "<strong> " +
//             headline.main +
//             "</strong>"
//         );
//       }

//       // If the article has a byline, log and append to $articleList
//       var byline = article.byline;

//       if (byline && byline.original) {
//         console.log(byline.original);
//         $articleListItem.append("<h5>" + byline.original + "</h5>");
//       }

//       // Log section, and append to document if exists
//       var section = article.section_name;
//       console.log(article.section_name);
//       if (section) {
//         $articleListItem.append("<h5>Section: " + section + "</h5>");
//       }

//       // Log published date, and append to document if exists
//       var pubDate = article.pub_date;
//       console.log(article.pub_date);
//       if (pubDate) {
//         $articleListItem.append("<h5>" + article.pub_date + "</h5>");
//       }

//       // Append and log url
//       $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
//       console.log(article.web_url);

//       // Append the article
//       $articleList.append($articleListItem);
//     }
//   }

//   // Function to empty out the articles
//   function clear() {
//     $("#article-section").empty();
//   }

//   //  .on("click") function associated with the clear button
//   $("#clear-all").on("click", clear);

//   // CLICK HANDLERS
//   // ==========================================================

//   // .on("click") function associated with the Search Button
//   $("#run-search").on("click", function(event) {
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();

//     // Empty the region associated with the articles
//     clear();

//     // Build the query URL for the ajax request to the NYT API
//     var queryURL = buildQueryURL();

//     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
//     // The data then gets passed as an argument to the updatePage function
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(updatePage);
//   });


