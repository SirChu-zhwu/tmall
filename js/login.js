
// 获取操作对象
var loginInput = document.querySelectorAll('input')
// console.log(loginInput[1]);
//给能被点击的登录按钮绑定点击事件
loginInput[2].onclick=function(){
    //获取账号输入框中的value
    var loginU1 = loginInput[0].value
    var loginP1 = loginInput[1].value
    //调用ajax发送请求
    Ajax({
        url:'../php/login.php',
        type: 'post',
        data:`username=${loginU1}&password=${loginP1}`,
        success:function(dt){
            //判断当前返回值是否等于1
            if(dt==1){
                //判断当前地址栏中是否有参数
                var loginUlr = location.search.split('?')[1]
                if(loginUlr){
                    //跳转到对应页面
                    location.href=loginUlr+'?'+loginU1
                }else{
                    location.href="./list.html"
                }
            }else{
                alert("登录失败,账号密码有误")
            }
            setCookie("user",loginU1)
            console.log(1);
        }
    })
    return false
}

// 点击切换登录
// 获取操作对象
var loginOne = document.querySelector('.login')
var QR = loginOne.querySelector('.login-top-right')
var loginTwo = document.querySelector('.login-copy')
var DN = loginTwo.querySelector('.login-copy-top-right')

//绑定点击事件
QR.onclick = function(){
    // 隐藏 login
    loginOne.style.display = 'none'
    // 显示 login-copy
    loginTwo.style.display = 'block'
}
DN.onclick = function(){
    // 隐藏 login
    loginTwo.style.display = 'none'
    // 显示 login-copy
    loginOne.style.display = 'block'
}