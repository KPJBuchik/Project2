var menu = [
  {
    item: "hamachi yellowtail",
    price: "10"
  }
];

$("#submit").on("click", function(e){
  e.preventDefault();
  console.log("order submitted");
  var tamago_egg = $('input[name=tamago_egg]').val();
  var california_roll = $('input[name=california_roll]').val();
  var cart = {
    tamago_egg, 
    california_roll,
  }
  
  console.log(cart);
});

//This JQuery is to make the quantity buttons work.
jQuery(document).ready(function(){
  // This button will increment the value
  $('.qtyplus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      console.log(fieldName);
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
});





// var cart = {
//   hamachi_roll: 2,
//   california_roll: 3
// };

// var results = Object.values(cart);
// results
// var total = results.reduce((a, b) => a + b)
// total

// var times10 = results.map(item => item * 10);
// times10

