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
        td2.addClass("input" + [i]);
         var td3 = $('<button></button>');
         td3.addClass('glyphicon glyphicon-floppy-save');
         td3.addClass(var1);
        $(tr).append(td1, td2, td3);
        $(table).append(tr);
    }
        
    // for (i = 0; i < arrayOfTime.length; i++) {
    //     var tdClass = $('td');
    //     tdClass.addClass(arrayOfTime[i]); 
    // }
    var inputSave = $('.input').val();
    $('.9AM').click(function(){ 
        localStorage.setItem('9AM', JSON.stringify($('.input0').val()));
    });
    $('.10AM').click(function(){
        localStorage.setItem('10AM', JSON.stringify($('.input1').val()));
    });
    $('.11AM').click(function(){
        localStorage.setItem('11AM', JSON.stringify($('.input2').val()));
    });
    $('.12PM').click(function(){
        localStorage.setItem('12PM', JSON.stringify($('.input3').val()));
    });
    $('.1PM').click(function(){
        localStorage.setItem('1PM', JSON.stringify($('.input4').val()));
    });
    $('.2PM').click(function(){
        localStorage.setItem('2PM', JSON.stringify($('.input5').val()));
    });
    $('.3PM').click(function(){
        localStorage.setItem('3PM', JSON.stringify($('.input6').val()));
    });
    $('.4PM').click(function(){
        localStorage.setItem('4PM', JSON.stringify($('.input7').val()));
    });
    $('.5PM').click(function(){
        localStorage.setItem('5PM', JSON.stringify($('.input8').val()));
    });    
    // console.log($('.input').val());
    // $('.glyphicon').click(function() {
        // $.each([ 'car', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ], function(index, value) {
        //     alert( index + ": " + value );
        // });
        // var2 = $(td2).text();        
        // localStorage.setItem(var1, JSON.stringify(inputSave));
        // alert('Your data was saved.');
        // console.log(var2);
    // });



    // add mouseover event

  
    
     