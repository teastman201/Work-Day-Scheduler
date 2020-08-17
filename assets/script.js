// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

// Array to hold work day time (hours).
var arrayOfTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Creates a table within the container element 
var table = $('<table>').addClass("table");
$(".container").append(table);

// Loop to populate first column with time (hours)
    for (i = 0; i < arrayOfTime.length; i++) {
        var var1 = arrayOfTime[i];
         var tr = $('<tr></tr>');
         var td1 = $('<td></td>').text(arrayOfTime[i]);
         var td2 = $('<input type="text"/>');
         td2.addClass('input');
         td1.addClass(var1);
         var td3 = $('<button></button>');
         td3.addClass('glyphicon glyphicon-floppy-save');
        $(tr).append(td1, td2, td3);
        $(table).append(tr);
    }
        
    // for (i = 0; i < arrayOfTime.length; i++) {
    //     var tdClass = $('td');
    //     tdClass.addClass(arrayOfTime[i]); 
    // }
    
    $('.glyphicon').click(function() {


        // $.each([ 'car', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ], function(index, value) {
        //     alert( index + ": " + value );
        // });
        var2 = $(td2).text();
        var inputSave = $('.input').val();
        localStorage.setItem(var1, JSON.stringify(inputSave));
        // alert('Your data was saved.');
        console.log(var2);
    });

    // add mouseover event

    // add separate button to clear local storage

    
     