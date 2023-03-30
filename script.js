

const bottoneGeneraGriglia = document.getElementById ("genera-griglia");

const contenitoreGriglia = document.getElementById ("contenitore-griglia");

//event listener sul click del bottone genera-griglia

bottoneGeneraGriglia.addEventListener (
  'click' ,generatoreGriglia);





  // imposto la funzione generatoreGriglia che viene richiamata al click del bottone Genera Griglia

function generatoreGriglia(){
  // in questo modo svuoto il contenitore della griglia ad ogni click
  
  contenitoreGriglia.innerHTML = '';

  // seleziono la select con la difficolta

  const selectDifficoltaGriglia = document.getElementById ("difficolta-griglia");

  const livelloDifficolta = selectDifficoltaGriglia.value;



  let numCelle = 0;
  let numRighe = 0;
  let numColonne = 0;

  if (livelloDifficolta === '1'){
    numCelle = 100;
    numRighe = 10;
    numColonne = 10;

  } else if (livelloDifficolta == '2') {
    numCelle = 81;
    numRighe = 9;
    numColonne = 9;

  }
  else if (livelloDifficolta === '3') {
    numCelle = 49;
    numRighe = 7;
    numColonne = 7;
  }

// creo le celle e le aggiungo al contenitore della griglia




}