async function data() {

   const ID = document.getElementById("ID").value;

    const disney = await fetch('api/data/',ID);
	  var as = await disney.text();
    var obj = JSON.parse(as);
    
    console.log(data);
    document.getElementById("Nome").value = obj.nome;
    document.getElementById("Condotta").value = obj.voto;
    document.getElementById("Voto").value = obj.condotta;
  }

function Modifica() {
document.getElementById("Nome").disabled = false;
document.getElementById("Condotta").disabled = false;
document.getElementById("Voto").disabled = false;
document.getElementById("ID").disabled = true;
document.getElementById("ID").value = "Id definito dal database";
document.getElementById("Visualizza").style.display = "none"
document.getElementById("Modifica").style.display = "block";

}
function Visualizza() {

  document.getElementById("Nome").disabled = true;
  document.getElementById("Condotta").disabled = true;
  document.getElementById("Voto").disabled = true;
  document.getElementById("ID").disabled = false;
  document.getElementById("Modifica").style.display = "none"
  document.getElementById("Visualizza").style.display = "block";
  
  }



async function carica() {

  const nomes = document.getElementById("Nome").value;
  const condottas = document.getElementById("Condotta").value;
	const votos = document.getElementById("Voto").value;

    const chiamata = await fetch('api/data/', {
    method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({Nome:nomes, Condotta:condottas, Voto:votos})
    });
    
  }
  
 


  
  
  
   
   
