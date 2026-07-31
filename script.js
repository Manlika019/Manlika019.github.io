const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// เปิดรูป
function openImage(index){
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
}

// คลิกการ์ด
cards.forEach((card,index)=>{
    card.addEventListener("click",()=>{
        openImage(index);
    });
});

// ปิด
closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none";
});

// คลิกพื้นหลังปิด
lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
});

// รูปก่อนหน้า
function previousImage(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=cards.length-1;
    }
    lightboxImg.src=cards[currentIndex].querySelector("img").src;
}

// รูปถัดไป
function nextImage(){
    currentIndex++;
    if(currentIndex>=cards.length){
        currentIndex=0;
    }
    lightboxImg.src=cards[currentIndex].querySelector("img").src;
}

prevBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    previousImage();
});

nextBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    nextImage();
});

// คีย์บอร์ด
document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowLeft"){
        previousImage();
    }

    if(e.key==="ArrowRight"){
        nextImage();
    }

    if(e.key==="Escape"){
        lightbox.style.display="none";
    }

});

// ปัดซ้าย-ขวาบนมือถือ
let startX = 0;

lightbox.addEventListener("touchstart",(e)=>{
    startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){
        nextImage();
    }

    if(endX-startX>50){
        previousImage();
    }

});
