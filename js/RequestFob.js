//Employee Type Set
//var t_emp_type = "Classified Non-Bargaining Unit" or "Associate Faculty";
var t_emp_type = sessionStorage.getItem('ss_keyfob_emp_type');
var SearchWord1 = /full time/i;     //Full Time
var SearchWord2 = /associate/i;     //Part Time
var SearchWord3 = /classified/i;    //Classified - Staff
if (SearchWord1.test(t_emp_type)=== true){
    $('input:radio[id=emp_type2]:input[value=full]').attr("checked", true);
}else if (SearchWord2.test(t_emp_type)=== true){
    $('input:radio[id=emp_type2]:input[value=part]').attr("checked", true);
}else if (SearchWord3.test(t_emp_type)=== true){
    $('input:radio[id=emp_type2]:input[value=staff]').attr("checked", true);
}else{
    //alert("Please select your employee type.          ");
}

//Select Style Set
$(function(){
    $('.selectpicker').selectpicker({
        //size:10
    });
});

//Selectbox Create
var i=0;
var sb1,sb1_op;
var sb2,sb2_op;
sb1_op = '<option value="">Select...</option>';
sb2_op = '<option value="">Select...</option>';
var arr_room_no = new Array();
var arr_builing_no  = new Array();
arr_builing_no      = db_getBuildingList(); //Building# lists from db

//First Dropdown Menu - Building#
for (i=0; i<arr_builing_no.length; i++){
    sb1_op = sb1_op + '<option value="' + arr_builing_no[i][0] + '">' + arr_builing_no[i][1] + '</option>';
    document.getElementById("selectionA0").options[i+1] = new Option(arr_builing_no[i][1],arr_builing_no[i][0]);
}

//Add a select box line
$(function () {
    $('table').footable().on('click', '.row-delete', function(e) {
    e.preventDefault();
        //get the footable object
        var footable = $('table').data('footable');
        //get the row we are wanting to delete
        var row = $(this).parents('tr:first');
        var rowCount = document.getElementById('options-table').rows.length - 1;    //At this time, Table`s TR tag count.
        if (rowCount>1){
            //if key request line is 2 or more, delete the row. Less than 1, do not delete.
            footable.removeRow(row);
        }
    });

    $('.add-row').click(function(e) {
        e.preventDefault();
        //get the footable object
        var footable = $('table').data('footable');
        //make increase id value
        temp_tr_id = document.getElementById("temp_tr_id").value - 0 + 1;
        document.getElementById("temp_tr_id").value = temp_tr_id;
        //build up the row we are wanting to add
        var newRow = '<tr>'+
        '<td><select name="selectionA" id="selectionA' + temp_tr_id + '" class="selectpicker" data-width="100%" onchange="selChange('+temp_tr_id+');">'+sb1_op+'</select></td>'+
        '<td><select name="selectionB" id="selectionB' + temp_tr_id + '" class="selectpicker" data-width="100%">'+sb2_op+'</td>'+
        '<td><input name="key_num" id="key_num'+temp_tr_id+'" class="form-control" value="" placeholder="Key#"></td>'+
        '<td><div style="margin-top:5px;"><button class="row-delete btn btn-primary btn-xs" type="button"><i class="fa fa-trash"></i></button></div></td>'+
        '<td></td></tr>';
        //add it
        footable.appendRow(newRow);
        $('.selectpicker').selectpicker('refresh');
    });
});

//Change options by First select
function selChange(selNo){
    var opt_s1 = document.getElementById("selectionA"+selNo).options;
    selected_no = opt_s1.selectedIndex;
    selected_no2 = opt_s1[selected_no].value;   //Building ID

    var opt2Add = document.getElementById("selectionB"+selNo);
    removeAll(opt2Add,selNo);
    arr_room_no = db_getRoomListByBuildingID(selected_no2);
    for(var i=0; i<arr_room_no.length; i++){
        opt2Add.options[i+1] = new Option(arr_room_no[i][2],arr_room_no[i][0]);	//Add options from second line. left first line.
    }
    $('.selectpicker').selectpicker('refresh');
}

//Remove Second Selection`s options
function removeAll(oSelect,selNo) {
    len = oSelect.options.length;
    for(i=len-1; i >= 0 ; i--) {
        oSelect.remove(i);
    }
    oSelect.options[0] = new Option("Select...","");	//Make first line to default value.
    $('.selectpicker').selectpicker('refresh');
}

