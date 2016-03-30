$(document).ready(function(){

  $('#cube-div').empty();

  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '10', '5');
    addCube('30', '0', '10', '5');
    addCube('50', '0', '10', '5');
    addCube('70', '0', '10', '5');
  }, 1000);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '20', '10');
    addCube('30', '0', '20', '10');
    addCube('50', '0', '20', '10');
    addCube('70', '0', '20', '10');
  }, 1250);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '30', '20');
    addCube('30', '0', '30', '20');
    addCube('50', '0', '30', '20');
    addCube('70', '0', '30', '20');
  }, 1500);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '40', '30');
    addCube('30', '0', '40', '30');
    addCube('50', '0', '40', '30');
    addCube('70', '0', '40', '30');
  }, 1750);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '50', '40');
    addCube('30', '0', '50', '40');
    addCube('50', '0', '50', '40');
    addCube('70', '0', '50', '40');
  }, 2000);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '60', '50');
    addCube('30', '0', '60', '50');
    addCube('50', '0', '60', '50');
    addCube('70', '0', '60', '50');
  }, 2250);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '70', '60');
    addCube('30', '0', '70', '60');
    addCube('50', '0', '70', '60');
    addCube('70', '0', '70', '60');
  }, 2500);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '80', '60');
    addCube('30', '0', '80', '60');
    addCube('50', '0', '80', '60');
    addCube('70', '0', '80', '60');
  }, 2750);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '90', '60');
    addCube('30', '0', '90', '60');
    addCube('50', '0', '90', '60');
    addCube('70', '0', '90', '60');
  }, 3000);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '100', '50');
    addCube('30', '0', '100', '50');
    addCube('50', '0', '100', '50');
    addCube('70', '0', '100', '50');
  }, 3250);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '110', '40');
    addCube('30', '0', '110', '40');
    addCube('50', '0', '110', '40');
    addCube('70', '0', '110', '40');
  }, 3500);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '120', '30');
    addCube('30', '0', '120', '30');
    addCube('50', '0', '120', '30');
    addCube('70', '0', '120', '30');
  }, 3750);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '130', '20');
    addCube('30', '0', '130', '20');
    addCube('50', '0', '130', '20');
    addCube('70', '0', '130', '20');
  }, 4000);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '140', '10');
    addCube('30', '0', '140', '10');
    addCube('50', '0', '140', '10');
    addCube('70', '0', '140', '10');
  }, 4250);
  setTimeout(function(){
    $('#cube-div').empty();
    addCube('10', '0', '150', '5');
    addCube('30', '0', '150', '5');
    addCube('50', '0', '150', '5');
    addCube('70', '0', '150', '5');
  }, 4500);
  setTimeout(function() {
    $('#cube-div').empty();
  }, 4750);
});

function addCube (x, y, z, height) {
  var $cube = $('<a-cube>');
  var $addedCube = $('.added-cube');
  $cube.attr('width', '10');
  $cube.attr('depth', '10');
  $cube.attr('height', '' + height + '');
  $cube.attr('position', '' + x + ' ' + y + ' ' + z + '');
  $cube.attr('color', '#999');
  $cube.attr('class', 'added-cube');
  $('#cube-div').append($cube);


}
