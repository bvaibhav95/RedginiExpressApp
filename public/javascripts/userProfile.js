function generateRefCode() {
    $.ajax({
        type: "GET",
        url: "/profile/generate-ref-code",
        success: function(refCode) {
            $("#userRefCode").html(refCode);
            location.reload();
        }
    });
}
