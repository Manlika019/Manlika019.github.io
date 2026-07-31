const cards = document.querySelectorAll(".card img");


const popup = document.getElementById("popup");

const bigImage = document.getElementById("bigImage");

const close = document.getElementById("close");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

const number = document.getElementById("number");



let images=[];

let current=0;



cards.forEach((img,index)=>{


images.push(img.src);



img.onclick=()=>{


current=index;

open();


};


});




function open(){


popup.style.display="flex";


bigImage.src=images[current];


bigImage.style.animation="none";


setTimeout(()=>{

bigImage.style.animation="show .5s";

},10);


number.innerHTML=
`${current+1} / ${images.length}`;


}




close.onclick=()=>{

popup.style.display="none";

};



next.onclick=()=>{


current++;


if(current>=images.length){

current=0;

}


open();


};




prev.onclick=()=>{


current--;


if(current<0){

current=images.length-1;

}


open();


};




// คลิกพื้นหลังปิด

popup.onclick=(e)=>{


if(e.target===popup){

popup.style.display="none";

}


};



// คีย์บอร์ด

document.onkeydown=(e)=>{


if(e.key==="Escape"){

popup.style.display="none";

}


if(e.key==="ArrowRight"){

next.click();

}


if(e.key==="ArrowLeft"){

prev.click();

}


};
