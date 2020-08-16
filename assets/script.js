// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

var arrayOfTime = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

// Creates a table within the container element 
var table = $('<table>').addClass("table");
$(".container").append(table);


    for (i = 0; i < arrayOfTime.length; i++) {
        var var1 = arrayOfTime[i];
         var tr = $('<tr></tr>');
         var td1 = $('<td></td>').text(arrayOfTime[i]);
         var td2 = $('<input type="text"/>');
         var td3 = $('<button></button>');
        $(tr).append(td1, td2, td3);
        $(table).append(tr);
        td3.addClass('glyphicon glyphicon-floppy-save');
        td2.addClass('input');
    }

    
    $('.glyphicon').click(function() {
        var1 = $('td').text();
        var inputSave = $('.input').val();
        localStorage.setItem(var1, JSON.stringify(inputSave));
        // alert('Your data was saved.');
    });

    // add mouseover event

    // add separate button to clear local storage

    console.log(var1);
     