
document.addEventListener("DOMContentLoaded", function(){
    var cardNumber = document.getElementById("cardNumber")
    var cardName = document.getElementById("cardName")
    var cardDate = document.getElementById("cardDate")
    var cardYear = document.getElementById("cardYear")
    var cardCode = document.getElementById("cardCode")
    
    var name = document.getElementById("name")
    var numero = document.getElementById("numero")
    var mes = document.getElementById("mes")
    var ano = document.getElementById("year")
    var codigo = document.getElementById("codigo")
    
    button = document.getElementById("button")

    
    
    
    function botao(){
        event.preventDefault()
    }
    
    name.onkeyup = function(){ 
        cardName.innerHTML = name.value
      }

    numero.onkeyup = function(){ 
        cardNumber.innerHTML = numero.value
      }

    mes.onkeyup = function(){ 
        cardDate.innerHTML = mes.value
      }

    ano.onkeyup = function(){ 
        cardYear.innerHTML = ano.value
      }

    codigo.onkeyup = function(){ 
        cardCode.innerHTML = codigo.value
      }


    button.addEventListener('click', botao)
    
});
