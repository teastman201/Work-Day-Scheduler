// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');
var curTime = moment().format('h:mm:ss a');
var notTime = moment().format('hA');
var myTime = '7:56 am';


console.log(notTime);
// console.log(myTime);
// if (notTime != myTime){
//     alert("message");
// } else {
//     alert("they are the same");
// }


// var maxTime = moment('2020-01-01').min('2016-02-01').format()
// "2016-02-01T00:00:00-06:00"

// Creates new p element and adds date information to the text area
var today = $('p').last().text(JSON.stringify(curDay));

// Array to hold work day time (hours).
var arrayOfTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

// Creates a table within the container element 
var table = $('<table>').addClass("table");
$(".container").append(table);

// Loop to populate first column with time (hours)
for (i = 0; i < arrayOfTime.length; i++) {
    var arrayVar = arrayOfTime[3]; //[i+1];
    var tr = $('<tr></tr>');
    // tr.addClass('row');
    var td = $('<td></td>').text(arrayOfTime[i]);
    var inputData = $('<input type="text"/>');
    inputData.addClass("input" + [i]);
    inputData.addClass("input");
    var btn1 = $('<button></button>');
    btn1.addClass('glyphicon glyphicon-floppy-save saveBtn');
    btn1.addClass(arrayOfTime[i]); //arrayVar
    $(tr).append(td, inputData, btn1);
    $(table).append(tr);
    $('td').addClass('time-block hour');
    console.log(td);
}

// for (i = 0; i < arrayOfTime.length; i++) {
//     var tdClass = $('td');
//     tdClass.addClass(arrayOfTime[i]); 
// }
var inputSave = $('.input').val();
$('.9AM').click(function () {
    localStorage.setItem('9AM', JSON.stringify($('.input0').val()));
});
$('.10AM').click(function () {
    localStorage.setItem('10AM', JSON.stringify($('.input1').val()));
});
$('.11AM').click(function () {
    localStorage.setItem('11AM', JSON.stringify($('.input2').val()));
});
$('.12PM').click(function () {
    localStorage.setItem('12PM', JSON.stringify($('.input3').val()));
});
$('.1PM').click(function () {
    localStorage.setItem('1PM', JSON.stringify($('.input4').val()));
});
$('.2PM').click(function () {
    localStorage.setItem('2PM', JSON.stringify($('.input5').val()));
});
$('.3PM').click(function () {
    localStorage.setItem('3PM', JSON.stringify($('.input6').val()));
});
$('.4PM').click(function () {
    localStorage.setItem('4PM', JSON.stringify($('.input7').val()));
});
$('.5PM').click(function () {
    localStorage.setItem('5PM', JSON.stringify($('.input8').val()));
});

// $('.input:odd').css('background-color', '#5F9EA0');
// $('.input:even').css('background-color', '#8FBC8F');
// $('.glyphicon').css('background-color', '#1E90FF');

    // console.log($('.input').val());
    // $('.glyphicon').click(function() {
        // $.each([ 'car', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ], function(index, value) {
        //     alert( index + ": " + value );
        // });
        // var2 = $(inputData).text();        
        // localStorage.setItem(arrayVar, JSON.stringify(inputSave));
        // alert('Your data was saved.');
        // console.log(var2);
    // });



    // add mouseover event



