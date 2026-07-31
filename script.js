// สร้าง Lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

const img = document.createElement("img");
lightbox.appendChild(img);

document.body.appendChild(lightbox);

// เมื่อคลิกที่รูป
const images = document.querySelectorAll(".page img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        img.src = image.src;
        lightbox.style.display = "flex";
    });
});

// คลิกพื้นหลังเพื่อปิด
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// กด ESC เพื่อปิด
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});

// เลื่อนขึ้นบนสุดเมื่อเปิดเว็บ
window.onload = function () {
    window.scrollTo(0, 0);
};
