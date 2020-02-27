// Задать сегодняшнее число в качестве минимума
document.getElementById('return-date').min = new Date().toISOString().split("T")[0];
document.getElementById('departure-date').min = new Date().toISOString().split("T")[0];

$('.station_switcher').click(function(){
    var from = $('#from_tr').val();
    var to = $('#to_tr').val();
    $('#from_tr').val(to);
    $('#to_tr').val(from);
    });

// Переключение радио кнопок
$( "#return-date" ).prop( "disabled", true );
$("input:radio[name='way']").click(function() {
    if($('#return').is(':checked')) { 
        $( "#return-date" ).prop( "disabled", false );
    }
    else
    $( "#return-date" ).prop( "disabled", true );
 });

// Проверка корректности введенных дат
 function checkDate() {
    let fromDate = new Date($('#departure-date').val()); 
    let returnDate = new Date($('#return-date').val()); 
    
    if($('#return').is(':checked')) { 
        if(Date.parse(fromDate) < Date.parse(returnDate)) {
            return true;
        }
        else{
            return false;
        }
    }
}

$('#searchTicket').submit(function (event) {
    'use strict';
    $('.invalid-error', $(this)).remove();
    
    let submit_form = true;

    if (checkDate()==false){
        $("#dates").after('<small class="invalid-error form-text text-muted alert alert-danger mb-2">Wrong dates</small>');
        submit_form = false;
    }

    if(!submit_form) event.preventDefault();
});