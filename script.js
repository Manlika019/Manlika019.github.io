const pages = document.querySelectorAll(".page img");

const viewer = document.getElementById("viewer");

const showImage = document.getElementById("showImage");

const close = document.getElementById("close");



pages.forEach((img)=>{


    img.addEventListener("click",()=>{


        showImage.src = img.src;


        viewer.style.display="flex";


        showImage.style.animation="none";


        setTimeout(()=>{

            showImage.style.animation="open .35s ease";

        },10);



    });


});



close.onclick=()=>{

    viewer.style.display="none";

};



viewer.onclick=(e)=>{


    if(e.target===viewer){

        viewer.style.display="none";

    }

};
