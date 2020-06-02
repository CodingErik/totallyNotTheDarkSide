// I usually start with the design and build the look first 
// then i start working on the fucntionality of the website 





// $('body').css({
//     "background-color": "darkblue"
// })




// $('.one').text('hello');
// hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK
let apiKey = '4i3fqXUgYadjWrlBHdWKd0jfbO9wNCTw6OeQLPsT';

let querySearch;


// SEARCH QUERY SUBMIT BUTTON*** 
//********************************************** */
$('#submit').on('click', function () {

    //clear the last history list 
    deleteHistory();


    // here we take the user input and use it as our query value 
    querySearch = $('.userInput').val();

    // here we test that out query value is correct
    console.log('this is the querySearch', querySearch);


    // this give you the a list of id of a specific query search 
    // https://freesound.org/apiv2/search/text/?query=cars&format=api&token=hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK


    // this gets us the previews for each specific sound id that we search 
    // https://freesound.org/apiv2/sounds/1234/

    // calling the soundRequestAjax to get the query request
    soundRequestAjax(querySearch);




});
//********************************************** */

// SoundRequestAjax  MAKES A REQUEST TO THE API
// TAKES ONE PARAMETER, THE querySearch
//********************************************** */
function soundRequestAjax(querySearch){

    $.ajax({
        url: `https://freesound.org/apiv2/search/text/?format=json&query=${querySearch}&token=${apiKey}`,
        method: 'GET'
    }).then((response) => {

        // testing ajax request
        // console.log(response);

        // Assigning this variable 
        // this is the array of sound objects that is returned by the call
        let soundListArr = response.results;

        // looping throught the the soundListArr 
        for (let i = 0; i < soundListArr.length; i++) {

            // this gives the specific amount of results that we should be expecting
            console.log(soundListArr.length);

            {
                // testing the arrays outputs 
                // getting all sound Id's from the specific search query 
                // console.log(soundListArr[i]);

                // these are the values we need to get the correct mp3 from the sound Instance Call

                // test for getting the name of each sound 
                // console.log(soundListArr[i].name);

                // test for getting the id of each sound 
                // console.log(soundListArr[i].id);
            }

            // this variable will hold the sound name 
            let soundName = soundListArr[i].name;
            // this variable will hold the sound Id 
            let soundIds = soundListArr[i].id;

            // we need to display the searched audio files as html elements on the website 
            // for each of the sound Id's we need to do a ajax call so that we can have all of the 
            // audios show up on the page 
            $.ajax({
                url: `https://freesound.org/apiv2/sounds/${soundIds}/?&token=${apiKey}`,
                method: 'GET'
            }).then((response) => {

                // this gets the sound instance object of each of sounds from the array list 
                // of the specified search query 
                console.log(response);


                // this get the specific hq mp3
                // console.log(response.previews); 
                ///EXTRAS// get the wave from each one of the files that we have a visual 
                ///EXTRAS// get a download button going for each these guys 

                // testing download
                console.log(response.download);
                let downLoad = response.download;

                // assign variable to link property (hq sound link)
                let soundLink = response.previews['preview-hq-mp3'];

                // now we have the specific link for the mp3 working!
                // console.log('this is the actual link to the mp3',soundLink);

                // $('.results').append('<div>'+ soundName, soundIds +'</div>')
                // $('.results').append('<button class=" btn btn-outline-secondary btn-link soundPlay" href='+soundLink+'>chewing gum </button>');

                // calling the prepend function 
                // this function takes two arguments the soundLink and the soundName
                prepend(soundLink, soundName, downLoad);


            });
        }

    });
}
//********************************************** */

// PREPEND FUNCTION 
// this function takes in two parameters the soundLink and the soundName
// and prepends them to **elements** in the page 
//********************************************** */
function prepend(soundLink, soundName) {
    // this function prepends each sound selection 
    // prependding search entry to results div

    // building div for each
    //--------------------------------------------
    let div = $('<div class="playOrPause"></div>');
    // putting the button 
    let name = $('<button value=' + soundLink + '>' + soundName + '</button> ');
    name.css({ 'color': 'red' })
    // placing a play button
    let playBtn = $('<button class="btn btn-outline-secondary play ">play</button>');
    // placing a pause button 
    // let pause = $('<button class="btn btn-outline-secondary pause ">pause</button>')
    // making a download button 
    // let downloadbtn = $('<button class="btn btn-outline-secondary download ">download</button>');
    //--------------------------------------------

    //  here we append all elements to the main div 
    //-------------------
    div.append(name);
    div.append(playBtn);
    // div.append(downloadbtn);
    // div.append(pause);
    //-------------------


    // here we append the div to the results container 
    //-------------------
    $('.results').append(div);
    //-------------------

}
//********************************************** */

// THIS DELETES THE LIST THAT WAS LAST CLICKED 
// so it can make room for the next request
//********************************************** */
function deleteHistory() {

    // empties local storage
    // localStorage.clear();

    // empties the history array
    // historyArr = [];

    // empties the searchHistory div 
    $('.results').empty();

}
//********************************************** */


//RESULT'S CLICK CONTAINER //SOUND SENDER **** URL 
// here we are targetting the container div with the class results
// then we are getting the src for the specific event target that was clicked   
//********************************************** */
$('.results').on('click', function (e) {

    // THIS CLICK FUNCTION MIGHT HAVE TO CALLED SOUND SENDER 
    // this is the url that need to be sent to the player so that it can play this sound 
    console.log($(e.target).val());

    // we have to find a way to send this url from each file to the player

    {

        {
            // testing getting the URL of the button
            // -------------------------------------- 

            // console.log($(e.target).val());
            // the vanilla java way 
            // console.log(e.target.value);

            // testing targetting the play button to test 
            // console.log($(e.target).hasClass('play'));

            // testing targetting the pause button to test 
            // console.log($(e.target).hasClass('pause'));
        }

        //HERE WE TESTED THAT THE AUDIO IS WORKING NOW THAT IT IS WORKING WE NO LONGER NEED THIS
        // WE JUST HAVE TO SEND URL TO THE PLAYER 
        {
            // this listens for the play button 
            // if ($(e.target).hasClass('play') === true) {
            //     console.log('this is the play button');
            //     let audioElement = document.createElement("audio");
            //     audioElement.setAttribute("src", $(e.target).prev().val());

            //     audioElement.play();
            //     // console.log(audioElement.play());

            //     // console.log('if i see this the this is responding to the play button being pressed')
            //     console.log('this should be the url', $(e.target).prev().val());
            // }
        }
        // pause button is here 
        {
            // this listens for the pause button 
            // if ($(e.target).hasClass('pause') === true) {
            //     console.log('this is the pause button');
            //     let audioElement = document.createElement("audio");
            //     audioElement.setAttribute("src", $(e.target).prev().prev().val());

            //     audioElement.pause();

            //     // console.log('if i see this the this is responding to the pause button being pressed')
            //     console.log('this should be the url', $(e.target).prev().prev().val());
            // }
        }

    }

});
//********************************************** */



let audioElement = document.createElement("audio");
audioElement.setAttribute("src", "audio/Whooooooo.wav");

// Theme Button
$("#play").on("click", function () {
    audioElement.play();
    console.log(this);
});
$("#pause").on("click", function () {
    audioElement.pause();
    console.log(this);
});