//check space only, by [document.getElementById]
function SpaceCheck(var_value) {
    var wspace;
    var vchar;
    var var_value = document.getElementById(var_value).value;
    if(var_value.length === 0) return false;
    for(i=0; i < var_value.length; i++) {
        valueChar = var_value.substr(i, 1);
        if(valueChar === ' ') return false;
        else if(valueChar !== ' ') return true;
    }
}

function save_form(){
    swal({
        title: "Are you sure save it?",
        text: "You will be able to add/change/delete this Key/Fob request.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, save it!",
        closeOnConfirm: false
    },
    function(){
        //document.form1.action = "request_save.php";
        //document.form1.submit();
        swal("Successfully Saved!","Your request has been saved.", "success"); });
    return;
}

function submit_form(){
    var emp_type_check = $(':radio[id="emp_type2"]:checked').val();             //  Employee Type. Sometimes will be possible to unchecked.
    var rowCount = document.getElementById('options-table').rows.length - 1;    //  At this time, Table`s TR tag count.
    var err_msg = "";
    if(!SpaceCheck("phone")) {
        err_msg += "Phone number is required.<br />";
    }
    if(!SpaceCheck("department")) {
        err_msg += "Department is required.<br />";
    }
	for (var i=0; i<rowCount; i++){
        if (document.getElementsByName("selectionA")[i].options.selectedIndex=="0" || document.getElementsByName("selectionB")[i].options.selectedIndex=="0" || document.getElementsByName("key_num")[i].value==""){
            err_msg += "Building# , Room# and Key# fields are required.<br />";
            break;
        }
    }
    if(emp_type_check==null){
        err_msg += "Employee type is required.<br />";
    }
    if(!SpaceCheck("justification")) {
        err_msg += "Justification is required.<br />";
    }
    if (err_msg !== "") {
        swal({
            title: "Warnning",
            text: err_msg,
            type:"warning",   //error | success | warning
            html: true
        });
    }else{
        swal({
            title: "Are you sure submit?",
            text: "You are sending a Key/Fob request form.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, submit.",
            //cancelButtonText: "No, cancel.",
            closeOnConfirm: false,
            closeOnCancel: true
        },
        function(){
            //document.form1.action = "request_submit.php";
            //document.form1.submit();
             $("#btn_submit").prop("disabled", true);
            updateUser();   //  User Information
            //saveLocalData_RequestFob();   //  Key or Fob information
            //saveLocalData_RequestFob();   //  Justification and Stolen check

            var result_submit=true;
            if (result_submit==true) {
                swal("Successfully Submitted!","Your request has been submitted.", "success");
                //window.open('keyfob_activelist.html', '_self');
            }else{
                swal("Failed Submitted.","Your request has been canceled.", "error");
                $("#btn_submit").prop("disabled", false);
            }
        });
        return;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*             Don't send data to DB before confirmed source.                 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateUser(){
    var_UserID      = sessionStorage.getItem('ss_keyfob_login_user_id');
    var_EmployeeID  = sessionStorage.getItem('ss_keyfob_mgr_id');
    var_ETypeID     = $(':radio[id="emp_type2"]:checked').val();
    var_UserName    = sessionStorage.getItem('ss_keyfob_display_name');
    var_UserEmail   = sessionStorage.getItem('ss_keyfob_login_email');
    var_UserTitle   = sessionStorage.getItem('ss_keyfob_login_title');
    var_Phone       = document.getElementById('phone').value;
    var_Department  = document.getElementById('department').value;
    //db_updateUser(var_UserID,var_EmployeeID,var_ETypeID,var_UserName,var_UserEmail,var_UserTitle,var_Phone,var_Department);
    alert(var_UserID+"\n"+var_EmployeeID+"\n"+var_ETypeID+"\n"+var_UserName+"\n"+var_UserEmail+"\n"+var_UserTitle+"\n"+var_Phone+"\n"+var_Department);
}

function db_updateUser(UserID,EmployeeID,ETypeID,UserName,UserEmail,UserTitle,Phone,Department) {
    var ResultID = "";
    Description = textReplaceApostrophe(Description);
    $.ajax({
        type:"POST",
        url:"php/db_insert_user.php",
        data:{UserID:UserID, EmployeeID:EmployeeID, ETypeID:ETypeID, UserName:UserName, UserEmail:UserEmail, UserTitle:UserTitle, Phone:Phone, Department:Department},
        async: false,
        success:function(data) {
            ResultID = JSON.parse(data);
        }
    });
    return ResultID;
}
