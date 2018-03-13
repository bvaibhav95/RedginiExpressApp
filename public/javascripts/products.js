$('.qtyplus').click(function(e){
    e.preventDefault();
    input_element = $(this).parent().find('.qty');
    var currentVal = parseInt(input_element.text());
    if (!isNaN(currentVal)) {
        input_element.text(currentVal + 1);
    } else {
        input_element.text(1);
    }
});
$('.qtyminus').click(function(e) {
    e.preventDefault();
    input_element = $(this).parent().find('.qty');
    var currentVal = parseInt(input_element.text());
    if (!isNaN(currentVal) && currentVal > 1) {
        input_element.text(currentVal - 1);
    } else {
        input_element.text(1);
    }
});
function updateCost(clickedId){
    var id = clickedId.substring(10);
    var cakeWeight = $('#cakeWeight'+id).val();
    $.ajax({
         type: "GET",
         url:"/detailsFromId/"+id,
         success: function(data){
             $('#specificWt'+id).html(cakeWeight);
             $('#specificWtCost'+id).html(data.halfKgPrice * cakeWeight * 2);
         }
     }); 
 }

 function addToCart(clickedId){
    var id = clickedId.substring(9);
    var cakeWeight = $('#cakeWeight'+id).val();
    var cakeQty = $('#cakeQty'+id).text();
    $.ajax({
         type: "POST",
         url:"/add-to-cart/"+id+"/"+cakeWeight+"/"+cakeQty,
         success: function(data){
             location.reload();
             $.toaster({ message : 'Cake added', title : 'Shopping cart', priority : 'danger' });
            //  $('#specificWt'+id).html(cakeWeight);
            //  $('#specificWtCost'+id).html(data.halfKgPrice * cakeWeight * 2);
         }
     }); 
 }