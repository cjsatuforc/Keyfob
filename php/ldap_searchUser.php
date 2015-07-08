<?php
    $server = "idc1.ivc.edu idc2.ivc.edu idc3.vic.edu";
    $baseDN = "dc=ivc,dc=edu";
    
    $userID = filter_input(INPUT_POST, 'userID');
    
    $ldapconn = ldap_connect($server);
    if($ldapconn) {
        ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
        ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);
        $ldapbind = ldap_bind($ldapconn, "IVCSTAFF\\stafftest", "staff");
        if($ldapbind) {
            $filter = "(cn=".$userID.")";
            $result = ldap_search($ldapconn, $baseDN, $filter);
            $data = ldap_get_entries($ldapconn, $result);
            
            $name = $data[0]["displayname"][0];
            $email = $data[0]["mail"][0];
            $phone = $data[0]["telephonenumber"][0];
            $etype = $data[0]["employeetype"][0];
            
            $row = array($name, $email, $phone, $etype);
            echo json_encode($row);
        }
        ldap_close($ldapconn);
    }