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
$(".start_count").each(function() {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text()
            },
            {
                duration: 7000,
                easing: "swing",
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            }
        );
});
//=============counter function ends============//
//If you want to execute this line only once per browser session you can use sessionStorage. When you set a variable on sessionStorage it keeps its value until the browser closes (e.g. until you close Google Chrome).
if (!sessionStorage.alreadyClicked) {
    $("#refernearnModal").modal("show");
    sessionStorage.alreadyClicked = true;
}

//If you want the line to be executed only once per page session (which means once every page refresh)
// if (!window.alreadyClicked) {
//     $("#refernearnModal").modal("show");
//     alreadyClicked = true;
// }
