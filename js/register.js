// 点击 × 跳转返回原先进入注册的页面
// 获取 差 对象
var registerCha = document.querySelector('.cha')
var registerBut = document.querySelectorAll('button')
var registerOne = document.querySelector('.content-one')
var registerTwo = document.querySelector('.content-two')
var registerThree = document.querySelector('.content-three')
var registerFour = document.querySelector('.content-four')
// 绑定点击事件
registerCha.onclick = function(){
    // 获取 url 中所传参数 路径
    var registerUlr = location.search.split('?')[1]
    location.href = registerUlr
}

// 同意协议 后 的填写账号信息的样式
// 获取操作对象
var registerUl = document.querySelector('ul')
var registerLis = registerUl.querySelectorAll('li')
var registerIs = registerUl.querySelectorAll('i')
var registerSpans = registerUl.querySelectorAll('span')
//第一个 button 绑定事件
registerBut[0].onclick = function(){
    // content-one 隐藏
    registerOne.style.display = "none"
    // content-two 显示
    registerTwo.style.display = "block"
    // 填写账号信息的样式改变
    registerLis[1].className = 'border-show'
    registerIs[1].className = 'bgcolor-show'
    registerSpans[1].className = 'color-show'
}


// 登录密码 及 会员号 验证
// 获取 content-two 的所有 input
var registerInput = registerTwo.querySelectorAll('input')
var registerIs2 = registerTwo.querySelectorAll('i')
var registerEm = registerTwo.querySelector('em')
var registerPass1 = document.querySelector('.register-password')
var registerPass2 = document.querySelector('.register-password-copy')
var registerPass3 = document.querySelector('.register-password1')
var registerPass4 = document.querySelector('.register-password2')

var turn=false  //标志位
// 给第一个 密码框 加事件及验证
registerInput[0].oninput = function(){
    //隐藏
    registerPass2.style.display='none'
    registerInput[2].style.borderColor = '#999999'
    //显示
    registerPass1.style.display = 'block'
    //获取密码框内容
    var valOne=this.value
    // 书写正则
    var regOne=/^[0-9A-Za-z\.]{8,20}$/
    if(regOne.test(valOne)){
        registerIs2[1].innerHTML="√"
        var a=0 //数字
        var b=0 //小写字母
        var c=0 //大写字母
        var d=0 //点
        //遍历当前字符串
        for(var i=0;i<valOne.length;i++){
            //判断当前字符是否为数字
            if("0"<=valOne[i] && valOne[i]<="9"){
                a=1
            }else if('a'<=valOne[i] && valOne[i]<='z'){
                b=1
            }else if('A'<=valOne[i] && valOne[i]<="Z"){
                c=1
            }else{
                d=1
            }
        }
        //判断当前出现了多少中字符
        if(a+b+c+d==1){
            registerEm.innerHTML="弱"
            registerEm.style.color = '#6a8d97'
        }else if(a+b+c+d==2){
            registerEm.innerHTML="中"
            registerEm.style.color = '#e6c71a'
            registerIs2[2].innerHTML="√"
            registerIs2[3].innerHTML="√"
        }else{
            registerEm.innerHTML="强"
            registerEm.style.color = '#FF0036'
            registerIs2[2].innerHTML="√"
            registerIs2[3].innerHTML="√"
        }
        turn = true
    }else{
        //隐藏
        registerPass1.style.display='none'
        registerInput[2].style.borderColor = '#999999'
        //显示
        registerPass2.style.display='block'
        turn = false
    }
}

// 给第二个 密码框 加事件及验证
registerInput[1].onfocus = function(){
    registerPass3.innerHTML = ' 请再次输入你的密码'
    // 隐藏registerPass1
    registerPass1.style.display = 'none'
    registerInput[2].style.borderColor = '#999999'
}
registerInput[1].oninput = function(){
    //获取第一个 第二个密码框内容
    var valOne = registerInput[0].value
    var valTwo = registerInput[1].value
    if(valOne == valTwo){
        registerPass3.innerHTML = '密码正确'
        registerPass3.style.color = ' #0eeb62'
        turn1 = true
    }else{// 修改registerPass3的内容
        registerPass3.style.color = ' #FF0036'
        registerPass3.innerHTML = '输入有误'
        turn1 = false
    }
}

var turn1 = false
var turn2 = false
// 给第三个 密码框 加事件及验证
registerInput[2].oninput= function(){
    // 获取 第三个 文本框内容
    var valThree = this.value
    // 显示registerPass4并设置边框样式
    registerPass4.style.display = 'block'
    registerInput[2].style.borderColor = '#FF0036'
    // 书写正则
    var regTwo=/^[0-9A-Za-z\u4e00-\u9fa5]{5,25}$/
    if(regTwo.test(valThree)){
        // 设置成功,设置字体颜色
        registerPass4.innerHTML = '设置成功'
        registerPass4.style.color = '#0eeb62'
        turn2 = true
    }else{
        // 输入错误 , 重新设置样式
        registerPass4.innerHTML=`
        5-25个字符，推荐使用中文，
        请勿包含姓名/身份证/银行卡等隐私信息，一旦设置成功无法修改
        `
        registerPass4.style.color = ' #FF0036'
        turn2 = false
    }
}

