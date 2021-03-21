var view = document.querySelectorAll(".view");
var modal = document.querySelector(".modal-bg");
var leave = document.querySelector(".leave")

view.forEach(v=>{
    v.addEventListener("click", function() {
        console.log("me clicking noob");
        modal.classList.toggle("modal-active");
        console.log(modal)
        const parentNode = this.parentNode.parentNode;
        const imgProduct = parentNode.childNode[1];
        console.log(imgProduct);
    })
})

leave.addEventListener("click",function(){
    modal.classList.toggle("modal-active");
});