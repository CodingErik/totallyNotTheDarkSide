// adding document .ready SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY 
$(document).ready(function () {

  // triggering tabs/slider 
  $('.tabs').tabs();

  // when mouse enter they will be displayed 
  $('.tabs').mouseenter(populateQuerySearch);

  // when mouse leaves they will no longer be displayed 
  $(".search").mouseleave(closeQuerySearch);

  // populateQuerySearch FUNCTION 
  // ******************************************
  function populateQuerySearch() {

    // empties the previous search before we see the search boxes || buttons 
    $(".newsDiv").empty();


    // for testing
    // console.log('hello');

    // if( $('aside').has)

    $('.focus').is( ":focus" )

    // so we are trying hide the query search and the resultDiv if it has already been clicked 
    // without affecting the rest of them? 

    // toggle hidingQuery on aside for easy access to query search and card
    $('.search').removeClass('hidingQuery');

  }
  // ******************************************


  // closeQuerySearch function
  // this hides the querySearch and the news when the user clicks away from it
  // click anywhere in the body 
  // ******************************************
  function closeQuerySearch() {
    // adding the hidingQuery to both search and results when we click away from the are
    $('.search').addClass('hidingQuery');
  }
  // ******************************************



});