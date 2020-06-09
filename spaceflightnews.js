$(document).ready(function () {
  //add eventlistener on click from drop down menu

  // spaceFlightNews();

  //this returns a predefined lsit of articles
  // function spaceFlightNews() {
  //   $.ajax({
  //     url: `https://spaceflightnewsapi.net/api/v1/articles`,
  //     method: "GET",
  //   }).then((response) => {
  //     for (var i = 0; i < response.docs.length; i++)
  //       console.log(
  //         response.docs[i].title,
  //         response.docs[i].url,
  //         response.docs[i].published_date
  //       );

  //     // console.log(response.media_type);
  //   });
  // }

  // document.getElementById("searchBtn").addEventListener("click");

  $('#run-search').on('click', function (e) {
    e.preventDefault();
    searchSpaceFlightNews();
  })





  // this will add the user defined search term to a search
  function searchSpaceFlightNews() {

    let userInput = $('#keywordSearchInput').val().trim();

    console.log(userInput);

    $.ajax({
      url: `https://spaceflightnewsapi.net/api/v1/articles?search=${userInput}`, //+ FRONTBOX KEYWORD INPUT
      method: "GET",
    }).then((response) => {

      for (var i = 0; i < response.docs.length; i++) {

        let title = response.docs[i].title;
        let link =  response.docs[i].url;
        let pDate =  response.docs[i].published_date;

        console.log(pDate);

        let titleDiv = $('<div>').text(title).css({
          'border': '1px solid blue'
        })
        let linkDiv = $('<div>').text(link).css({
          'border': '1px solid blue'
        })
        let pDateDiv = $('<div>').text(pDate).css({
          'border': '1px solid blue'
        })


        // console.log(response.media_type);

        $('.newsDiv').append(titleDiv);
        $('.newsDiv').append(linkDiv);
        $('.newsDiv').append(pDateDiv);
        $('.newsDiv')

      }
    });
  }; //close on ready


});