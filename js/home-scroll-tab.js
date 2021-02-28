// 轮播图
//获取操作对象
var box = document.querySelector('.scroll-cont')
var box2 = document.querySelector('.scroll-right-but')
var boxImg = document.querySelector('.scroll-right')
var msg = document.querySelector('.scroll-right-img')
var imgs = msg.querySelectorAll('img')
var spans = box2.querySelectorAll('span')

//设置当前图片的显示的下标
var imgIndex = 1
//获取一张图片的宽度
var imgWidth = imgs[0].clientWidth+50
//让box2 显示当前下标的图片
boxImg.scrollLeft = imgIndex*imgWidth
//设置当前按钮的下标
var spanIndex = 0

//设置定时器的名称
var dsq1,dsq2
// 调用图片和按钮的滚动函数
imgMove()

// 创建 图片和按钮的滚动函数
function imgMove(){
    // 先清除定时器
    clearInterval(dsq1)
    //创建图片滚动及按钮滚动的定时器
    dsq1 = setInterval(function(){
        // 每次下标 加1
        imgIndex++
        // 判断下标是否 大于等于 imgs.length
        if(imgIndex >= imgs.length){
            // 让图片的下标 变为2 
            imgIndex = 2
            //当前起始位置应该回退到第一张图片上，也就是第二个位置上
            boxImg.scrollLeft = (imgIndex-1)*imgWidth
        }
        // 调用运动函数
        move()
        //让当前的按钮的 背景 没有
        spans[spanIndex].className = ''
        // 每次定时器使用 按钮下标加一
        spanIndex++
        // 判断下标是否 大于等于 span 长度
        if(spanIndex >= spans.length){
            // 满足条件 ，让下标变成 0
            spanIndex = 0
        }
        // 显示对应下标的 背景
        spans[spanIndex].className = 'scroll-right-span'
    },3000)
}

// 创建图片的运动函数
function move(){
    //获取初始位置
    var start = boxImg.scrollLeft
    //获取结束位置
    var end = imgIndex*imgWidth
    //设置步长
    var speed = (end-start)/20
    // 因为进行匀速运动，步长要设置成一样的 ,所以再外面获取 初始 结束位置
    // 再里面获取的 初始位置会一直改变
    //清除定时器
    clearInterval(dsq2)
    //创建定时器
    dsq2 = setInterval(function(){
        //if(start < end)
        // 判断 初始与结束的差 是否 小于等于 步长
        if(Math.abs(end - start) <= Math.abs(speed)){
            //清除定时器
            clearInterval(dsq2)
            // 让当前图片滚动再结束位置
            boxImg.scrollLeft = end
        }else{
            // 获取每次改变的起始位置
            start += speed
            // 将起始位置赋值给 boxImg 的滚动距离
            boxImg.scrollLeft = start
        }
    },30)
}

// 鼠标划上盒子时 停止运动
boxImg.onmouseover = function(){
    boxImg.style.cursor = 'pointer'
    // 先清除定时器
    clearInterval(dsq1)
}
boxImg.onmouseout = function(){
    // 调用图片和按钮的滚动函数
    imgMove()
}

// 点击按钮 先便利所有的按钮
for(let i = 0; i < spans.length ; i++){
    //给每个按钮绑定 点击事件
    spans[i].onclick = function(){
        //先清空所有按钮的样式
        spans[spanIndex].className = ""
        spanIndex = i
        //给当前点击的按钮加样式
        spans[spanIndex].className = 'scroll-right-span'
        // 获取对应图片的下标
        imgIndex = i + 1
        move()
    }
}

//ol 的划上 效果
//获取操作对象
var left = document.querySelector('.scroll-left')
var ol = left.querySelector('ol')
var lis = ol.querySelectorAll('li')
var scrollUl1 = document.querySelector('.scroll-left-ul1')
var scrollUl2 = document.querySelector('.scroll-left-ul2')

//给第一个li绑定鼠标划上
lis[0].onmouseover= function(){
    //改变第一个 li 的样式
    this.style.backgroundColor = ' rgba(75, 74, 74, 0.9)'
    //改变第二个 li 的样式
    lis[1].style.backgroundColor = '#FF0036'
    lis[1].style.color = '#ffd200'
    //让 ul1 隐藏, ul2 显示
    scrollUl1.style.display = 'none'
    scrollUl2.style.display = 'block'
}
//给第二个li绑定鼠标划上
lis[1].onmouseover= function(){
    //改变第二个 li 的样式
    this.style.backgroundColor = ' rgba(75, 74, 74, 0.9)'
    this.style.color = '#ffffff'
    //改变第一个 li 的样式
    lis[0].style.backgroundColor = '#FF0036'
    lis[0].style.color = '#ffffff'
    //让 ul1 显示, ul2 隐藏
    scrollUl1.style.display = 'block'
    scrollUl2.style.display = 'none'
}


