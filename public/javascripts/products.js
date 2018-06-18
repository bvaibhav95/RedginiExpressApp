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

function updatePdtCost(clickedId){
    var id = clickedId.substring(9);
    var pdtWeight = $('#pdtWeight'+id).val();
    $.ajax({
         type: "GET",
         url:"/pdtDetailsFromId/"+id,
         success: function(data){
             $('#specificWt'+id).html(pdtWeight);
             if(data.availableWeights[0] === 0.5){
                 $('#specificWtCost'+id).html(data.minWtCost * pdtWeight * 2);
             }else{
                 $('#specificWtCost'+id).html(data.minWtCost * pdtWeight);
             }
         }
     }); 
}



function addToCart(clickedId){
    var id = clickedId.substring(9);
    var cakeWeight = $('#cakeWeight'+id).val();
    var cakeQty = $('#cakeQty'+id).html();
    var isEgg = $('#egg'+id).is(':checked');
    $.ajax({
            type: "GET",
            url:"/add-to-cart/"+id+"/"+cakeWeight+"/"+cakeQty+"/"+isEgg,
            success: function(data){
                location.reload();
                $.toaster({ message : 'Cake added', title : 'Shopping cart', priority : 'success' });
            }
        }); 
}

function addToCartPdt(clickedId){
    var id = clickedId.substring(12);
    var pdtWeight = $('#pdtWeight'+id).val();
    $.ajax({
            type: "GET",
            url:"/add-to-cart-bake/"+id+"/"+pdtWeight,
            success: function(data){
                location.reload();
                $.toaster({ message : 'Product added', title : 'Shopping cart', priority : 'success' });
            }
        }); 
}

function openFilter(){
    $('#filterModal').modal('show');
}
$('#applyFiltersBtn').modal('hide');
