// adding document .ready SO THAT THIS FIRES ONLY WHEN THE DOCUMENT IS READY
$(document).ready(function () {
  // triggering tabs/slider
  $(".tabs").tabs();

  // when mouse enter they will be displayed
  $(".tabs").mouseenter(populateQuerySearch);

  // when tab is clicked the newsDiv will clear
  $(".tabs").on("click", clearNewsDiv);

  // when mouse leaves they will no longer be displayed
  // $(".search").mouseleave(closeQuerySearch);

  // populateQuerySearch FUNCTION
  // ******************************************
  function populateQuerySearch() {
    // for testing
    // console.log('hello');

    $(".focusNew").attr("placeholder", "");
    $(".focusHub").attr("placeholder", "");

    M.updateTextFields();

    // toggle hidingQuery on aside for easy access to query search and card
    $(".search").removeClass("hidingQuery");
  }
  // ******************************************

  // clearNewsDiv FUNCTION
  // when a new tab is clicked the last input is cleared
  // ******************************************
  function clearNewsDiv() {
    // empties the previous search before we see the search boxes || buttons
    $(".newsDiv").empty();
  }
  // ******************************************

  // closeQuerySearch function
  // this hides the querySearch and the news when the user clicks away from it
  // click anywhere in the body
  // ******************************************
  // function closeQuerySearch() {
  // adding the hidingQuery to both search and results when we click away from the are
  // $('.search').addClass('hidingQuery');
  // }
  // ******************************************
});
