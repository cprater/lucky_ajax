$(document).ready(function () {

  $('form').on("submit", function(event) {
    event.preventDefault();

    var url = $(this).attr("action")
    var value = Math.floor((Math.random() * 5) + 1);

    console.log(url);
    console.log(value);
    $.ajax({
      method: "post",
      url: url,
      data: {"value": value},
      success: function(serverResponse) {
        $("#die").html(serverResponse);
      }
    });
  });
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
});
