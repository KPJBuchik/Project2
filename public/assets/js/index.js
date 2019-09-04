//Object that contains the items names as keys and the items price as values.
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

//JQuery that triggers when the submit button is press.
$("#submit").on("click", function(e){
  e.preventDefault();
  //Variables which contains the items name and quantity.
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
  //Object that stores the items names and quantity threw the past variables.
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
  };
  // console.log(cart);
  //Variable that contains the past object turn into an array and the keys and values as single arrays inside the big array. Using the console.log below is recommended to understand.
  var items = Object.entries(cart);
  // console.log(items)
  generateList(items, menu);
  //Variable that keeps track of the total price of the customers order.
  var total = 0;
  //Loop in which the quantity and name of the items is use to be multiply with the items prices in the menu object and so giving us the total of the order.
  for (var i = 0; i < items.length; i++){
    //   console.log(items[i]);
      var item = items[i][0];
      // console.log(item);
      var quantity = items[i][1];
      var itemTotal = menu[item] * parseInt(quantity);
      total = total + itemTotal;
      // console.log(itemTotal);
  }
  
  $("#totalPrice").html("Total: $" + total);

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

//Function which dynamically generate html into the menu modul for the items, quantity and price.
function generateList(items, menu) {
  
  let div = $("<div>").appendTo("#itemDisplay")
  

  for (var i =0; i < items.length; i++) {
    var item = items[i][0];
    let test = items[i][1];
    if (test > 0) {
      let para = $("<p>").append("- " + items[i][0]);
      para.appendTo(div);
      var cList = $('<ul>');
      cList.appendTo(div);
      var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .append("Quantity: " + items[i][1])
      li.appendTo(cList);  
      var li1 = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .append("Price: " + menu[item])
      li1.appendTo(cList);  
      
    };
  };

};





