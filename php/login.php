<?php
    $server = "idc1.ivc.edu idc2.ivc.edu idc3.vic.edu";
    $baseDN = "dc=ivc,dc=edu";
         
    $username = filter_input(INPUT_POST, 'username');
    $password = filter_input(INPUT_POST, 'password');
    $login = "IVCSTAFF\\".$username;
    $result = array();

    $ldapconn = ldap_connect($server);   
    if($ldapconn) {          
        ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
        ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);

        $ldapbind = ldap_bind($ldapconn, $login, $password);  
        if($ldapbind) {
            $filter = "(&(objectClass=user)(objectCategory=person)(cn=".$username."))";
            $ladp_result = ldap_search($ldapconn, $baseDN, $filter);
            $data = ldap_get_entries($ldapconn, $ladp_result);

            if ($data != null) {
                $name = $data[0]["displayname"][0];
                $email = $data[0]["mail"][0];
                $title = $data[0]["title"][0];

                
                if (array_key_exists('department', $data[0])) {
                    $department = $data[0]["department"][0];
                }
                if (array_key_exists('telephonenumber', $data[0])) {
                    $phone = $data[0]["telephonenumber"][0];
                }
                if (array_key_exists('employeenumber', $data[0])) {
                    $emp_num = $data[0]["employeenumber"][0];
                }
                if (array_key_exists('employeetype', $data[0])) {
                    $emp_type = $data[0]["employeetype"][0];
                }
                if (array_key_exists('manager', $data[0])) {
                    $manager = $data[0]["manager"][0];
                }
                
                if (!empty($manager)) {
                    $filter2 = "(&(objectClass=user)(objectCategory=person)(cn=".setApproverUserName($manager)."))";
                    $result2 = ldap_search($ldapconn, $baseDN, $filter2);
                    $data2 = ldap_get_entries($ldapconn, $result2);

                    $name2 = $data2[0]["displayname"][0];
                    $email2 = $data2[0]["mail"][0];
                    $title2 = $data2[0]["title"][0];

                    if (array_key_exists('department', $data2[0])) {
                        $department2 = $data2[0]["department"][0];
                    }
                    if (array_key_exists('telephonenumber', $data[0])) {
                        $phone2 = $data2[0]["telephonenumber"][0];
                    }

                    $row = array($name, $email, $title, $department, $phone, $emp_num, $emp_type, $name2, $email2, $title2, $department2, $phone2);
                    echo json_encode($row);
                }
            }
        }  
        ldap_close($ldapconn);
    }
    
    function setApproverUserName($manager) {
        $pos = strpos($manager, ',');
        return substr($manager, 3, $pos - 3);
    }