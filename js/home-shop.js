//获取操作对象
var shop = document.querySelector('.shop-cont');
var shopUl = shop.querySelector('ul');

(function () {
    //调用ajax方法
    Ajax({
        url: '../php/home-shop.php',
        type: 'post',
        datatype: 'json',
        // 成功函数传入的参数 就是返回的结果
        success: function (dt) {
            //获取 dt
            var data = dt
            //console.log(data);
            //创建字符串，拼接所有数据
            var str = ''
            //遍历数组中所有的元素
            for (var i = 0; i < data.length; i++) {
                str += `
                <li>
                    <img src="${data[i].shop_imgulr}" alt="">
                    <p>${data[i].shop_name}</p>
                    <p>￥${data[i].shop_pirce}</p>
                </li>
                `
            }
            //把当前拼接完毕的内容，添加到div对象中
            shopUl.innerHTML = str
        },
        error: function (dt) { 
            console.log(dt)  // 这里是插件里返回的参数是什么,就是什么
        }
    })
})()