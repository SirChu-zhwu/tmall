// 获取操作对象
var inp = document.getElementsByClassName('search-text')
var uls = document.getElementsByClassName('search-ul')
var submit = document.getElementsByClassName('search-submit')
// 定时器名称
var searchDsq

// 给 inp 绑定表单改变事件[注意上面获取的是一个伪数组]
inp[0].oninput = function () {
    //获取输入的值
    var val = this.value
    // 创建 script 标签
    var newScript = document.createElement('script')
// 添加 src【修改获取的值: q , 修改回调函数: callback】
    newScript.src =
        `https://suggest.taobao.com/sug?code=utf-8&q=${val}&_ksTS=1611488032513_314&callback=fn1&area=b2c&code=utf-8&k=1&bucketid=13&src=tmall_pc`
    //将 script 追加到body
    document.body.appendChild(newScript)
    // 防止每次输入获取 script 标签加入 body 中,造成代码 冗余
    document.body.lastElementChild.remove()
}

//设置 回调函数 fn1【函数返回的参数会是 对象 形式】
function fn1(d) {
    //console.log(d);
    // 获取 d 对象里的 result 属性的数据
    var arr = d.result
    //console.log(arr);
    //判断数据是否有数据
    if (arr) {
        // 显示 ul
        uls[0].style.display = 'block'
        // 创建 空字符 拼接数据
        var str = ''
        // 遍历 arr 获取数据
        arr.forEach(item => {
            //console.log(item[0]);
            // 将数据拼接
            // 遍历数组得到的又是一个 对象 了
            str += `
            <li>${item[0]}</li>
            `
        })
        //把 li 追加到 ul
        uls[0].innerHTML = str
    } else {
        // 不显示 ul
        uls[0].style.display = 'none'
    }
    
    clearInterval(searchDsq)
    //创建定时器
    searchDsq = setTimeout(() => {
        // 获取 ul 下的li
        var lis = uls[0].getElementsByTagName('li')
        // 遍历所有的 li
        for(var i in lis){
            // 每个li 绑定点击事件
            lis[i].onclick = function(){
                // 获取 li 里面的内容
                var liVal = this.innerHTML
                // 赋值给 text 框
                inp[0].value = liVal
                // 让 ul 隐藏
                uls[0].style.display = 'none'
            }
        }
    }, 1000);

    // 当搜索框 有内容时 ,点击跳转 列表页
    if(inp[0].value != ''){
        submit[0].onclick=function(){
            location.href = './list.html'
            console.log(1);
        }
    }
}


//顶部通栏 and 楼层导航
//获取操作对象
var topnav = document.getElementsByClassName('topnav')
var floor = document.getElementsByClassName('floor')
var floorUl = floor[0].getElementsByTagName('ul')
var floorLis = floorUl[0].getElementsByTagName('li')
// 定时器名称
var floorDsq

//给window对象绑定滚动事件
window.onscroll=function(){
    //获取滚动距离
    floorTop1=document.documentElement.scrollTop
    //判断当滚动距离大于888时，显示顶部通栏 and 楼层导航内容
    if(floorTop1>888){
        // 改变定位的 top right 值
        topnav[0].style.top = 0
        floorUl[0].style.top = 0
        floorUl[0].style.right = 0
        //过渡效果
        topnav[0].style.transition="all .5s 0s linear"
        floorUl[0].style.transition="all .3s 0s linear"
    }else{
        topnav[0].style.top = -100+'px'
        floorUl[0].style.top = 370+'px'
        floorUl[0].style.right = 40+'px'
    }
    // 调用函数
    scroll()
    scrollMove()
}

