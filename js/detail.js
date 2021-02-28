
//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var box=document.querySelector(".content-cont")
var msgBox = document.querySelector(".msg-mid")
var dt;
//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('?')[1];
    (async function(){
        dt=await promiseAjax({
            url:'../php/detail.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        var str=`
    <div class="content-left">
        <div class="content-left-top">
            <a href="javascript:;">
                <img src="${dt.list_imgone}" alt="">
            </a>
            <div class="content-left-top-msg"></div>
        </div>
        <div class="content-left-bot">
            <ul class="clearfix">
                <li>
                    <a href="javascript:;">
                        <img src="${dt.list_imgone}" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="${dt.list_imgtwo}" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="${dt.list_imgthree}" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="${dt.list_imgfour}" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="${dt.list_imgfive}" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-left-msg">
            <a href="javascript:;">收藏商品</a>
            <span>
                <a href="javascript:;">举报</a>
            </span>
        </div>
    </div>
    <div class="content-left-big">
        <img src="${dt.list_imgone}" alt="">
    </div>
    <div class="content-mid">
        <div class="mid-name">
            <p>${dt.list_name}</p>
            <p>${dt.list_store}</p>
        </div>
        <div class="mid-price">
            <span>价格</span>
            <em>￥</em>
            <span>${dt.list_pirce}</span>
            <p>
                <span>本店活动</span>
                <em>满200元,包邮</em>
            </p>
        </div>
        <div class="mid-dress">
            <span>地址</span>
            <span>${dt.list_address}</span>
        </div>
        <div class="mid-talk">
            <ul class="clearfix">
                <li>
                    <a href="javascript::">
                        <em>月销量</em>
                        <span>${dt.list_shopnum}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript::">
                        <em>累计评价</em>
                        <span>${dt.list_comment}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript::">
                        <em>送天猫积分</em>
                        <span>89</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mid-pic">
            <span>规格</span>
            <a href="#">
                <img src="${dt.list_imgone}">
            </a>
            <a href="#">
                <img src="${dt.list_imgtwo}">
            </a>
            <a href="#">
                <img src="${dt.list_imgthree}">
            </a>
            <a href="#">
                <img src="${dt.list_imgfour}">
            </a>
            <a href="#">
                <img src="${dt.list_imgfive}">
            </a>
        </div>
        <div class="mid-num">
            <span>数量</span>
            <input type="number" min="1" max="${dt.list_stock}" value="1" class="mid-nums"> 件
            <span>库存${dt.list_stock}</span>
        </div>
        <div class="mid-but clearfix">
            <a href="#">立即购买</a>
            <a href="#">加入购物车</a>
        </div>
        <div class="mid-nav">
            <span>服务承诺</span>
            <a href="#">正品保证</a>
            <a href="#">门店自提</a>
            <a href="#">极速退款</a>
            <a href="#">七天无理由退换</a>
        </div>
    </div>
    <div class="content-right">
        <ul>
            <li>
                <a href="javascript:;">
                    <img src="${dt.list_imgtwo}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${dt.list_imgthree}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${dt.list_imgfour}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${dt.list_imgfive}" alt="">
                </a>
            </li>
        </ul>
    </div>
        `
        //把当前内容添加到大盒子中
        box.innerHTML=str;
    var str1=`
    <div class="msg-top">
        <ul>
            <li>商品详情
                <b></b>
            </li>
        </ul>
    </div>
    <div class="msg-bot">
        <div class="msg-bot-stroe">
            <p>品牌名称：${dt.list_store}</p>
            <p>产品参数：</p>
            <ul class="clearfix">
                <li>品牌: ${dt.list_store}</li>
                <li>货号: UQ427917000</li>
                <li>基础风格: 其他</li>
                <li>上市年份季节: 2020年夏季</li>
                <li>厚薄: 常规</li>
                <li>销售渠道类型: 商场同款</li>
                <li>材质成分: 棉66% 聚酯纤维34%</li>
            </ul>
        </div>
        <div class="msg-bot-serve">
            <img src="../images/msg.mid1.jpg" alt="">
        </div>
        <div class="msg-bot-content">
            <img src="../images/msg-mid6.jpg" alt="">
            <img src="${dt.list_imgtwo}" alt="">
            <img src="${dt.list_imgthree}" alt="">
            <img src="${dt.list_imgfour}" alt="">
            <img src="${dt.list_imgfive}" alt="">
            <img src="../images/msg-mid2.jpg" alt="">
        </div>
        <div class="msg-bot-msg">
            <img src="../images/msg-mid3.jpg" alt="">
            <img src="../images/msg-mid4.jpg" alt="">
        </div>
        <div class="msg-bot-nav">
            <img src="../images/msg-mid5.png" alt="">
        </div>
    </div>
    `
    //把当前内容添加到大盒子中
    msgBox.innerHTML=str1;
    })()

}else{
    alert("你还没选中商品")
    location="./list.html"
}

var boxAll = document.querySelector(".boxall")
//给大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        boxAll.style.display = 'block'
        var dsqboxAll = setTimeout(() => {
            boxAll.style.display = 'none'
        }, 2000);
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList3")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.list_id==dt.list_id){
                    a++
                    item.list_num++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.list_num=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['list_num']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify([dt]))
        }
    }
    if(target.innerHTML=="立即购买"){
        location='./shopping.html'
    }
}

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

var dsq 
dsq = setTimeout(() => {
    //获取 .content-left-top 对象
    var box1 = document.querySelector('.content-left-top')
    var img1 = box1.querySelector('img')
    //获取 .content-left-top-msg 对象
    var msg1 = document.querySelector('.content-left-top-msg')
    //获取 li 对象
    var spans = document.querySelector('.content-left-bot')
    var liss = spans.querySelectorAll('li')
    //获取 .content-left-big 对象
    var boxR = document.querySelector('.content-left-big')
    var img2 = boxR.querySelector('img')
    //获取 img 对象
    var imgs = spans.querySelectorAll('img')

    // 遍历所有的 span
    for (let i = 0; i < imgs.length; i++) {
        //给遍历出来对应的 span 添加点击事件
        imgs[i].onmouseover = function () {
            for (var x = 0; x < imgs.length; x++) {
                imgs[x].style = 'outline: 0'
            }
            this.style = 'outline: 2px solid #000'
            var src = this.src
            img1.src = src
            img2.src = src
        }
    }

    //遮藏层移动函数
    function move1(e) {
        //获取光标的移动位置
        var x1 = e.pageX - box1.offsetLeft - parseInt(msg1.offsetWidth / 2)
                -(window.innerWidth - 1190)/2 +5
        var y1 = e.pageY - box1.offsetTop - parseInt(msg1.offsetHeight / 2)- 140
        //设置边界值(.msg 的移动范围)
        var minX = 0,
            minY = 0
        var maxX = box1.clientWidth - msg1.offsetWidth
        var maxY = box1.clientHeight - msg1.offsetHeight
        //设置右边图片对应左边移动的距离
        var moveX, moveY
        //水平方向的偏移距离
        if (x1 < minX) {
            msg1.style.left = minX + 'px'
            moveX = minX
        } else if (x1 > maxX) {
            msg1.style.left = maxX + 'px'
            moveX = maxX
        } else {
            msg1.style.left = x1 + 'px'
            moveX = x1
        }
        //垂直方向的偏移距离
        if (y1 < minY) {
            msg1.style.top = minY + 'px'
            moveY = minY
        } else if (y1 > maxY) {
            msg1.style.top = maxY + 'px'
            moveY = maxY
        } else {
            msg1.style.top = y1 + 'px'
            moveY = y1
        }

        //右边图片的实际移动距离
        img2.style.left = -2 * moveX +'px'
        img2.style.top = -2 * moveY +'px'
    }

    // 给 box1 绑定鼠标移入事件
    box1.onmouseover = function () {
        //移入之后将 msg 与 boxR 显示
        msg1.style.display = 'block'
        boxR.style.display = 'block'
    }

    // 给 box1 绑定鼠标移动事件
    box1.onmousemove = function (e) {
        var e = e || window.event
        move1(e)
    }

    // 给 box1 绑定鼠标移出事件
    box1.onmouseout = function () {
        //移出之后将 msg 与 boxR 隐藏
        msg1.style.display = 'none'
        boxR.style.display = 'none'
    }
}, 1000);

//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")
// 获取 redNum
var redNum  = document.querySelector('.redNum')
redNum.innerHTML = JSON.parse(cartList).length
console.log(JSON.parse(cartList).length);