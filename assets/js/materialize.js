// adding document .ready 
$(document).ready(function () {

    $('.tabs').tabs();

    
    $('.tabs').on('click', populateQuerySearch)



    function populateQuerySearch(){
        
      // empties the previous search before we see the search boxes || buttons 
      $(".newsDiv").empty();
        // for testing
        // console.log('hello');

      // toggle hidingQuery on aside for easy access to query search and card
      $('aside').toggleClass('hidingQuery');
      
      // toggle hidingQuery on section for easy access to query search and card
      $('section').toggleClass('hidingQuery');

    }
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});

// Or with jQuery

$('.dropdown-trigger').dropdown();