// 楼层导航跳传函数
function scrollMove(){
    // 遍历floorLis
    for(let i=1 ; i < floorLis.length ; i++){
        // 获取当前浏览器的滚动距离
        var floorTop2 = document.documentElement.scrollTop 
        // 绑定点击事件
        floorLis[i].onclick=function(){
            // 判断 i 的值
            if(i == 1 || i == 2){
                // 创建定时器
                floorDsq=setInterval(function(){
                    if(floorTop2 > 1028+720*(i-1)){
                        //设置步长
                        var speed=-30
                    }else{
                        var speed=30
                    }
                    // 判断 差值 是否下于 步长
                    if(Math.abs(floorTop2 - (1028+720*(i-1))) <= Math.abs(speed)){
                        //小于时，让浏览器滚动到对应的距离
                        document.documentElement.scrollTop=1028+720*(i-1)
                        //清除定时器
                        clearInterval(floorDsq)
                    }else{
                        //重新设置滚动距离 
                        floorTop2 += speed 
                        document.documentElement.scrollTop=floorTop2
                        // 给floorTop1 赋值
                        floorTop1 = 1028+720*(i-1)
                    }
                    // 调用变色的函数
                    scroll()
                },1)
            }
            if(i == 3 || i == 4){
                floorDsq=setInterval(function(){
                    if(floorTop2 > 1168+720*(i-1)){
                        var speed=-30
                    }else{
                        var speed=30
                    }
                    if(Math.abs(floorTop2 - (1168+720*(i-1))) <= Math.abs(speed)){
                        document.documentElement.scrollTop=1168+720*(i-1)
                        clearInterval(floorDsq)
                    }else{
                        floorTop2 += speed 
                        document.documentElement.scrollTop=floorTop2
                        floorTop1 = 1168+720*(i-1)
                    }
                    scroll()
                },1)
            }
            if(i == 5 || i == 6 || i == 7){
                floorDsq=setInterval(function(){
                    if(floorTop2 > 1308+720*(i-1)){
                        var speed=-30
                    }else{
                        var speed=30
                    }
                    if(Math.abs(floorTop2 - (1308+720*(i-1))) <= Math.abs(speed)){
                        document.documentElement.scrollTop=1308+720*(i-1)
                        clearInterval(floorDsq)
                    }else{
                        floorTop2 += speed 
                        document.documentElement.scrollTop=floorTop2
                        floorTop1 = 1308+720*(i-1)
                    }
                    scroll()
                },1)
            }
            if(i == 8){
                floorDsq=setInterval(function(){
                    //设置步长
                    speed = 100
                    if(Math.abs(floorTop2 - 0) <= Math.abs(speed)){
                        document.documentElement.scrollTop=0
                        clearInterval(floorDsq)
                    }else{
                        floorTop2 -= speed 
                        document.documentElement.scrollTop=floorTop2
                    }
                },1)
            }
        }
    }
}

// 楼层导航的 li 变色函数
function scroll(){
    // 遍历floorLis
    for(let i=0 ; i < floorLis.length ; i++){
        // 滚动条滚动到对应的距离, 相对的 楼层导航 变色
        if(floorTop1>=1027 && floorTop1<=1747){
            if(i==1){
                floorLis[1].style.backgroundColor = "#64C333"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>1747 && floorTop1<=2467){
            if(i == 2){
                floorLis[2].style.backgroundColor = "#FF0036"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>2467 && floorTop1<=3287){
            if(i == 3){
                floorLis[3].style.backgroundColor = "#EA5F8D"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>3287 && floorTop1<=4007){
            if(i == 4){
                floorLis[4].style.backgroundColor = "#0AA6E8"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>4007 && floorTop1<=4827){
            if(i == 5){
                floorLis[5].style.backgroundColor = "#64C333"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>4827 && floorTop1<=5547){
            if(i == 6){
                floorLis[6].style.backgroundColor = "#19C8A9"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
        if(floorTop1>5547 && floorTop1<=12208){
            if(i == 7){
                floorLis[7].style.backgroundColor = "#FF0036"
            }else{
                floorLis[i].style.backgroundColor = ""
            }
        }
    }
}



