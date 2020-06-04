//add on ready function
//add eventlistener on click from drop down menu

spaceFlightNews();

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
