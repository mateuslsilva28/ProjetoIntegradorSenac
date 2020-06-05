$(document).ready(function(){
    let altura = $(document).height();

    let largura = $(document).width();
    
    $(".menuMobile ul").css({"position":"fixed"});

    $(".parent img").click(function(){

        if (largura<=549){
            $(".iconMenu").hide()

            $(".menuMobile").append('<img class="fechar" src="Imagens/fechar.png">')

            $(".fechar").css({
                "background": 'transparent',
                "border": "none",
                "width": "35px",
                "position": "fixed",
                "left": '85%',
                "top": '5%'
                })

            $(".logoMobile").hide();    
            
            $(".menuMobile ul").css({"position":"fixed", "top":"10%", "left":"18%"})
            
            $(".menuMobile").css({"height":altura, "width": largura}).toggle('slow')

            fecharMenu()
        }
        else {

            $(".parent").prepend('<img class="fechar" src="Imagens/fechar.png">')
            $(".iconMenu").hide()
            $(".fechar").css({
                        "background": 'transparent',
                        "border": "none",
                        "width": "35px",
                        "padding-left": "10px",
                        })
            $(".menuMobile").css("height", altura).toggle('slow')
            
            fecharMenu()
        }

        function fecharMenu (){
            $(".fechar").click(function(){
                $(".fechar").hide()
                $(".iconMenu").show()
                
                $(".menuMobile").toggle('slow')
            })
        }
    })
})