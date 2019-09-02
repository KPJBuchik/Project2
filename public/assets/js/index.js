var menu = 
  {
    tamago_egg: 10,
    california_roll: 10,
    futomaki_roll: 10,
    tekka_roll: 10,
    ikura_roe: 10,
    uni_sea: 10,
    sake_salmon: 10,
    saba_mackerel: 10,
    maguro_tuna: 10,
    hamachi_yellowtail: 10,
    ebi_shrimp: 10,
    anago_eel: 10,
  };


$("#submit").on("click", function(e){
  e.preventDefault();
  console.log("order submitted");
  var tamago_egg = $('input[name=tamago_egg]').val();
  var california_roll = $('input[name=california_roll]').val();
  var futomaki_roll = $('input[name=futomaki_roll]').val();
  var tekka_roll = $('input[name=tekka_roll]').val();
  var ikura_roe = $('input[name=ikura_roe]').val();
  var uni_sea = $('input[name=uni_sea]').val();
  var sake_salmon = $('input[name=sake_salmon]').val();
  var saba_mackerel = $('input[name=saba_mackerel]').val();
  var maguro_tuna = $('input[name=maguro_tuna]').val();
  var hamachi_yellowtail = $('input[name=hamachi_yellowtail]').val();
  var ebi_shrimp = $('input[name=ebi_shrimp]').val();
  var anago_eel = $('input[name=anago_eel]').val();
  var cart = {
    tamago_egg, 
    california_roll,
    futomaki_roll,
    tekka_roll,
    ikura_roe,
    uni_sea,
    sake_salmon,
    saba_mackerel,
    maguro_tuna,
    hamachi_yellowtail,
    ebi_shrimp,
    anago_eel
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

