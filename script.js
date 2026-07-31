const items = document.querySelectorAll(".item");
const lightbox = document.getElementById("lightbox");
const preview = document.getElementById("preview");
const counter = document.getElementById("counter");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const close = document.getElementById("close");

let current = 0;

// เปิดรูป
function openImage(index){

    current = index;

    preview.src = items[current].querySelector("img").src;

    counter.textContent = `หน้า ${current+1} / ${items.length}`;

    lightbox.style.display = "flex";

    preview.classList.remove("zoom");

}

// คลิกการ์ด
items.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        openImage(index);

    });

});

// รูปถัดไป
function nextImage(){

    current++;

    if(current>=items.length){
        current=0;
    }

    preview.classList.remove("zoom");

    preview.style.opacity=0;

    setTimeout(()=>{

        preview.src=items[current].querySelector("img").src;

        preview.style.opacity=1;

    },150);

    counter.textContent=`หน้า ${current+1} / ${items.length}`;

}

// รูปก่อนหน้า
function prevImage(){

    current--;

    if(current<0){
        current=items.length-1;
    }

    preview.classList.remove("zoom");

    preview.style.opacity=0;

    setTimeout(()=>{

        preview.src=items[current].querySelector("img").src;

        preview.style.opacity=1;

    },150);

    counter.textContent=`หน้า ${current+1} / ${items.length}`;

}

// ปุ่ม
next.onclick=(e)=>{
    e.stopPropagation();
    nextImage();
}

prev.onclick=(e)=>{
    e.stopPropagation();
    prevImage();
}

close.onclick=()=>{
    lightbox.style.display="none";
}

// คลิกพื้นหลังปิด
lightbox.onclick=(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
}

// คีย์บอร์ด
document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){
        nextImage();
    }

    if(e.key==="ArrowLeft"){
        prevImage();
    }

    if(e.key==="Escape"){
        lightbox.style.display="none";
    }

});

// ซูมรูป
preview.addEventListener("click",(e)=>{

    e.stopPropagation();

    preview.classList.toggle("zoom");

});

// ปัดซ้ายขวา
let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){
        nextImage();
    }

    if(endX-startX>50){
        prevImage();
    }

});
