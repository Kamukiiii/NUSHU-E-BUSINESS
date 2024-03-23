 //轮播图
 const data = [
    {url:"./image/img1.png"},
    {url:"./image/img2.jpg"},
    {url:"./image/img3.jpg"},
    {url:"./image/img4.jpg"}
 ]
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const img = document.querySelector('.slider-wrapper img')
let i =  0
function rep(){
    img.src = data[i].url
    document.querySelector('.slider-footer .slider-indicator .active').classList.remove('active')
    document.querySelector(`.slider-indicator li:nth-child(${i+1})`).classList.add('active')
}
prev.addEventListener('click',function(){
    i--
    i = i < 0 ? 3 : i
    rep()
})
next.addEventListener('click',function(){
    i++
    i = i > 3 ? 0 : i
    rep()
})
let n = setInterval(function(){
    next.click()
},1000)
const slider_wrapper = document.querySelector('.slider-wrapper')
slider_wrapper.addEventListener('mouseenter',function(){
    clearInterval(n)
})
slider_wrapper.addEventListener('mouseleave',function(){
    clearInterval(n)
    n = setInterval(function () {
        next.click()
    }, 1000)
})
//点击周边，页面下滑
const goods = document.querySelector('#goods')
const head = document.querySelector('.product .head')
goods.addEventListener('click', function () {
    //页面滚动距离
    document.documentElement.scrollTop = head.offsetTop
})
//产品渲染
let proData = [
    { src:"image/uploads/扇子.jpg"},
    { src:"image/uploads/耳坠1.jpg"},
    { src:"image/uploads/手机壳.jpg"},
    { src:"image/uploads/帆布包2.jpg"},
    { src:"image/uploads/明信片.jpg"},
    { src:"image/uploads/钥匙扣.jpg"},
    { src:"image/uploads/nvshu纹身贴6.jpg"},
    { src:"image/uploads/金属贴.jpg"},
    
]
const ul = document.querySelector('.product .pro ul')
for(let i = 0 ; i < proData.length ; i++){
    const li = document.createElement('li')
    li.innerHTML = `
        <a href="./shop页面/shop.html" id='transmit${i + 1}' onclick='go(${i + 1})' >
        <img src=${proData[i].src} alt="">
        </a>
    `
    ul.appendChild(li)
}

// 点击不同的小li，跳转到一部分元素不相同的同一页面
function go(n){
    let transmit = document.getElementById(`transmit${n}`)
    let id = n
    transmit.href = './shop页面/shop.html?id=' + id
}
//登陆功能
const li1 = document.querySelector('.right li:first-child')
const li2 = li1.nextElementSibling
//渲染函数
function render(){
    const uname = localStorage.getItem('nvshu-name')
    if(uname){
        li1.innerHTML = `
            <img src="./shop页面/用户头像/user1.jpg" alt=""><p>${uname}</p>
        `
        li2.innerHTML = `
            <p id="exit">退出登录</p>
        `
    }else{
        li1.innerHTML = `
            <a href="./login.html">登录</a>
        `
        li2.innerHTML = `
            <a href="./login.html">注册</a>
        `
    }
}
render()
//点击退出登录，清除本地存储数据
li2.addEventListener('click',function(){
    localStorage.removeItem('nvshu-name')
    render()
})
