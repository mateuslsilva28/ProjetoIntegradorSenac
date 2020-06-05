function openModal() {
    document.getElementById("myModal").style.display = "block";
    window.addEventListener("keydown", move);
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  function move(){
    var tecla=event.keyCode;
    
    //37-Esquerda - 38 - Cima - 39 - Direita - 40 -Baixo - 13-Enter - 27-ESC

    if(tecla==37||tecla==65){
       plusSlides(-1);
    }
    else if(tecla==39||tecla == 68){
       plusSlides(1);
    }else if (tecla == 27){
        closeModal();
    }
    alert(tecla)
}
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }