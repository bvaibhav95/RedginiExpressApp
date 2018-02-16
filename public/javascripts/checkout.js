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

        cols += '<td class="col-md-2"><input id="" class="form-control form-control-sm cake_id" type="text"></td>'+
        '<td class="col-md-3">Exotic black forest</td>'+
        '<td class="col-md-1">Rs.360</td>'+
        '<td class="col-md-2">'+
            '<div class="form-group">'+
                '<select class="form-control form-control-sm" id="available_cake_weight">'+
                '<option>1</option>'+
                '<option>2</option>'+
                '<option>3</option>'+
                '<option>4</option>'+
                '<option>5</option>'+
                '</select>'+
            '</div>'+
        '</td>'+
        '<td class="col-md-3">'+
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
    var cakeIDs = [
        "BF001",
        "BF002",
        "BF003",
        "BS001",
        "BS002",
        "BS003",
        "CC001",
      ];
      $(".cake_id").autocomplete({
        source: cakeIDs
      });