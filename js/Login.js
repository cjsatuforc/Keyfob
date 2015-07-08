////////////////////////////////////////////////////////////////////////////////
window.onload = function() {  
    var curBrowser = bowser.name;
    var curVersion = Number(bowser.version);
    
    switch (curBrowser) {
        case "Safari":
            if (curVersion < 5)
                window.open('browser_not_support.html', '_self');
            break;
        case "Chrome":
            if (curVersion < 7)
                window.open('browser_not_support.html', '_self');
            break;
        case "Firefox":
            if (curVersion < 22)
                window.open('browser_not_support.html', '_self');
            break;
        case "Internet Explorer":
            if (curVersion < 10)
                window.open('browser_not_support.html', '_self');
            break;
        default:     
            break;
    }
    
    $('#logn_error').hide();
};

////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {  
    // enter key to login
    $('#password').keypress(function (e) {
        if(e.keyCode === 13){
            $('#btn_login').click();
        }
    });
    
    $('#btn_login').click(function() { 
        var url_param = sessionStorage.getItem('ss_dsps_url_param');
        if(loginInfo()) {
            $('#error_msg').html("");
            $('#logn_error').hide();
            
            if (url_param === null) {
                window.open('home.html', '_self');
                return false;
            }
            else {
                window.open(url_param, '_self');
                return false;
            }
        }
        else {
            $('#error_msg').html("Invalid username or password");
            $('#logn_error').show();
        }
    });
});

////////////////////////////////////////////////////////////////////////////////
function loginInfo() {   
    var result = new Array();
    var username = $('#username').val();
    var password = $('#password').val();
    
    result = getLoginUserInfo("php/login.php", username, password);    
    if (result.length === 0) {
        return false;
    }
    else {
        var display_name = result[0];
        var email = result[1];
        var phone = result[2];
        var title = result[3];
        var department = result[4];
        var manager = result[5];
        var mgr_email = result[6];
        
        if (email === null || typeof email === 'undefined') {
            alert("Login error: There was an error getting login user information from Active Direcy please try again");
            return false;
        }

        localData_login(display_name, email, phone, title, department, manager, mgr_email);
        return true;
    }
}

////////////////////////////////////////////////////////////////////////////////
function getLoginUserInfo(php_file, user, pass) {
    var result = new Array();
    $.ajax({
        type:"POST",
        datatype:"json",
        url:php_file,
        data:{username:user, password:pass},
        async: false,  
        success:function(data) {
            result = JSON.parse(data);
        }
    });
    return result;
}