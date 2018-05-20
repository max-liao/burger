// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("Hello World");
alert("Hello World");

$(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    var status = $(this).data("newsleep");

    var newDevouredState = {
      devoured: status
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed sleep to", status);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".NEW").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    alert("SUBMIT");
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: $("[name=Devour]:checked").val().trim()
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
