const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

// เปิดรูป
function showImage(index){
    current = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[current].src;
}

// คลิกรูป
images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        showImage(index);
    });
});

// ปิด
closeBtn.onclick = ()=>{
    lightbox.style.display="none";
};

// คลิกพื้นหลังปิด
lightbox.onclick=(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
};

// รูปก่อนหน้า
prevBtn.onclick=(e)=>{
    e.stopPropagation();

    current--;

    if(current<0){
        current=images.length-1;
    }

    lightboxImg.src=images[current].src;
};

// รูปถัดไป
nextBtn.onclick=(e)=>{
    e.stopPropagation();

    current++;

    if(current>=images.length){
        current=0;
    }

    lightboxImg.src=images[current].src;
};

// คีย์บอร์ด
document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!="flex") return;

    if(e.key==="ArrowRight"){
        nextBtn.click();
    }

    if(e.key==="ArrowLeft"){
        prevBtn.click();
    }

    if(e.key==="Escape"){
        lightbox.style.display="none";
    }

});
