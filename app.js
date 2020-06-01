



$('.one').text('hello');

let apiKey = 'hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK';

let querySearch;



$('#submit').on('click', function () {
    // here we take the user input and use it as our query value 
    querySearch = $('.userInput').val();
    
    // here we test that out query value is correct
    console.log('this is the querySearch', querySearch);


    // this give you the a list of id of a specific query search 
    // https://freesound.org/apiv2/search/text/?query=cars&format=api&token=hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK


    // this gets us the previews for each specific sound id that we search 
    // https://freesound.org/apiv2/sounds/1234/


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
            
            // testing the arrays outputs 
            // getting all sound Id's from the specific search query 
            // console.log(soundListArr[i]);

            // these are the values we need to get the correct mp3 from the sound Instance Call
            
            // test for getting the name of each sound 
            // console.log(soundListArr[i].name);

            // test for getting the id of each sound 
            // console.log(soundListArr[i].id);

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
                // console.log(response);

                // this get the specific hq mp3
                // console.log(response.previews); 
                ///EXTRAS// get the wave from each one of the files that we have a visual 
                ///EXTRAS// get a download button going for each these guys 


                // assign variable to link property (hq sound link)
                let soundLink = response.previews['preview-hq-mp3'];

                // now we have the specific link for the mp3 working!
                console.log('this is the actual link to the mp3',soundLink);

                $('.results').append('<div>'+ soundName, soundIds, soundLink +'</div>')
                $('.results').append('<a href=""+soundLink+"">chewing gum </a>');
                

            });
        }


        


        // $('#submit2').on('click', function () {

        //     // $.ajax({
        //     //     url: `https://freesound.org/apiv2/sounds/1234/?&token=${apiKey}`,
        //     //     method: 'GET'
        //     // }).then((response) => {

        //     //     console.log(response);


        //     // });


        // });

    });


});



// https://freesound.org/data/previews/400/400402_5121236-hq.mp3

let audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/Whooooooo.wav");

// Theme Button
$("#play").on("click", function() {
  audioElement.play();
});
$("#pause").on("click", function() {
  audioElement.pause();
});




