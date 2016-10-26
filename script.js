var locations = []; // this array will hold your objects

// object constructor
function State(state, revenue, locationCount) {
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    return this.revenue/this.locationCount;
  }
}
// object instances
var Illinois = new State('IL', 5000, 12);
var Minnesota = new State('MN', 300, 3);
var Nevada = new State ('NV', 25000, 1);

// push object instances to locations array
locations.push(Illinois);
locations.push(Minnesota);
locations.push(Nevada);


// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
