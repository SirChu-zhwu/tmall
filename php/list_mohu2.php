<?php
    header("content-type:text/html;charset=utf-8");
    //获取传入的参数
    $id1 = $_GET['value2'];
    //连接数据库
    $link=mysqli_connect("localhost",'root','','tmall');
    //设置编码
    mysqli_set_charset($link,"utf8");
    //SQL语句
    $sql="select * from list_shop where list_name like '%$id1%'";
    //执行SQL语句，并返回结果集
    $result=mysqli_query($link,$sql);
    //创建存储所有数据的数组
    $arr=[];
    //遍历结果集
    while($row=mysqli_fetch_assoc($result)){
        //把遍历出来的数据追加到数组中
        array_push($arr,$row);
    }
    //把当前数组转为字符串，并响应给浏览器
    echo json_encode($arr);
    //关闭连接
    mysqli_close($link);

?>