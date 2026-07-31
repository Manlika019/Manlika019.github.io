const images = document.querySelectorAll(".page img");

const popup = document.getElementById("popup");

const bigImage = document.getElementById("bigImage");

const close = document.getElementById("close");



images.forEach((img)=>{


    img.onclick=function(){


        bigImage.src=this.src;


        popup.style.display="flex";


        bigImage.style.animation="none";


        setTimeout(()=>{

            bigImage.style.animation="zoom .35s ease";

        },10);


    };


});



close.onclick=function(){

    popup.style.display="none";

};



popup.onclick=function(e){


    if(e.target===popup){

        popup.style.display="none";

    }

};
