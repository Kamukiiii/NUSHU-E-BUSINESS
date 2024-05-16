
const ul = document.querySelector('.style ul')
const img = document.querySelector('.cont .cont-left .ctl-img img')
let Data = []
let r = window.location.search.substr(1).substring(1).split("=")[1]
const span = document.querySelector('.title span')
const pcc = document.querySelector('.pcc')
//定义一个数组对象存放数据
const product_arr = [
  { goods_name: '女书定制团扇', goods_price: '70', Data },
  { goods_name: '古风明信片', goods_price: '2', Data },
  { goods_name: '女书挂历', goods_price: '70', Data },
  { goods_name: 'DIY书签', goods_price: '4', Data },
  { goods_name: '女书明信片', goods_price: '8', Data },
  { goods_name: '女书钥匙扣', goods_price: '15', Data },
  { goods_name: '女书纹身贴（一个装）', goods_price: '1.9', Data },
  { goods_name: '女书金属贴（五个装）', goods_price: '24', Data },
  { goods_name: '女书书法作品', goods_price: '45', Data },
  { goods_name: '女书古风扇', goods_price: '10', Data },
  { goods_name: '女书宣纸', goods_price: '2', Data },
  { goods_name: '女书印章', goods_price: '5', Data },
]
span.innerHTML = product_arr[r - 1].goods_name
pcc.innerHTML = product_arr[r - 1].goods_price
if (r == 1) {
  img.src = "./uploads/团扇.jpg"
  Data = [
    { src: "./uploads/团扇.jpg" },
    { src: "./uploads/团扇1.jpg" },
    { src: "./uploads/团扇2.jpg" },
    { src: "./uploads/团扇3.jpg" },
  ]
}
else if (r == 2) {
  img.src = "./uploads/蝴蝶明信片.jpg"
}
else if (r == 3) {
  img.src = "./uploads/挂历.jpg"
}
else if (r == 4) {
  img.src = "./uploads/书签.jpg"
}
else if (r == 5) {
  img.src = "./uploads/明信片.jpg"
}
else if (r == 6) {
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
  img.src = "./uploads/金属贴.jpg"
}
else if (r == 9) {
  img.src = "./uploads/书法1.jpg"
  Data = [
    { src: "./uploads/书法1.jpg" },
    { src: "./uploads/书法2.jpg" },
    { src: "./uploads/书法3.jpg" },
   
  ]
}
else if (r == 10) {
  img.src = "./uploads/女书扇子1.png"
  Data = [
    { src: "./uploads/女书扇子1.png" },
    { src: "./uploads/女书扇子2.jpg" },
    { src: "./uploads/女书扇子3.png" },
  ]
}
else if (r == 11) {
  img.src = "./uploads/女书宣纸.jpg"
}
else if (r == 12) {
  img.src = "./uploads/女书印章.jpg"
}

const users = [
  { pic: "./用户头像/user1.jpg" ,name:'MonkeyHe'},
  { pic: "./用户头像/user2.jpg", name:'长白山树神'},
  { pic: "./用户头像/user3.jpg", name:'亮金金' },
  { pic: "./用户头像/user4.jpg",name:'亦一' },
 
]

//渲染样式
for(let i=0;i<Data.length;i++){
  const newli = document.createElement('li')
  newli.innerHTML = `
     <li><a href="javascript:;" data-id="${i}">样式${i+1}</a></li>
  `
  ul.append(newli)
}
// console.log(Data.length)
ul.addEventListener('click',function(e){
  if(e.target.tagName === 'A'){
    // 加上active:先移除所有active,再添加active
    e.target.parentNode.classList.add('active')
    document.querySelector('.style .active').classList.remove('active')
    //点击样式，同时更换左边图片
    const id = e.target.dataset.id
    // console.log(Data[id].src)
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
  let random = Math.floor(Math.random() * 4)
  console.log(random)
  if (textarea.value.length == 0){
    alert('您还没有输入内容')
    return 
  }
  // console.log(value)
  let newli = document.createElement('li')
  list.insertBefore(newli, list.children[0])
  newli.innerHTML = `
                  <div class="info">
                    <img src=${users[random].pic} alt="">
                    <span>${users[random].name}</span>
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


//边栏-定制
const custom = document.querySelector('.custom')
custom.addEventListener('mouseenter',function(){
  custom.style.right = "0px"
})
custom.addEventListener('mouseleave', function () {
  custom.style.right = "-40px"
})