//第二个 button 绑定事件
registerBut[1].onclick= function(){
    if(turn && turn1 && turn2){
        // content-two 隐藏
        registerTwo.style.display = "none"
        // content-three 显示
        registerThree.style.display = "block"
        // 支付方式的样式改变
        registerLis[2].className = 'border-show'
        registerIs[2].className = 'bgcolor-show'
        registerSpans[2].className = 'color-show'
    }else{
        return false
    }
    // 存储 账号密码
    var paw = registerInput[1].value
    var name1 = registerInput[2].value
    //调用ajax方法
    Ajax({
        url: '../php/register.php',
        type: 'post',
        data: `username=${name1}&password=${paw}`
    })
}


// 支付方式 及 银行卡 验证
// 获取 content-three 的所有 input
var registerInput1 = registerThree.querySelectorAll('input')
var registerIs1 = registerThree.querySelectorAll('i')
//给第一个input 加验证
var turn3 = false
registerInput1[0].onfocus=function(){
    // i 显示内容
    registerIs1[0].innerHTML = '请输入银行卡号'
}
registerInput1[0].oninput= function(){
    // 遍历所有的 input 设置边框颜色 
    for(let i=0;i<registerInput1.length;i++){
        registerInput1[i].style.borderColor = '#dedede'
    }
    this.style.borderColor = '#FF0036'
    //获取密码框内容
    var threeVal = this.value
    // 书写正则
    var threeReg=/^[0-9]{12,19}$/
    if(threeReg.test(threeVal)){
        // 设置成功,设置字体颜色
        registerIs1[0].innerHTML = '输入正确'
        registerIs1[0].style.color = '#0eeb62'
        this.style.borderColor = ' #39abf7'
        turn3 = true
    }else{
        registerIs1[0].style.color = '#FF0036'
        registerIs1[0].innerHTML = '请输入12-19位银行卡号'
        turn3 = false
    }
}

//给第二个input 加验证
var turn4 = false
registerInput1[1].onfocus=function(){
    // i 显示内容
    registerIs1[1].innerHTML = '请输入开户姓名'
}
registerInput1[1].oninput= function(){
    // 遍历所有的 input 设置边框颜色 
    for(let i=0;i<registerInput1.length;i++){
        registerInput1[i].style.borderColor = '#dedede'
    }
    this.style.borderColor = '#FF0036'
    //获取密码框内容
    var threeVal1 = this.value
    // 书写正则
    var threeReg1=/^[\u4e00-\u9fa5]{2,8}$/
    if(threeReg1.test(threeVal1)){
        // 设置成功,设置字体颜色
        registerIs1[1].innerHTML = '输入正确'
        registerIs1[1].style.color = '#0eeb62'
        this.style.borderColor = ' #39abf7'
        turn4 = true
    }else{
        registerIs1[1].style.color = '#FF0036'
        registerIs1[1].innerHTML = '输入有误'
        turn4 = false
    }
}

//给第三个input 加验证
var turn5 = false
registerInput1[2].onfocus=function(){
   // i 显示内容
    registerIs1[2].innerHTML = '请输入身份证号' 
}
registerInput1[2].oninput= function(){
    // 遍历所有的 input 设置边框颜色 
    for(let i=0;i<registerInput1.length;i++){
        registerInput1[i].style.borderColor = '#dedede'
    }
    this.style.borderColor = '#FF0036'
    //获取密码框内容
    var threeVal2 = this.value
    // 书写正则
    var threeReg2=/^[0-9a-z]{18}$/
    if(threeReg2.test(threeVal2)){
        // 设置成功,设置字体颜色
        registerIs1[2].innerHTML = '输入正确'
        registerIs1[2].style.color = '#0eeb62'
        this.style.borderColor = ' #39abf7'
        turn5 = true
    }else{
        registerIs1[2].style.color = '#FF0036'
        registerIs1[2].innerHTML = '身份证号位18位数字、字母'
        turn5 = false
    }
}

//给第四个input 加验证
var turn6 = false
registerInput1[3].onfocus=function(){
    // i 显示内容
    registerIs1[3].innerHTML = '请输入银行预留的手机号码'
}
registerInput1[3].oninput= function(){
    
    // 遍历所有的 input 设置边框颜色 
    for(let i=0;i<registerInput1.length;i++){
        registerInput1[i].style.borderColor = '#dedede'
    }
    this.style.borderColor = '#FF0036'
    //获取密码框内容
    var threeVal3 = this.value
    // 书写正则
    var threeReg3=/^1[0-9]{10}$/
    if(threeReg3.test(threeVal3)){
        // 设置成功,设置字体颜色
        registerIs1[3].innerHTML = '输入正确'
        registerIs1[3].style.color = '#0eeb62'
        this.style.borderColor = ' #39abf7'
        turn6 = true
    }else{
        registerIs1[3].style.color = '#FF0036'
        registerIs1[3].innerHTML = `手机号码格式错误，大陆手机为11位数字,1开头`
        turn6 = false
    }
}

//第三个 button 绑定事件
registerBut[2].onclick = function(){
    if(turn3 && turn4 && turn5 && turn6){
        // content-three 隐藏
        registerThree.style.display = "none"
        // content-four
        registerFour.style.display = "block"
        // 支付方式的样式改变
        registerLis[3].className = 'border-show'
        registerIs[3].className = 'bgcolor-show'
        registerSpans[3].className = 'color-show'
    }else{
        return false
    }
}