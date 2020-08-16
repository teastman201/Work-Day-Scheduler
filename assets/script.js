// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

// var userInput = 

var arrayOfTime = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

// Creates a table within the container element 
var addTable = $(".container").append("<table>");
var addClassTable = $('table').addClass("table");
// var addRow = $('.table').append('<tr>');
// var addClassRow = $('tr').addClass('tRow');
// var addCol = $('.tRow').append('<td></td>');
// $('.tRow').append()

// $('.tRow').append('<input type="text" name="blank"/>');
// $('.tRow').append('<td></td>');

for (i = 0; i < arrayOfTime.length; i++) {
    $('.table').append('<tr>');
    $('tr').addClass('tRow');
    var td1 = $('<td></td>').text(arrayOfTime[i]);
    var td2 = $('<input type="text" name="No Text Content"/>');
    var td3 = $('<td></td>').text('No Text Content');    
    $('tr').append(td1, td2, td3,);
    // $('.tRow').append('<td></td>');
}

// function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML 
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements
  } 

// arrayOfTime[i];

// $("select[name=amount]").change(function() {
//     if ($(this).val() == 'Other') {
//         $("#custom_price").append('<input type="text" name="amount"/>');
//     }
// })



// var timeBlock = $( ".container" ).last();