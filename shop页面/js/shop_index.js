//点击样式更换图片
//初始数据
let Data = [
  { src: "./uploads/nvshu纹身贴1.jpg" },
  { src: "./uploads/nvshu纹身贴2.jpg" },
  { src: "./uploads/nvshu纹身贴3.jpg" },
  { src: "./uploads/nvshu纹身贴4.jpg" },
]

//事件委托：委托给ul
//取出ul
const ul = document.querySelector('.style ul')
const img = document.querySelector('.cont .cont-left .ctl-img img')
ul.addEventListener('click',function(e){
  if(e.target.tagName === 'A'){
    // 加上active:先移除所有active,再添加active
    document.querySelector('.style .active').classList.remove('active')
    e.target.parentNode.classList.add('active')
    //点击样式，同时更换左边图片
    const id = e.target.dataset.id
    console.log(Data[id].src)
    img.src = Data[id].src   
  }
})

//用户评论板块
const user_name = localStorage.getItem('nvshu-name')
const tx = document.querySelector('#tx')
const total = document.querySelector('.total')
//点进文本框，显示0/200字的盒子
tx.addEventListener('focus',function(){
  total.style.opacity = 1
})
//计算输入数字的长度，并渲染进total中
tx.addEventListener('input',function(){
  total.innerHTML = `${tx.value.length}/200字`
  if (tx.value.length > 200){
    alert('字数不得多于200字')
  }
})
//创建li,渲染li,随机用户头像
const list = document.querySelector('.contentlist ul')
const textarea = document.querySelector('textarea')
const btn = document.querySelector('button')
btn.addEventListener('click',function(){
  if (textarea.value.length == 0){
    alert('您还没有输入内容')
    return 
  }
  let newli = document.createElement('li')
  list.insertBefore(newli, list.children[0])
  newli.innerHTML = `
                  <div class="info">
                    <img src="./用户头像/user1.jpg" alt="">
                    <span>${user_name}</span>
                    <p>发布于${new Date().toLocaleString()}</p>
                  </div>
                  <div class="content">${textarea.value}</div>
                  <div class="the_del">X</div>
                  `
  textarea.value = ''
  total.innerHTML = '0/200字'

  //实现删除功能
  const del = document.querySelector('.the_del')
  del.addEventListener('click',function(){
    newli.remove()
  })
  //发布评论后，页面滚动
  document.documentElement.scrollTop = newli.offsetTop
})
//按下回车键也可以发送
tx.addEventListener('keyup',function(e){
  if(e.key === 'Enter'){
    if(tx.value.trim()!==''){
      btn.click()
    }
  }
})


//支付功能模拟
//1、点击按钮出现支付盒子
const btns = document.querySelector('.cont-right .buttn')
const pay = document.querySelector('.pay')
const payfor = document.querySelector('.payfor')
btns.addEventListener('click',function(){
  pay.style.display = 'block'
  //2、等待2-3s后支付成功
  //需要设置定时器->“免密支付->支付成功”
  setTimeout(function () {
    payfor.innerHTML = '支付成功'
  }, 2000)
  
})
//3、点击X,关闭当前支付盒子
const close = document.querySelector('.close')
close.addEventListener('click', function () {
  pay.style.display = 'none'
  payfor.innerHTML = '免密支付中...'
})

//跳转到购物界面
//获取url中的id
let r = window.location.search.substr(1).substring(1).split("=")[1]
const span = document.querySelector('.title span')
const pcc = document.querySelector('.pcc')
//定义一个数组对象存放数据
const product_arr = [
  {goods_name:'女书古风扇',goods_price:'30',Data},
  {goods_name:'女书耳坠',goods_price:'25',Data},
  {goods_name:'女书手机壳',goods_price:'35',Data},
  {goods_name:'女书挎包',goods_price:'35',Data},
  {goods_name:'女书明信片',goods_price:'8',Data},
  {goods_name:'女书钥匙扣',goods_price:'15',Data},
  {goods_name:'女书文身贴',goods_price:'18',Data},
  {goods_name:'女书金属贴',goods_price:'24',Data},
]
span.innerHTML = product_arr[r - 1].goods_name
pcc.innerHTML = product_arr[r - 1].goods_price
if(r==1){
  img.src = "./uploads/扇子1.jpg"
  Data = [
    { src: "./uploads/扇子1.jpg" },
    { src: "./uploads/扇子2.jpg" },
    { src: "./uploads/扇子3.jpg" },
    { src: "./uploads/扇子4.jpg" },
  ]
}
else if(r==2){
  img.src = "./uploads/耳坠2.jpg"
  Data = [
    { src: "./uploads/耳坠2.jpg" },
    { src: "./uploads/耳坠3.jpg" },
    { src: "./uploads/耳坠4.jpg" },
    { src: "./uploads/耳坠5.jpg" },
  ]
}
else if(r==3){
  ul.style.display = 'none'
  img.src = "./uploads/手机壳.jpg"
}
else if(r==4){
  ul.style.display = 'none'
  img.src = "./uploads/帆布包.jpg"
}
else if(r==5){
  ul.style.display = 'none'
  img.src = "./uploads/明信片.jpg"
}
else if(r==6){
  ul.style.display = 'none'
  img.src = "./uploads/钥匙扣.jpg"
}
else if (r == 7) {
  img.src = "./uploads/nvshu纹身贴1.jpg"
  Data = [
    { src: "./uploads/nvshu纹身贴1.jpg" },
    { src: "./uploads/nvshu纹身贴2.jpg" },
    { src: "./uploads/nvshu纹身贴3.jpg" },
    { src: "./uploads/nvshu纹身贴4.jpg" },
  ]
}
else if (r == 8) {
  ul.style.display = 'none'
  img.src = "./uploads/金属贴.jpg"
}

//边栏-定制
const custom = document.querySelector('.custom')
custom.addEventListener('mouseenter',function(){
  custom.style.right = "0px"
})
custom.addEventListener('mouseleave', function () {
  custom.style.right = "-40px"
})