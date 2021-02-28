<?php
    header("content-type:text/html;charset=utf-8");

    // 连接数据库
    $link = mysqli_connect('localhost','root','','tmall');
    // 设置编码
    mysqli_set_charset($link,"utf8");
    //获取传入的参数
    $n = $_POST['username'];
    $p = $_POST['password'];
    //书写 sql 语句
    $sql = "insert into login values('$n','$p')";
    //执行 sql 语句
    $result = mysqli_query($link,$sql);
    // 关闭连接 
    mysqli_close($link);
?>