//获取操作对象
var banner = document.querySelector('.banner-cont');
var ul = banner.querySelector('ul');
var dsq;

(function () {
    //调用ajax方法
    Ajax({
        url: '../php/home-banner.php',
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
                    <img src="${data[i].banner_imgulr}" alt="">
                    <div class="banner-img">
                        <p>${data[i].banner_name}</p>
                        <a href="${data[i].banner_ulr}" target="_blank">点击进入</a>
                    </div>
                </li>
                `
            }
            str = str+`
            <li class="banner-li">
                <p>换一换</p>
            </li>
            `
            //把当前拼接完毕的内容，添加到div对象中
            ul.innerHTML = str
        },
        error: function (dt) { 
            console.log(dt)  // 这里是插件里返回的参数是什么,就是什么
        }
    })
})()

//清除定时器
clearTimeout(dsq)
dsq = setTimeout(() => {
    //ul 下的 li
    var lis = ul.getElementsByTagName('li')
    // 遍历除最后的li 绑定点击事件
    lis[lis.length-1].onclick = function(){
        //遍历除最后的 li
        for(var i=0 ; i< lis.length-1 ; i++){
            if(i % 3 == 0){
                lis[i].style.transitionDuration = '2s'
                lis[i].style.transform = 'rotateY(360deg)'
            }else if(i % 4 == 0){
                lis[i].style.transitionDuration = '1s'
                lis[i].style.transform = 'rotateY(360deg)'
            }else{
                lis[i].style.transitionDuration = '3s'
                lis[i].style.transform = 'rotateY(360deg)'
            }
        }
    }
}, 2000);


//获取操作对象
var headerLogin = document.querySelector('.header-left')
// 获取参数
var headerUlr=getCookie("user")
// 判断参数是否存在
if(headerUlr){
    headerLogin.innerHTML = `
    <p style="line-height: 32px">
        <span style="color: #999999;margin:0 4px;">Hi,</span>
        ${headerUlr}
        <a href="./login.html" style="margin-left:6px;color: #999999"">退出</a>
    </p>
    `
}

var pageAdsq
clearTimeout(pageAdsq)
// 定时器 延时获取
pageAdsq = setTimeout(function(){
    // 获取操作对象
    var pageA = headerLogin.querySelector('a')
    // 划入事件
    pageA.onmouseover=function(){
        this.style.color=" #FF0036"
    }
    // 移出事件
    pageA.onmouseout=function(){
        this.style.color=" #999999"
    }
},2000)

//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")
// 获取 redNum
var redNum  = document.querySelector('.redNum')
redNum.innerHTML = JSON.parse(cartList).length
console.log(JSON.parse(cartList).length);