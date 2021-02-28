//获取操作对象
var listMid = document.querySelector('.content-top-mid')
var listContent = document.querySelector('.content-top-mid-right');
var listUl = listContent.querySelector('ul');
var listMore1 = listContent.querySelector('.ul-right');
// 添加商标
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
                    <a href="${data[i].banner_ulr}">
                        <img src="${data[i].banner_imgulr}" alt="">   
                        <div class="content-banner-p">
                            <span>${data[i].banner_name}</span>
                        </div> 
                    </a>
                </li>
                `
            }
            //把当前拼接完毕的内容，添加到div对象中
            listUl.innerHTML = str
        },
        error: function (dt) { 
            console.log(dt)  // 这里是插件里返回的参数是什么,就是什么
        }
    })
})()

// 点击商标的更多(显示更多图标)
var listNum = 0
listMore1.onclick=function(){
    listNum++
    if(listNum%2 != 0){
        listMid.style.height = '173px'
    }else{
        listMid.style.height = '114px'
    }
}

// 分页器
//获取操作对象
var listContentBot = document.querySelector('.content-bot-bot');
var listContentTop = document.querySelector('.content-bot-top');
var listContentTopA = listContentTop.querySelectorAll('a');
var listBotUl = listContentBot.querySelector('ul')
var listPagination = document.querySelector('.pagination');
var listContent1 = document.querySelector('.content-top-bot1-right');
var listContent2 = document.querySelector('.content-top-bot2-right');
var listContent3 = document.querySelector('.search-bot');

(async function(){
    // 等待下面先执行
    var dt=await promiseAjax({
        url:'../php/list.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(listPagination,{
        pageInfo:{
            pagenum:1,
            pagesize:16,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/16)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*16,m*16)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <li>
                    <div class="content-bot-img1">
                        <a href="./detail.html?${item.list_id}">
                            <img src="${item.list_imgone}" alt="">
                        </a>
                    </div>
                    <div class="content-bot-imgs">
                        <ol class="clearfix">
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgtwo}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgthree}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfour}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfive}" alt="">
                                </a>
                            </li>
                        </ol>
                    </div>
                    <p>
                        <i>￥ </i>
                        <span>${item.list_pirce}</span>
                    </p>
                    <p>
                        <a href="#">${item.list_name}</a>
                    </p>
                    <p>
                        <a href="#">${item.list_store}</a>
                    </p>
                    <p>
                        <span>
                            月成交
                            <b>${item.list_shopnum}</b>笔
                        </span>
                        <span>
                            评论
                            <a href="#">
                                <b>${item.list_comment}</b>
                            </a>
                        </span>
                        <img src="../images/list-93-93.png" alt="">
                    </p>
                </li>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            listBotUl.innerHTML=str
        }
    })
})();

//模糊查询
listContent1.onclick = async function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    // 获取点击的文本内容
    var textVal1 = e.target.innerText
    var dt=await promiseAjax({
        url:'../php/list_mohu.php',
        datatype:'json',
        type: 'get',
        data : 'value=' + textVal1
    })
    //创建分页器对象
    new Pagination(listPagination,{
        pageInfo:{
            pagenum:1,
            pagesize:16,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/16)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*16,m*16)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <li>
                    <div class="content-bot-img1">
                        <a href="./detail.html?${item.list_id}">
                            <img src="${item.list_imgone}" alt="">
                        </a>
                    </div>
                    <div class="content-bot-imgs">
                        <ol class="clearfix">
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgtwo}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgthree}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfour}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfive}" alt="">
                                </a>
                            </li>
                        </ol>
                    </div>
                    <p>
                        <i>￥ </i>
                        <span>${item.list_pirce}</span>
                    </p>
                    <p>
                        <a href="#">${item.list_name}</a>
                    </p>
                    <p>
                        <a href="#">${item.list_store}</a>
                    </p>
                    <p>
                        <span>
                            月成交
                            <b>${item.list_shopnum}</b>笔
                        </span>
                        <span>
                            评论
                            <a href="#">
                                <b>${item.list_comment}</b>
                            </a>
                        </span>
                        <img src="../images/list-93-93.png" alt="">
                    </p>
                </li>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            listBotUl.innerHTML=str
        }
    })
};

listContent2.onclick = async function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    // 获取点击的文本内容
    var textVal2 = e.target.innerText
    var dt=await promiseAjax({
        url:'../php/list_mohu1.php',
        datatype:'json',
        type: 'get',
        data : 'value1=' + textVal2
    })
    //创建分页器对象
    new Pagination(listPagination,{
        pageInfo:{
            pagenum:1,
            pagesize:16,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/16)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*16,m*16)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <li>
                    <div class="content-bot-img1">
                        <a href="./detail.html?${item.list_id}">
                            <img src="${item.list_imgone}" alt="">
                        </a>
                    </div>
                    <div class="content-bot-imgs">
                        <ol class="clearfix">
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgtwo}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgthree}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfour}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfive}" alt="">
                                </a>
                            </li>
                        </ol>
                    </div>
                    <p>
                        <i>￥ </i>
                        <span>${item.list_pirce}</span>
                    </p>
                    <p>
                        <a href="#">${item.list_name}</a>
                    </p>
                    <p>
                        <a href="#">${item.list_store}</a>
                    </p>
                    <p>
                        <span>
                            月成交
                            <b>${item.list_shopnum}</b>笔
                        </span>
                        <span>
                            评论
                            <a href="#">
                                <b>${item.list_comment}</b>
                            </a>
                        </span>
                        <img src="../images/list-93-93.png" alt="">
                    </p>
                </li>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            listBotUl.innerHTML=str
        }
    })
};

listContent3.onclick = async function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    // 获取点击的文本内容
    var textVal = e.target.innerText
    console.log(textVal);
    var dt=await promiseAjax({
        url:'../php/list_mohu2.php',
        datatype:'json',
        type: 'get',
        data : 'value2=' + textVal
    })
    //创建分页器对象
    new Pagination(listPagination,{
        pageInfo:{
            pagenum:1,
            pagesize:16,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/16)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*16,m*16)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <li>
                    <div class="content-bot-img1">
                        <a href="./detail.html?${item.list_id}">
                            <img src="${item.list_imgone}" alt="">
                        </a>
                    </div>
                    <div class="content-bot-imgs">
                        <ol class="clearfix">
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgtwo}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgthree}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfour}" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="${item.list_imgfive}" alt="">
                                </a>
                            </li>
                        </ol>
                    </div>
                    <p>
                        <i>￥ </i>
                        <span>${item.list_pirce}</span>
                    </p>
                    <p>
                        <a href="#">${item.list_name}</a>
                    </p>
                    <p>
                        <a href="#">${item.list_store}</a>
                    </p>
                    <p>
                        <span>
                            月成交
                            <b>${item.list_shopnum}</b>笔
                        </span>
                        <span>
                            评论
                            <a href="#">
                                <b>${item.list_comment}</b>
                            </a>
                        </span>
                        <img src="../images/list-93-93.png" alt="">
                    </p>
                </li>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            listBotUl.innerHTML=str
        }
    })
};

for(let i = 0 ; i < listContentTopA.length ; i++){
    if(i==0){
        listContentTopA[i].onclick=async function(){
            for(let i = 0 ; i < listContentTopA.length ; i++){
                listContentTopA[i].style = 'color: #806F66;background-color: #ffffff;'
            }
            this.style = 'color: #FF0036;background-color: #e6e1e1;'
            var dt=await promiseAjax({
                url:'../php/list.php',
                datatype:'json'
            })
            //创建分页器对象
            new Pagination(listPagination,{
                pageInfo:{
                    pagenum:1,
                    pagesize:16,
                    totalsize:dt.length,
                    totalpage:Math.ceil(dt.length/16)
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:"下一页",
                    last:"尾页"
                },cb(m){
                    //获取当前页需要显示的数据
                    var ar1=dt.slice((m-1)*16,m*16)
                    //创建拼接所有数据的字符串
                    var str=''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item=>{
                        str+=`
                        <li>
                            <div class="content-bot-img1">
                                <a href="./detail.html?${item.list_id}">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </div>
                            <div class="content-bot-imgs">
                                <ol class="clearfix">
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgone}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgtwo}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgthree}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfour}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfive}" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <p>
                                <i>￥ </i>
                                <span>${item.list_pirce}</span>
                            </p>
                            <p>
                                <a href="#">${item.list_name}</a>
                            </p>
                            <p>
                                <a href="#">${item.list_store}</a>
                            </p>
                            <p>
                                <span>
                                    月成交
                                    <b>${item.list_shopnum}</b>笔
                                </span>
                                <span>
                                    评论
                                    <a href="#">
                                        <b>${item.list_comment}</b>
                                    </a>
                                </span>
                                <img src="../images/list-93-93.png" alt="">
                            </p>
                        </li>
                        `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                    listBotUl.innerHTML=str
                }
            })
        }
    }
    if(i==1){
        listContentTopA[i].onclick=async function(){
            for(let i = 0 ; i < listContentTopA.length ; i++){
                listContentTopA[i].style = 'color: #806F66;background-color: #ffffff;'
            }
            this.style = 'color: #FF0036;background-color: #e6e1e1;'
            var dt=await promiseAjax({
                url:'../php/list1.php',
                datatype:'json'
            })
            //创建分页器对象
            new Pagination(listPagination,{
                pageInfo:{
                    pagenum:1,
                    pagesize:16,
                    totalsize:dt.length,
                    totalpage:Math.ceil(dt.length/16)
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:"下一页",
                    last:"尾页"
                },cb(m){
                    //获取当前页需要显示的数据
                    var ar1=dt.slice((m-1)*16,m*16)
                    //创建拼接所有数据的字符串
                    var str=''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item=>{
                        str+=`
                        <li>
                            <div class="content-bot-img1">
                                <a href="./detail.html?${item.list_id}">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </div>
                            <div class="content-bot-imgs">
                                <ol class="clearfix">
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgone}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgtwo}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgthree}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfour}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfive}" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <p>
                                <i>￥ </i>
                                <span>${item.list_pirce}</span>
                            </p>
                            <p>
                                <a href="#">${item.list_name}</a>
                            </p>
                            <p>
                                <a href="#">${item.list_store}</a>
                            </p>
                            <p>
                                <span>
                                    月成交
                                    <b>${item.list_shopnum}</b>笔
                                </span>
                                <span>
                                    评论
                                    <a href="#">
                                        <b>${item.list_comment}</b>
                                    </a>
                                </span>
                                <img src="../images/list-93-93.png" alt="">
                            </p>
                        </li>
                        `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                    listBotUl.innerHTML=str
                }
            })
        }
    }
    if(i==2){
        listContentTopA[i].onclick=async function(){
            for(let i = 0 ; i < listContentTopA.length ; i++){
                listContentTopA[i].style = 'color: #806F66;background-color: #ffffff;'
            }
            this.style = 'color: #FF0036;background-color: #e6e1e1;'
            var dt=await promiseAjax({
                url:'../php/list2.php',
                datatype:'json'
            })
            //创建分页器对象
            new Pagination(listPagination,{
                pageInfo:{
                    pagenum:1,
                    pagesize:16,
                    totalsize:dt.length,
                    totalpage:Math.ceil(dt.length/16)
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:"下一页",
                    last:"尾页"
                },cb(m){
                    //获取当前页需要显示的数据
                    var ar1=dt.slice((m-1)*16,m*16)
                    //创建拼接所有数据的字符串
                    var str=''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item=>{
                        str+=`
                        <li>
                            <div class="content-bot-img1">
                                <a href="./detail.html?${item.list_id}">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </div>
                            <div class="content-bot-imgs">
                                <ol class="clearfix">
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgone}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgtwo}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgthree}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfour}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfive}" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <p>
                                <i>￥ </i>
                                <span>${item.list_pirce}</span>
                            </p>
                            <p>
                                <a href="#">${item.list_name}</a>
                            </p>
                            <p>
                                <a href="#">${item.list_store}</a>
                            </p>
                            <p>
                                <span>
                                    月成交
                                    <b>${item.list_shopnum}</b>笔
                                </span>
                                <span>
                                    评论
                                    <a href="#">
                                        <b>${item.list_comment}</b>
                                    </a>
                                </span>
                                <img src="../images/list-93-93.png" alt="">
                            </p>
                        </li>
                        `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                    listBotUl.innerHTML=str
                }
            })
        }
    }
    if(i==3){
        listContentTopA[i].onclick=async function(){
            for(let i = 0 ; i < listContentTopA.length ; i++){
                listContentTopA[i].style = 'color: #806F66;background-color: #ffffff;'
            }
            this.style = 'color: #FF0036;background-color: #e6e1e1;'
            var dt=await promiseAjax({
                url:'../php/list3.php',
                datatype:'json'
            })
            //创建分页器对象
            new Pagination(listPagination,{
                pageInfo:{
                    pagenum:1,
                    pagesize:16,
                    totalsize:dt.length,
                    totalpage:Math.ceil(dt.length/16)
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:"下一页",
                    last:"尾页"
                },cb(m){
                    //获取当前页需要显示的数据
                    var ar1=dt.slice((m-1)*16,m*16)
                    //创建拼接所有数据的字符串
                    var str=''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item=>{
                        str+=`
                        <li>
                            <div class="content-bot-img1">
                                <a href="./detail.html?${item.list_id}">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </div>
                            <div class="content-bot-imgs">
                                <ol class="clearfix">
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgone}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgtwo}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgthree}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfour}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfive}" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <p>
                                <i>￥ </i>
                                <span>${item.list_pirce}</span>
                            </p>
                            <p>
                                <a href="#">${item.list_name}</a>
                            </p>
                            <p>
                                <a href="#">${item.list_store}</a>
                            </p>
                            <p>
                                <span>
                                    月成交
                                    <b>${item.list_shopnum}</b>笔
                                </span>
                                <span>
                                    评论
                                    <a href="#">
                                        <b>${item.list_comment}</b>
                                    </a>
                                </span>
                                <img src="../images/list-93-93.png" alt="">
                            </p>
                        </li>
                        `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                    listBotUl.innerHTML=str
                }
            })
        }
    }
    if(i==4){
        listContentTopA[i].onclick=async function(){
            for(let i = 0 ; i < listContentTopA.length ; i++){
                listContentTopA[i].style = 'color: #806F66;background-color: #ffffff;'
            }
            this.style = 'color: #FF0036;background-color: #e6e1e1;'
            var dt=await promiseAjax({
                url:'../php/list4.php',
                datatype:'json'
            })
            //创建分页器对象
            new Pagination(listPagination,{
                pageInfo:{
                    pagenum:1,
                    pagesize:16,
                    totalsize:dt.length,
                    totalpage:Math.ceil(dt.length/16)
                },
                textInfo:{
                    first:'首页',
                    prev:"上一页",
                    next:"下一页",
                    last:"尾页"
                },cb(m){
                    //获取当前页需要显示的数据
                    var ar1=dt.slice((m-1)*16,m*16)
                    //创建拼接所有数据的字符串
                    var str=''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item=>{
                        str+=`
                        <li>
                            <div class="content-bot-img1">
                                <a href="./detail.html?${item.list_id}">
                                    <img src="${item.list_imgone}" alt="">
                                </a>
                            </div>
                            <div class="content-bot-imgs">
                                <ol class="clearfix">
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgone}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgtwo}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgthree}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfour}" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="${item.list_imgfive}" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <p>
                                <i>￥ </i>
                                <span>${item.list_pirce}</span>
                            </p>
                            <p>
                                <a href="#">${item.list_name}</a>
                            </p>
                            <p>
                                <a href="#">${item.list_store}</a>
                            </p>
                            <p>
                                <span>
                                    月成交
                                    <b>${item.list_shopnum}</b>笔
                                </span>
                                <span>
                                    评论
                                    <a href="#">
                                        <b>${item.list_comment}</b>
                                    </a>
                                </span>
                                <img src="../images/list-93-93.png" alt="">
                            </p>
                        </li>
                        `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                    listBotUl.innerHTML=str
                }
            })
        }
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

//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")

// 获取 redNum
var redNum  = document.querySelector('.redNum')
redNum.innerHTML = JSON.parse(cartList).length