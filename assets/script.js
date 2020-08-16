// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));


var createTable = $(".container").append("<table>");
$('table').addClass("myClass");
// $( "p" ).addClass( "myClass yourClass" );

// console.log(myClass);


// var timeBlock = $( ".container" ).last();