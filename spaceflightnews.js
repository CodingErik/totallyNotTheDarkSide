$(document).ready(function () {
  //add eventlistener on click from drop down menu

  spaceFlightNews();

  //this returns a predefined lsit of articles
  function spaceFlightNews() {
    $.ajax({
      url: `https://spaceflightnewsapi.net/api/v1/articles`,
      method: "GET",
    }).then((response) => {
      for (var i = 0; i < response.docs.length; i++)
        console.log(
          response.docs[i].title,
          response.docs[i].url,
          response.docs[i].published_date
        );

      // console.log(response.media_type);
    });
  }

  document.getElementById("searchBtn").addEventListener("click");
  // this will add the user defined search term to a search
  function searchSpaceFlightNews() {
    $.ajax({
      url: `https://spaceflightnewsapi.net/api/v1/articles?search=`, //+ FRONTBOX KEYWORD INPUT

      method: "GET",
    }).then((response) => {
      for (var i = 0; i < response.docs.length; i++)
        console.log(
          response.docs[i].title,
          response.docs[i].url,
          response.docs[i].published_date
        );

      // console.log(response.media_type);
    });
  }
}); //close on ready
