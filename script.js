
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


// galery
abrir3.addEventListener('click',()=>{   
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "block";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/pared-tragos.png)"

})

abrir4.addEventListener('click',()=>{   
    document.querySelector('.daltomid').style.display = "block";
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/portada-coctel.jpg)"


})
// menu
abrir5.addEventListener('click',()=>{
    document.querySelector('.daltomid2').style.display = "block";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img/portada.jpg)"



})

abrir6.addEventListener('click',()=>{   
    document.querySelector('.daltomid2').style.display = "none";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "block";
    document.querySelector('.portada').style.backgroundImage = "url(./img-card/pared-tragos.png)"


})

abrir2.addEventListener('click',()=>{
    document.querySelector('.daltomid2').style.display = "block";
    document.querySelector('.daltomid').style.display = "none";
    document.querySelector('.tragos').style.display = "none";
    document.querySelector('.portada').style.backgroundImage = "url(./img/portada.jpg)"


})


abrir2.addEventListener('click', galery)
function galery(image,price){
    image = `<img src='./img/${image}' />`,
    price = `<p>precio: ${price}</p>`
    return[image,price]
}


for(i = 1;i<9;i++){
    var paramsGalery = galery(`${i}.png`,"$ 6.000")
    let paramsdiv = document.createElement('DIV')
    paramsdiv.classList.add("col-4","col-md-3",`item-${i}`,'flex-items')

    paramsdiv.innerHTML = paramsGalery[0] + paramsGalery[1];
    fragmento.appendChild(paramsdiv)
}
dalto2.appendChild(fragmento)


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
    a.classList.add(`link-${i}`,'items-link')
    a.innerHTML = img[0]

    div2.appendChild(a)
    dalto.appendChild(div2)
}
dalto.appendChild(fragmento)







