$(function () {

  $(".change-fulfilled").on("click", function (event) {
    var id = $(this).data("id");
    var newFulfill = $(this).data("newfulfill");

    var newFulfillState = {
      fulfilled: true
    };



    // Send the PUT request.
    $.ajax("/api/orders/" + id, {
      type: "PUT",
      data: newFulfillState
    }).then(
      function () {
        console.log("changed fulfilled to", newFulfill);
        location.reload();
      }
    );

  });



  $(".delete-order").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/orders/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted order", id);
        location.reload();
      }
    );
  });

});