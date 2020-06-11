// adding document .ready 
$(document).ready(function () {

    $('.tabs').tabs();

    
    $('.tabs').on('click', populateQuerySearch);


    // $('body').on('click', closeQuerySearch);

    // maybe instead when the mouse leaves the area 


    $( ".search" ).mouseleave(closeQuerySearch);



    function populateQuerySearch(){
        
      // empties the previous search before we see the search boxes || buttons 
      $(".newsDiv").empty();

      
        // for testing
        // console.log('hello');

      // if( $('aside').has)


      // so we are trying hide the query search and the resultDiv if it has already been clicked 
      // without affecting the rest of them? 

      // toggle hidingQuery on aside for easy access to query search and card
      $('.search').removeClass('hidingQuery');

    }

    // closeQuerySearch function
    // this hides the querySearch and the news when the user clicks away from it
    // click anywhere in the body 
    // ******************************************
    function closeQuerySearch(){
      // adding the hidingQuery to both search and results when we click away from the are
      $('.search').addClass('hidingQuery');
    }
    // ******************************************


    
});