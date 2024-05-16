const li1 = document.querySelector('li:nth-child(1)')
//点进界面2s后发送
setTimeout(function(){
    li1.innerHTML = `
         <div class="s">
                <img src="./用户头像/客服头像.jpg" alt="">
                <div class="shape">
                    <p>您好~请发送您的定制需求</p>
                </div>
        </div>
    `
},2000)
const tx = document.querySelector('#tx')
const ul = document.querySelector('ul')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    if (tx.value.length == 0) {
        alert('您还没有输入内容')
        return
    }
    let newli = document.createElement('li')
    newli.classList.add('u')
    newli.innerHTML = `
         <div class="s">
            <img src="./用户头像/user1.jpg" alt="">
            <div class="shape">
              <p>${tx.value}</p>
              </div>
        </div>
    `
    ul.append(newli)
    tx.value = ''
})
tx.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        if (tx.value.trim() !== '') {
            btn.click()
        }
    }
})