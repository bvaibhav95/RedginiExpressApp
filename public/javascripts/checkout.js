var picker = new Pikaday(
{
    field: document.getElementById('datepicker'),
    firstDay: 1,
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020]
});
 $("#fixDelTime").hide();
$("input[name=delTime]").on("change", function() {
    var test = $(this).val();
    if (test==9){
        $("#fixDelTime").show();
    }else {
        $("#fixDelTime").hide();
    }
});
// Add more cake code...
    var counter = 0;
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td class="col-md-3"><div class="form-group">'+
            '<select class="form-control form-control-sm" id="cake_ids">'+
                '<option>Select</option>'+
                '{{# each cakeIds}}'+
                    '<option>{{this.id}}</option>'+
                '{{/each}}'+
            '</select>'+
        '</div></td>'+
        '<td class="col-md-3">{{cakeDeta}}Choose Cake ID</td>'+
        '<td class="col-md-1">Rs.X</td>'+
        '<td class="col-md-2">'+
            '<div class="form-group">'+
                '<select class="form-control form-control-sm" id="available_cake_weight">'+
                    '<option>?</option>'+
                '</select>'+
            '</div>'+
        '</td>'+
        '<td class="col-md-2">'+
            '<input id="" class="form-control form-control-sm" type="text">'+
        '</td>'; 

        cols += '<td><input id="removeCake" type="button" class="ibtnDel btn btn-sm" value="X"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });

// Cake ID autocomplete

    $("#cake_ids").change(function(){
        $('#available_cake_weight').find('option').remove();
        if($(this).val() == 'select'){
            $('#cake_name').val('Choose ID');
            $('#cake_price').val('Rs.X /-');
        }else{
            $.ajax({
                type: "GET",
                url:"/detailsFromId/"+$(this).val(),
                success: function(data){
                    $('#cake_name').val(data.name);
                    $('#cake_price').val('Rs.'+data.halfKgPrice+'/-');
                    for(var i=0; i<data.availableWeights.length; i++){
                        $('#available_cake_weight').append('<option value="' + data.availableWeights[i] + '">' + data.availableWeights[i] + '</option>');
                    }
                }
            });
        }
    });

    $("#available_cake_weight").change(function(){
       $.ajax({
            type: "GET",
            url:"/detailsFromId/"+$('#cake_ids').val(),
            success: function(data){
                if(!isNaN($('#available_cake_weight').val())){
                    $('#cake_price').val('Rs.'+data.halfKgPrice * $('#available_cake_weight').val() * 2+'/-');
                }else{
                    $('#cake_price').val('Rs.X');
                }
            }
        }); 
    });