const hambMenu = document.querySelector('.material-symbols-outlined');
const navBar = document.querySelector('.navBar');
const body = document.querySelector('body')

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');


li1.innerText = 'Home';
li2.innerText = 'About Me';
li3.innerText = 'Skills';
li4.innerText = 'Projects';
li5.innerText = 'Contact';



hambMenu.addEventListener('click' , function(){


  ul.classList.toggle('ulList');
 
  

  li1.classList.toggle('liList')
  li2.classList.toggle('liList')
  li3.classList.toggle('liList')
  li4.classList.toggle('liList')
  li5.classList.toggle('liList')

  ul.append(li1,li2,li3,li4,li5);
  body.append(ul)

  if (ul.classList.contains('ulList')){
    ul.style.animationName ='menuAnimate'
    ul.style.animationDuration = '.5s'
    ul.style.transition ='.4s'
  }
  else{
    ul.style.animationName ='closeAnimate'
    ul.style.animationDuration = '.4s'
    ul.style.transition ='4s'
  }

 


})
