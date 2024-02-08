document.addEventListener("DOMContentLoaded",function(){
    const items=document.querySelectorAll(".item");
    items.forEach(function(item){
      const plusButton=item.querySelector(".plus");
      const minusButton=item.querySelector(".minus");
      const paragraph=item.querySelector(".paragraph")
      plusButton.addEventListener("click",function(){
        plusButton.style.display="none";
        minusButton.style.display="block";
        paragraph.style.display="block";
      });
      minusButton.addEventListener("click",function(){
        plusButton.style.display="block";
        minusButton.style.display="none";
        paragraph.style.display="none";
      });
    });
  });