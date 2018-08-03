new ClipboardJS("#copyToClipboardBtn");

function generateRefCode() {
    var phone = $("#cashbackPhone").val();
    var pattern = new RegExp("^[6789][0-9]{9}$");
    if (pattern.test(phone)) {
        $.ajax({
            type: "GET",
            url: "/profile/generate-ref-code/" + phone,
            success: function(refCode) {
                $("#userRefCode").html(refCode);
                location.reload();
            }
        });
    } else {
        alert("Invalid mobile number");
    }
}

function copyReferralCode() {
    // var copyText = document.getElementById("refCodeMsg");
    // copyText.select();
    // document.execCommand("copy");
    alert("Paste code in WhatsApp/Instagram/Facebook/Message to share !");
}
