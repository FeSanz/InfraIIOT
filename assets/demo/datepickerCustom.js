$(function () {
    $("#startDateValue").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        minDate: "2021-08-01",
        maxDate: "0"
    });
    
    $("#endDateValue").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        minDate: "2021-08-01",
        maxDate: "0"
    });
    
});
