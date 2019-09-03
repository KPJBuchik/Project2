$(function () {

  $(".change-fulfilled").on("click", function (event) {
    var id = $(this).data("id");
    var newFulfill = $(this).data("newfulfill");
    console.log(this)
    var newFulfillState = {
      fulfilled: true
    };

    $.ajax({
      method: "PUT",
      data: newFulfillState,
      url:"api/orders/" + id
    }).then(function(){
      console.log("changed order to" +newFulfill)
    location.reload()
  })
    console.log(newFulfillState)
  });



  $(".delete-order").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax({
          method: "DELETE",
          url: "api/orders/" + id
        }).then(function(data) {


          location.reload();
        });
        console.log("hey"+id)

});

});