//获取账号cookie
var name1=getCookie("user")
//获取大盒子对象
var box=document.querySelector(".content-cont")
//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")

// 获取 redNum
var redNum  = document.querySelector('.redNum')
redNum.innerHTML = JSON.parse(cartList).length
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断当前cookie是否存在
if(name1){
    show()
}else{
    alert("你还没登录，请登录在进入")
    location="./login.html?shopping.html"
}

function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中
            return item.is_select==1
        })
        //获取当前被选中商品的种类和价格
        var sum=total()
        var str2=`
        <div class="content-top">
                <ul class="clearfix">
                    <li>全部商品
                        <span>${sum[0]}</span>
                    </li>
                    <li>降价商品
                        <span>0</span>
                    </li>
                    <li>库存紧张
                        <span>0</span>
                    </li>
                    <li class="top-right">
                        <span>已选商品（不含运费）</span>
                        <span>${sum[1]}</span>
                        <button>结 算</button>
                    </li>
                </ul> 
        </div>
        <div class="content-bot">
                <div class="content-bot-top">
                    <ul class="clearfix">
                        <li>
                            <form action="">
                                <input type="checkbox" name="quanxuan" ${aa?"checked":''} id="quan">
                                <label for="quan"> 全选</label>
                            </form>
                        </li>
                        <li>商品信息</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>金额</li>
                        <li>操作</li>
                    </ul>
                </div>
                <div class="content-bot-mid">
                    <ul>
        
        `
        //遍历数组中所有商品
        cartList.forEach(item=>{
            // console.log(item);
            str2+=`
                        <li>
                            <div class="li-top">
                                <form action="">
                                    <input type="checkbox" ${item.is_select==1?"checked":''} name="xuan" data-id="${item.list_id} id="dian">
                                    <label for="dian">店铺:</label>
                                </form>
                                <span>${item.list_store}</span>
                                <span></span>
                            </div>
                            <ol class="clearfix">
                                <li>
                                    <form action="">
                                        <input type="checkbox"  ${item.is_select==1?"checked":''} name="xuan" data-id="${item.list_id}">
                                    </form>
                                </li>
                                <li>
                                    <img src="${item.list_imgone}" alt="">
                                </li>
                                <li>
                                    <a href="./list.html"> ${item.list_name}</a>
                                </li>
                                <li>
                                    <span>￥</span>
                                    <span>${item.list_pirce}</span>
                                </li>
                                <li>
                                    <button type="button" data-id="${item.list_id}" ${item.list_num<=1?"disabled":''}>-</button>
                                    <input type="text" value="${item.list_num}">
                                    <button type="button" data-id="${item.list_id}" ${item.list_stock<=item.list_num?"disabled":''}>+</button>
                                </li>
                                <li>
                                    <span>￥</span>
                                    <span>${item.list_num*item.list_pirce}</span>
                                </li>
                                <li>
                                    <a href="#">移入收藏夹</a>
                                    <a href="#" data-id="${item.list_id}">删除</a>
                                    <a href="#">相似商品</a>
                                </li>
                            </ol>
                        </li>
            `
        })
        //给当前字符串拼接结束的标签
        str2+= `
            </ul>
        </div>
        <div class="content-bot-bot">
            <ul class="clearfix">
                <li>
                    <form action="">
                        <input type="checkbox" type="checkbox" name="quanxuan" ${aa?"checked":''} id="quan1">
                        <label for="quan1">全选</label>
                    </form>
                </li>
                <li>清空</li>
                <li>清除失效宝贝</li>
                <li>移入收藏夹</li>
                <li>分享</li>
                <li>
                    已选商品<span> ${sum[0]} </span>件
                </li>
                <li>合计（不含运费）：</li>
                <li>${sum[1]}</li>
                <li>
                    <button>结 算</button>
                </li>
            </ul>
        </div>
        `
        //最后把拼接好的内容添加到box大盒子中
        box.innerHTML=str2
    }else{
        var str1=`
          <div class="jumbotron">
              <h1>您的购物车空空如也</h1>
              <p>点击下方按钮快去选购吧! ^_^</p>
              <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去选吧</a></p>
          </div>
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
    }
}
show()
// 给box大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.list_id==id){
                item.list_num++
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.list_id==id){
                item.list_num--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if(target.innerHTML=="删除"){
        //获取当前点击对象的id
        var id=target.getAttribute("data-id")
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.list_id!=id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.list_id==id){
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.innerHTML=="结 算"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }
    //清空购物车
    if(target.innerHTML=="清空"){
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify([]))
        //调用show方法，重新把页面再次渲染
        show()
        history.go(0)
    }

}
//统计所选商品种类和价格
function total(){
    var num=0 //所选商品种类
    var price=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            num++
            price+=item.list_num*item.list_pirce
        }
    })
    return [num,price]
}