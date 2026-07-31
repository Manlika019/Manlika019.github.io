const totalPages = 12;
let currentPage = 1;

const image = document.getElementById("pageImage");
const pageNumber = document.getElementById("pageNumber");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// แสดงรูป
function showPage(page) {
    image.style.opacity = 0;

    setTimeout(() => {
        image.src = page + ".jpg";
        pageNumber.textContent = `หน้า ${page} / ${totalPages}`;
        image.style.opacity = 1;
    }, 200);

    prev.disabled = (page === 1);
    next.disabled = (page === totalPages);
}

// ปุ่มถัดไป
next.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// ปุ่มก่อนหน้า
prev.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

// คีย์บอร์ด
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }

    if (e.key === "ArrowLeft" && currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

// เริ่มต้น
showPage(currentPage);
