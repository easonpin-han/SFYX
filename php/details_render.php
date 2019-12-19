<?php
include "conn.php";
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

if(isset($_GET['picsid'])){
    $sid=$_GET['picsid'];
    $result=$conn->query("select * from indexpic where sid =$sid");
    echo json_encode($result->fetch_assoc());
}
