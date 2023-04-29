
function cumprimentar(){
    document.getElementById('resultado').innerHTML = 'Oi, gente!';
    console.log('Oi gente!')
   }
   
   cumprimentar();


   function cumprimentaPessoa(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem");    
    document.getElementById('saudacao').innerHTML = `${cumprimentar()} Meu nome é ${nome}`
  }
  
  function cumprimentar(){
    return 'Oi gente!'
   }
   
 
   
 