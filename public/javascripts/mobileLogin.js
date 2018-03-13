function sendOtp(){
    $('#resend_link').html('resend OTP');
    $('#send_otp_btn').prop('disabled', true);
    $("#enter_otp").prop('disabled', false);
    $("#verify_otp_btn").prop('disabled', false);
    var mobileNum = $('#enter_mobile').val();
    $.ajax({
        type: "POST",
        url: "/auth/sendotp/"+mobileNum
    });
    return false;
}

function verifyOtp(){
    var otp = $("#enter_otp").val();
    $.ajax({
        type: "GET",
        url: "/auth/verifyotp/"+otp,
        dataType: "json",
        success:function(result,status,xhr){ 
            if(result.status == 'success'){
                location.replace('/auth/login');
            }else if(result.status == 'error'){
                $('#wrongOtpAlert').addClass('alert alert-danger');
                $('#wrongOtpAlertText').html('You entered wrong OTP!');
                setInterval(function(){
                    $('#wrongOtpAlert').removeClass('alert alert-danger');
                    $('#wrongOtpAlertText').html('');
                }, 3000);
            }else{
                console.log(result);
                location.replace('/products/blackforest');
            }
        },
        error:function(xhr,status,error){
            console.log('AJAX Error!!!');
        }
    });
}

function resendOtp(){
    var mobileNum = $('#enter_mobile').val();
    $.ajax({
        type: "POST",
        url: "/auth/resendotp/"+mobileNum,
        success:function(data){ 
            console.log(data);
        },
        error:function(data){
            console.log(data);
        }
    });
    return false;
}