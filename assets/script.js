// Calls server to get current day, month, date, and year to display in header
var curDay = moment().format('dddd, MMMM Do YYYY');

// current time in 24 hours.
var curTime = parseInt(moment().format('H'));

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

// Array to hold work day time (hours).
var arrayOfTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Creates a table within the container element 
var table = $('<table>').addClass("table");
$(".container").append(table);

// Loop to populate first column with time (hours)
for (i = 9; i < 18; i++) {

    // Dynamically creates table row and table data.
    var tr = $('<tr></tr>');
    var td = $('<td></td>');
    

    // Creates button, adds bootstrap classes to button. As the loop iterates it adds a class to the button relative to the array item.
    var btn1 = $('<button></button>');
    btn1.addClass('glyphicon glyphicon-floppy-save saveBtn');
    btn1.addClass(arrayOfTime[i]); 

    // Dynamically creates an input field
    var inputData = $('<input type="text"/>');
    // Dynamically addes a unique class to the input field.
    inputData.addClass("input" + [i]);
    // Dynamically adds a unverisal class to all input fields.
    inputData.addClass("input");

    // Checks if the current time is equal to, less than, or greater than the set value
    if (i < curTime) {
        inputData.addClass('past')
    } else if (i === curTime) {
        inputData.addClass('present')
    } else {
        inputData.addClass('future')
    }

    // Dynamically appends table data, input field, and button to the table row.    
    $(tr).append(td, inputData, btn1);

    // Dynamically appends the table row to the table
    $(table).append(tr);    

    // Dynamically adds 2 bootstrap classes to all table data.
    $('td').addClass('time-block hour');
    
    // Dynamically adds a unique class to each table data based off of the array.
    td.addClass("hour" + [i]);
    
    // Sets text information of the table data
    var textVal0 = $('.hour9').text('9AM');
    var textVal1 = $('.hour10').text('10AM');
    var textVal2 = $('.hour11').text('11AM');
    var textVal3 = $('.hour12').text('12PM');
    var textVal4 = $('.hour13').text('1PM');
    var textVal5 = $('.hour14').text('2PM');
    var textVal6 = $('.hour15').text('3PM');
    var textVal7 = $('.hour16').text('4PM');
    var textVal8 = $('.hour17').text('5PM');

    // Saves data in input field to localstorage with a key referencing the hour.
    $('.glyphicon').click(function () {
        localStorage.setItem('9', JSON.stringify($('.input9').val()));
        localStorage.setItem('10', JSON.stringify($('.input10').val()));
        localStorage.setItem('11', JSON.stringify($('.input11').val()));
        localStorage.setItem('12', JSON.stringify($('.input12').val()));
        localStorage.setItem('13', JSON.stringify($('.input13').val()));
        localStorage.setItem('14', JSON.stringify($('.input14').val()));
        localStorage.setItem('15', JSON.stringify($('.input15').val()));
        localStorage.setItem('16', JSON.stringify($('.input16').val()));
        localStorage.setItem('17', JSON.stringify($('.input17').val()));
    });

}

