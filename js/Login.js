////////////////////////////////////////////////////////////////////////////////
window.onload = function() {  
    $('#logn_error').hide();
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
};

////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {      
    $('#btn_login').click(function() { 
        $('#error_msg').html("");
        $('#logn_error').hide();
        
        if(loginInfo()) {            
            window.open('home.html', '_self');
            return false;
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
    var username = $('#username').val().toLowerCase().replace("@ivc.edu", "");
    var password = $('#password').val();
    
    result = getLoginUserInfo("php/login.php", username, password);    
    if (result.length === 0) {
        return false;
    }
    else {
        var display_name = result[0];
        var login_email = result[1];
        var login_title = result[2];
        var login_depart = result[3];
        var login_phone = result[4];
        var emp_num = result[5];
        var emp_type = result[6];
        
        var manager = result[7];
        var mgr_email = result[8];
        var mgr_title = result[9];
        var mgr_depart = result[10];
        var mgr_phone = result[11];
        
        if (mgr_email === null || typeof mgr_email === 'undefined') {
            alert("Login error: Your manager is not set up in Active Direcy, please contact 949.451.5254 or email to ivctech@ivc.edu");
            return false;
        }
        
        var UserID = getUserID(display_name, login_email, login_title, login_depart, login_phone, emp_num, emp_type);
        var ManagerID = getManagerID(manager, mgr_email, mgr_title, mgr_depart, mgr_phone);

        localData_login(UserID, display_name, login_email, login_title, login_depart, login_phone, emp_num, emp_type, ManagerID, manager, mgr_email, mgr_title, mgr_depart, mgr_phone);
        return true;
    }
}

function getUserID(display_name, login_email, login_title, login_depart, login_phone, emp_num, emp_type) {
    var ETypeID = 0;
    if (emp_type.indexOf("Full-Time") >= 0) {
        ETypeID = db_getETypeID("Full Time Faculty");
    }
    else if (emp_type.indexOf("Associate") >= 0) {
        ETypeID = db_getETypeID("Part Time Faculty");
    }
    else if (emp_type.indexOf("Classified") >= 0) {
        ETypeID = db_getETypeID("Staff");
    }
    
    var user_id = db_getUserID(login_email);
    if (user_id === null) {
        user_id = db_insertUser(textReplaceApostrophe(emp_num), textReplaceApostrophe(ETypeID), textReplaceApostrophe(display_name), textReplaceApostrophe(login_email), 
                                textReplaceApostrophe(login_title), textReplaceApostrophe(login_phone), textReplaceApostrophe(login_depart));
    }
    
    return user_id;
}

function getManagerID(manager, mgr_email, mgr_title, mgr_depart, mgr_phone) {
    var mgr_id = db_getManagerID(mgr_email);
    if (mgr_id === null) {
        mgr_id = db_insertManager(textReplaceApostrophe(manager), textReplaceApostrophe(mgr_email), textReplaceApostrophe(mgr_title), textReplaceApostrophe(mgr_phone), textReplaceApostrophe(mgr_depart));
    }
    
    return mgr_id;
}