
          var fotoAtual = 0;
          carousel();

          var slide1 = 1;
          trocaFoto(slide1);

              function trocaBotoes(n) {
                  trocaFoto(slide1 += n);
              }
        
              function indicador(n) {
                  trocaFoto(slide1 = n);
              }
        
              function trocaFoto(n) {
                  var i;
                  var fotos = document.getElementsByClassName("mySlides");
                  var indicador = document.getElementsByClassName("demo");
                  if (n > fotos.length) {slide1 = 1}
                  if (n < 1) {slide1 = fotos.length}
                  for (i = 0; i < fotos.length; i++) {
                      fotos[i].style.display = "none";  
                  }
                  for (i = 0; i < indicador.length; i++) {
                      indicador[i].className = indicador[i].className.replace(" w3-white", "");
                  }
                  fotos[slide1-1].style.display = "block";  
                      indicador[slide1-1].className += " w3-white";
                  }

                  function carousel() {

                  var i;
                  var fotos = document.getElementsByClassName("mySlides");
                  for (i = 0; i < fotos.length; i++) {
                  fotos[i].style.display = "none";  
                  }
                  fotoAtual++;
                  if (fotoAtual > fotos.length) {fotoAtual = 1}    
                  fotos[fotoAtual-1].style.display = "block";
                  
                  indicador(fotoAtual);
                  setTimeout(carousel, 10000); // Muda a foto a cada 10 segundos
          }