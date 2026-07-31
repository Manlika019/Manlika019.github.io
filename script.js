// สร้างกล่องแสดงรูป
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = '<img id="lightbox-img">';
document.body.appendChild(lightbox);

// เมื่อคลิกรูป
document.querySelectorAll(".page img").forEach(img => {
    img.addEventListener("click", function () {
        document.getElementById("lightbox-img").src = this.src;
        lightbox.style.display = "flex";
    });
});

// คลิกพื้นหลังเพื่อปิด
lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// กด ESC เพื่อปิด
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        lightbox.style.display = "none";
    }
});
