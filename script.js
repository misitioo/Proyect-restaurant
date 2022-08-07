
const dalto = document.querySelector('.daltomid');
const dalto2 = document.querySelector('.daltomid2');

const abrir = document.getElementById('btn');
const abrir2 = document.getElementById('btn2');
const abrir3 = document.getElementById('btn3');

const abrir4 = document.getElementById('btns1');
const abrir5 = document.getElementById('btns2');
const abrir6 = document.getElementById('btns3');

const imgs = document.querySelectorAll('img');


let fragmento = document.createDocumentFragment();


var scrollval =  0;
window.addEventListener('scroll', () => {
  if(scrollval > window.scrollY) {
    document.querySelector('.subir').style.display = "none"
  } else {
    // Do something
    document.querySelector('.subir').style.display = "block"
  }
  scrollval = window.scrollY;
});

window.addEventListener('load',()=>{
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
})

// galery
abrir3.addEventListener('click',()=>{   
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "block";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/pared-tragos.png)"
    document.querySelector('.portada').style.backgroundPositionY ="top"
    
})

abrir4.addEventListener('click',()=>{   
    document.querySelector('.daltomid').style.display = "block";
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/portada-coctel.jpg)"
    document.querySelector('.portada').style.backgroundPositionY ="bottom"


})
// menu
abrir5.addEventListener('click',()=>{
    document.querySelector('.daltomid2').style.display = "block";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.display = "none";



})

abrir6.addEventListener('click',()=>{   
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "block";
    document.getElementById('port').style.backgroundImage = "url(./img-card/pared-tragos.png)"
    


})

abrir2.addEventListener('click',()=>{
    document.querySelector('.daltomid2').style.display = "block";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img/portada1.png)"


})



// lista

function card(img){
    img = `<img src='./img-card/${img}' />`
    return [img]

}

abrir.addEventListener('click', () =>{
    document.querySelector('.daltomid').style.display = "block";
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/portada-coctel.jpg)"

    
})

for(let i =0; i<3;i++){
    var div2 = document.createElement('DIV')
    var a = document.createElement('A')
    var img = card(`${i}.png`)


    div2.classList.add('text-card')
    a.classList.add("col-6","col-md-4",`link-${i}`,'items-link')
    a.innerHTML = img[0]

    div2.appendChild(a)
    dalto.appendChild(div2)
}

dalto.appendChild(fragmento)




// *********



