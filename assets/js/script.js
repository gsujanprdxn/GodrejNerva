/* Author: 

*/
var category = document.querySelector('.imgnavigation').children;
var images = document.querySelector('.img_container').children;
var navbar = document.querySelector('.navbar').children


for(var i=0;i<navbar.length;i++){
    navbar[i].addEventListener("click",function(){
        for(var j=0;j<navbar.length;j++){
            navbar[j].classList.remove("active");
        }
        this.classList.add("active")
    })
}

for(var i=0;i<category.length;i++){
    category[i].addEventListener("click",function(){
        for(var j=0;j<category.length;j++){
            category[j].classList.remove("activenav");
        }
        this.classList.add("activenav");
        var target = this.getAttribute("data-target");
        console.log(target);
        for(var k=0;k<images.length;k++){
            images[k].style.display = "none";
            if(target=="All"){
                images[k].style.display = "block";
            }
            if(images[k].getAttribute("data-id")==target){
                images[k].style.display = "block";
            }
        }
    })
}























