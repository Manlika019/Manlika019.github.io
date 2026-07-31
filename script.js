// เปิดรูปขนาดใหญ่
function show(src) {
    const lightbox = document.getElementById("lightbox");
    const big = document.getElementById("big");

    big.src = src;
    lightbox.style.display = "flex";
}

// ปิดรูป
function hide() {
    document.getElementById("lightbox").style.display = "none";
}

// กดปุ่ม ESC เพื่อปิด
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hide();
    }
});

// ป้องกันการปิดเมื่อคลิกที่รูป
document.getElementById("big").addEventListener("click", function(event) {
    event.stopPropagation();
});
