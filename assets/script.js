// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

// Creates a table within the container element 
var addTable = $(".container").append("<table>");
var addClassTable = $('table').addClass("table");
var addRow = $('.table').append('<tr>');
var addClassRow = $('tr').addClass('tRow');
var addCol = $('.tRow').append('<td></td>, <td></td>, <td></td>');






// var timeBlock = $( ".container" ).last();