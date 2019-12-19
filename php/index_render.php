<?php
include "conn.php";
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

$result1=$conn->query("select * from lunbo");
$arrdata1=array();
for ($i=0;$i<$result1->num_rows;$i++){
    $arrdata1[$i]=$result1->fetch_assoc();
}

$result2=$conn->query("select * from indexpic");
$arrdata2=array();
for ($i=0;$i<$result2->num_rows;$i++){
    $arrdata2[$i]=$result2->fetch_assoc();
}

$result3=$conn->query("select * from tuijian");
$arrdata3=array();
for ($i=0;$i<$result3->num_rows;$i++){
    $arrdata3[$i]=$result3->fetch_assoc();
}

$result4=$conn->query("select * from share");
$arrdata4=array();
for ($i=0;$i<$result4->num_rows;$i++){
    $arrdata4[$i]=$result4->fetch_assoc();
}

$result5=$conn->query("select * from youxuan");
$arrdata5=array();
for ($i=0;$i<$result5->num_rows;$i++){
    $arrdata5[$i]=$result5->fetch_assoc();
}

class data{}
$data=new data();

$data->lunbo=$arrdata1;
$data->indexpic=$arrdata2;
$data->tuijian=$arrdata3;
$data->share=$arrdata4;
$data->youxuan=$arrdata5;
echo json_encode($data);