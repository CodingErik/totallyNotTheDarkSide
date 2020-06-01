// separate



$('.one').text('hello');

let apiKey = 'hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK';

let querySearch;



$('#submit').on('click', function () {
    querySearch = $('.userInput').val();
    console.log('this is the querySearch', querySearch);


    // this give you the a list of id of a specific query search 
    // https://freesound.org/apiv2/search/text/?query=cars&format=api&token=hs78SPDVdG9bSdkeG9sZ6PbBE0rW5vp6ziy1BMvK


    // this gets us the previews for each specific sound id that we search 
    // https://freesound.org/apiv2/sounds/1234/


    $.ajax({
        url: `https://freesound.org/apiv2/search/text/?format=json&query=${querySearch}&token=${apiKey}`,
        method: 'GET'
    }).then((response) => {


        // let 

        console.log(response);


        let id = response.results[0].id

        // console.log(reponse.results);

        // for (let i = 0; i < reponse.results.length; i++) {
        console.log(id);
        //     // console.log(reponse.results[i].name);
        // }







    });


});



$('#submit2').on('click', function () {

    $.ajax({
        url: `https://freesound.org/apiv2/sounds/${id}/&token=${apiKey}`,
        method: 'GET'
    }).then((response) => {

        console.log(response);


    });


});