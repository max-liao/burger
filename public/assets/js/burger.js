// Make sure we wait to attach our handlers until the DOM is fully loaded.
// console.log("Hello World");
// $("#submit").on("click", function(event) {
//   alert("Hello World");
// });



// $(".devour").on("click", function(event) {
  // alert("JS On");
// });

$(function() {
  $(".devour").on("click", function(event) {
    // alert("CLICK");
    var id = $(this).data("id");
    var status = $(this).data("devoured");

    var newDevouredState = {
      devoured: status
    };
    // alert(newDevouredState);


    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        // console.log("changed sleep to", status);
        alert("DEVOURED");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addburger").on("click", function(event) {
    debugger;
    // alert("SUBMIT");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: $("[name=Devour]:checked").val().trim()
    };

    // alert(newBurger.name);/
    // alert(newBurger.devoured);

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        alert("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
