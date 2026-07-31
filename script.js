const items = document.querySelectorAll(".item img");

const lightbox = document.getElementById("lightbox");

const preview = document.getElementById("preview");

const close = document.getElementById("close");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

const counter = document.getElementById("counter");



let images = [];

let current = 0;



// เก็บรูปทั้งหมด

items.forEach((img,index)=>{


    images.push(img.src);



    img.onclick = ()=>{


        current=index;


        lightbox.style.display="flex";


        preview.style.animation="none";


        setTimeout(()=>{

            preview.style.animation="openPage .5s ease";

        },10);



        showImage();


    }


});




// แสดงรูป

function showImage(){


    preview.src = images[current];


    counter.innerHTML = 
    `${current+1} / ${images.length}`;


}





// รูปถัดไป

next.onclick=()=>{


    current++;


    if(current >= images.length){

        current=0;

    }


    showImage();


    animate();


}




// รูปก่อนหน้า

prev.onclick=()=>{


    current--;


    if(current < 0){

        current=images.length-1;

    }


    showImage();


    animate();


}




// Animation เวลาเปลี่ยนหน้า

function animate(){


    preview.style.animation="none";


    setTimeout(()=>{


        preview.style.animation="openPage .5s ease";


    },10);


}




// ปิด

close.onclick=()=>{


    lightbox.style.display="none";


}



// คลิกพื้นหลังปิด

lightbox.onclick=(e)=>{


    if(e.target===lightbox){

        lightbox.style.display="none";

    }


}




// ใช้คีย์บอร์ด

document.addEventListener("keydown",(e)=>{


    if(e.key==="ArrowRight"){

        next.click();

    }


    if(e.key==="ArrowLeft"){

        prev.click();

    }


    if(e.key==="Escape"){

        close.click();

    }


});
