var picker = new Pikaday(
{
    field: document.getElementById('datepicker'),
    firstDay: 1,
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020]
});
$(document).ready(function() {
    $("#fixDelTime").hide();
        $("input[name=delTime]").on("change", function() {

            var test = $(this).val();
            if (test==9){
                $("#fixDelTime").show();
            }else {
                $("#fixDelTime").hide();
            }
        });
});