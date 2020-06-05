$(window).ready(function(){
    var nome = $("#nome");
    var telefone = $("#telefone");
    var email=$("#email");
    var erro="";
    var select = $('select');
    var btnEnviar = $("#btnEnviar");
    var cargo = $("#cargo");
    var idade = $("#idade");
    var endereco = $("#endereco");
    var cidade = $("#cidade");
    var estado =$("#estado");
    var mensagem = $("#mensagem")
    var escolaridade = $("#escolaridade");

    console.log(select)

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
  
    $(telefone).mask(SPMaskBehavior, spOptions);

    btnEnviar.click(function(){
        if (nome.val()==""){
            erro = 'Nome obrigatório\n'
        }
        else if(nome.val().length <=3){
            erro += 'Nome inválido \n';
        }
        if (cargo.val()==""){
            erro += 'Cargo obrigatório \n';
        }
        if(idade.val()==""){
            erro += 'Idade obrigatória \n';
        }
        if((endereco.val()=="")||(cidade.val()=="")||(estado.val()=="")){
            erro += 'Endereço obrigatório \n';
        }

        /*
        if (escolaridade.val()==""){
            erro += 'Escolaridade obrigatória \n';
        }else if (escolaridade.val().length <6){
            erro += 'Escolaridade inválida \n';
        }*/

        if(telefone.val()==""){
            erro += 'Telefone obrigatório\n'
        }
        else if(telefone.val().length <14){
            erro += 'Telefone inválido\n'
        }
        if(email.val()==""){
            erro += 'E-mail obrigatório \n'
        }
        else if(verificaEmail(email.val())==false){
            erro+= 'E-mail inválido\n'
        }

        if(select[0].selectedIndex == 0){
            erro+= 'Interesse obrigatório \n'
        }

        if (mensagem.val()==""){
                erro+= 'Mensagem obrigatória \n'
        }

        $("#frm").append("<div class='alerta'><div class='alerta-title'><p class='alerta-text'>Alerta</p><p class='fechar'>X</p></div>");

        if (erro != ""){
            $(".alerta").append("<p class='txt-alert'> Preencha os campos corretamente </p></div>")
            $(".alerta").fadeIn('slow');
                $(".fechar").click(function(){
                    $(".alerta").fadeOut('slow');
                })
            /*alert(erro);*/
            erro=""
        }else{
            
            $("#frm").submit(function(event){
                event.preventDefault();
                $(".alerta").append("<p class='txt-alert'> Seu formulário foi enviado com sucesso </p></div>")
                $(".alerta").fadeIn('slow');
                $(".fechar").click(function(){
                    $(".alerta").fadeOut('slow');
                })
                $(document).click(function(){
                    $(".alerta").fadeOut('slow')
                })
            })

        }

    })
})
