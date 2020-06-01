



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
            
            // testing the arrays outputs 
            // getting all sound Id's from the specific search query 
            // console.log(soundListArr[i]);


            // these are the values we need to get the correct mp3 from the sound Instance Call
            // getting the name of each sound 
            console.log(soundListArr[i].name);
            // getting the id of each sound 
            console.log(soundListArr[i].id);



        }


        $('#submit2').on('click', function () {

            $.ajax({
                url: `https://freesound.org/apiv2/sounds/1234/?&token=${apiKey}`,
                method: 'GET'
            }).then((response) => {

                console.log(response);


            });


        });

    });


});



