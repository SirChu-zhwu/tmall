<?php
    header("content-type:text/html;charset=utf-8");

    // 连接数据库
    $link = mysqli_connect('localhost','root','','tmall');
    // 设置编码
    mysqli_set_charset($link,"utf8");
    //书写 sql 语句
    $sql = "select * from home_nav";
    //执行 sql 语句
    $result = mysqli_query($link,$sql);
    //创建空数组存放数据
    $arr1 = [];
    //遍历 数据
    while($row = mysqli_fetch_assoc($result)){
        //把数据追加到数组中
        array_push($arr1,$row);
    }
    //将数组转成 josn 字符串并输出 
    echo json_encode($arr1);
    // 关闭连接 
    mysqli_close($link);

?>