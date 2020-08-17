// Calls server to get current day, month, date, and year
var curDay = moment().format('dddd, MMMM Do YYYY');
// var curTime = moment().format('h:mm:ss a');
var curTime = moment().format('hA');
// var myTime = '7:56 am';
console.log(curTime);


// console.log(notTime);
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
var arrayOfTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Creates a table within the container element 
var table = $('<table>').addClass("table");
$(".container").append(table);



// Loop to populate first column with time (hours)
for (i = 0; i < arrayOfTime.length; i++) {
    
    // var arrayVar = arrayOfTime[3]; //[i+1];
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
    td.addClass("hour" + [i]); 


    // Moved from outside code block to inside since referencing values stored within the code block.
    // Creates unique classes for each input field
    var textVal0 = $('.hour0').text();
var textVal1 = $('.hour1').text();
var textVal2 = $('.hour2').text();
var textVal3 = $('.hour3').text();
var textVal4 = $('.hour4').text();
var textVal5 = $('.hour5').text();
var textVal6 = $('.hour6').text();
var textVal7 = $('.hour7').text();
var textVal8 = $('.hour8').text();


// Moved from outside code block to inside since referencing variables stored within the code block.
// Checks if the current time is equal to any of the values stored within hour block.
    if (curTime === textVal0 || curTime === textVal1 || curTime === textVal2 || curTime === textVal3 || curTime === textVal4 || curTime === textVal5 || curTime === textVal6 || curTime === textVal7 || curTime === textVal8 ) {
        inputData.addClass("present");
    } 
    // Checks if the current time is great than any of the values stored within hour block.
    if (textVal0 > curTime || textVal1 > curTime || textVal2 > curTime || textVal3 > curTime || textVal4 > curTime || textVal5 > curTime || textVal6 > curTime || textVal7 > curTime || textVal8 > curTime ) {
        inputData.addClass("past");  
    } 
    // Checks if the current time is less than any of the values stored within hour block.
    if (textVal0 < curTime || textVal1 < curTime || textVal2 < curTime || textVal3 < curTime || textVal4 < curTime || textVal5 < curTime || textVal6 < curTime || textVal7 < curTime || textVal8 < curTime ) {
        // inputData.addClass("future");  
    } 
}



// console.log(textVal5);

// if (curTime === textVal0) {
//     inputData.addClass("present");
//     console.log('yes1');
// } 

// if (textVal0 > curTime) {
//     inputData.addClass("past");
//     console.log('yes2');
// } 

// if (textVal0 < curTime) {
//     inputData.addClass("future");
//     console.log('yes3');
// } 


// if (curTime === textVal0 || curTime === textVal1 || curTime === textVal2 || curTime === textVal3 || curTime === textVal4 || curTime === textVal5 || curTime === textVal6 || curTime === textVal7 || curTime === textVal8 ) {
//     inputData.addClass("present");
// } 

// if (textVal0 > curTime || textVal1 > curTime || textVal2 > curTime || textVal3 > curTime || textVal4 > curTime || textVal5 > curTime || textVal6 > curTime || textVal7 > curTime || textVal8 > curTime ) {
//     inputData.addClass("past");  
// } 

// if (textVal0 < curTime || textVal1 < curTime || textVal2 < curTime || textVal3 < curTime || textVal4 < curTime || textVal5 < curTime || textVal6 < curTime || textVal7 < curTime || textVal8 < curTime ) {
//     inputData.addClass("future");  
// } 

// else if (curTime < textVal){
//     inputData.addClass("future");
// }

// console.log(textVal0 > curTime);

// var a = [];
//   for ( var i = 0; i < textVal.length; i++ ) {
//     a.push( textVal[ i ] );
//   }
// console.log(a);
// for (i = 0; i < arrayOfTime.length; i++) {
//     var tdClass = $('td');
//     tdClass.addClass(arrayOfTime[i]); 
// }
var inputSave = $('.input').val();

// On click of specific save button, data in adjacent field will be saved to local storage
// $('.9AM').click(function () {
//     localStorage.setItem('9AM', JSON.stringify($('.input0').val()));
// });
// $('.10AM').click(function () {
//     localStorage.setItem('10AM', JSON.stringify($('.input1').val()));
// });
// $('.11AM').click(function () {
//     localStorage.setItem('11AM', JSON.stringify($('.input2').val()));
// });
// $('.12PM').click(function () {
//     localStorage.setItem('12PM', JSON.stringify($('.input3').val()));
// });
// $('.1PM').click(function () {
//     localStorage.setItem('1PM', JSON.stringify($('.input4').val()));
// });
// $('.2PM').click(function () {
//     localStorage.setItem('2PM', JSON.stringify($('.input5').val()));
// });
// $('.3PM').click(function () {
//     localStorage.setItem('3PM', JSON.stringify($('.input6').val()));
// });
// $('.4PM').click(function () {
//     localStorage.setItem('4PM', JSON.stringify($('.input7').val()));
// });
// $('.5PM').click(function () {
//     localStorage.setItem('5PM', JSON.stringify($('.input8').val()));
// });

// On click of any save button, any data in the input field(s) will be saved to local storage
$('.glyphicon').click(function () {
    localStorage.setItem('9AM', JSON.stringify($('.input0').val()));
    localStorage.setItem('10AM', JSON.stringify($('.input1').val()));
    localStorage.setItem('11AM', JSON.stringify($('.input2').val()));
    localStorage.setItem('12PM', JSON.stringify($('.input3').val()));localStorage.setItem('1PM', JSON.stringify($('.input4').val()));
    localStorage.setItem('2PM', JSON.stringify($('.input5').val()));
    localStorage.setItem('3PM', JSON.stringify($('.input6').val()));
    localStorage.setItem('4PM', JSON.stringify($('.input7').val()));
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



