// $('#cake_card').click(function(){
//     alert("clicked");
//     $.ajax({
//         type: "GET",
//         url:"/products/blackforest",
//         success: function(data){
            
//         }
//     });
// });
//==========counter function starts=========//
$('.start_count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 7000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//=============counter function ends============//