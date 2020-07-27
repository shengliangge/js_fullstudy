let send=document.getElementById('send')
send.addEventListener('click',function(){
let li=document.createElement('li')
li.setAttribute('class','content-item')
let divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)
let img=document.createElement('img')
img.setAttribute('src','./image/user.jpg')
divPic.appendChild(img)

let message=document.createElement


console.log(li)

let l =` <li class="content-item">
<div class="pic">
  <img src="./image/user.jpg" alt="">
</div>
<div class="massage">
  <p class="name">秋多班</p>
  <p class="detail">洋洋拍</p>
</div>
</li>
`
let item=document.getElementById('item')
console.log(l)
item.innerHTML+=l
})