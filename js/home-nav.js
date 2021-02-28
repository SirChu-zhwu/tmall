//获取操作对象
var nav = document.querySelector('.nav-onebox');
var navUl1 = nav.querySelector('ul');
var nav1 = document.querySelector('.nav-twobox');
var navUl2 = nav1.querySelector('ul');
var nav2 = document.querySelector('.nav-threebox');
var navUl3 = nav2.querySelector('ul');
var nav3 = document.querySelector('.nav-fourbox');
var navUl4 = nav3.querySelector('ul');
var nav4 = document.querySelector('.nav-fivebox');
var navUl5 = nav4.querySelector('ul');
var nav5 = document.querySelector('.nav-sixbox');
var navUl6 = nav5.querySelector('ul');

(function () {
    //调用ajax方法
    Ajax({
        url: '../php/home-nav.php',
        type: 'post',
        datatype: 'json',
        // 成功函数传入的参数 就是返回的结果
        success: function (dt) {
            //获取 dt
            var data = dt
            //console.log(data);
            //创建字符串，拼接所有数据
            var str = ''
            var str1= ''
            var str2 = ''
            var str3= ''
            var str4 = ''
            var str5= ''
            str = str+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            str1 = str1+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            str2 = str2+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            str3 = str3+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            str4 = str4+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            str5 = str5+`
                <li style="height:642px" class="nav-oneli"></li>
                <p>天猫专享</p>
                <p><img src="../images/nav-p3.png" alt=""></p>
            `
            //遍历数组中所有的元素
            for (var i = 0; i < data.length; i++) {
                if(i<8){
                    str += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
                if(i>=8 && i<16){
                    str1 += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
                if(i>=16 && i<24){
                    str2 += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
                if(i>=24 && i<32){
                    str3 += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
                if(i>=32 && i<40){
                    str4 += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
                if(i>=40 && i<48){
                    str5 += `
                    <li>
                        <img src="${data[i].nav_imgulr}" alt="">
                        <p>${data[i].nav_name}</p>
                        <p>￥${data[i].nav_pirce}</p>
                    </li>
                    `
                }
            }
            //把当前拼接完毕的内容，添加到navUl1对象中
            navUl1.innerHTML = str
            //把当前拼接完毕的内容，添加到navUl2对象中
            navUl2.innerHTML = str1
            //把当前拼接完毕的内容，添加到navUl3对象中
            navUl3.innerHTML = str2
            //把当前拼接完毕的内容，添加到navUl4对象中
            navUl4.innerHTML = str3
            //把当前拼接完毕的内容，添加到navUl5对象中
            navUl5.innerHTML = str4
            //把当前拼接完毕的内容，添加到navUl6对象中
            navUl6.innerHTML = str5
        },
        error: function (dt) { 
            console.log(dt)  
        }
    })
})()