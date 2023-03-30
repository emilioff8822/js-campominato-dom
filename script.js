

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

for (let i =1 ; i <= numCelle; i++) {

  const elementoGriglia = document.createElement('div');
  elementoGriglia.classList.add ("elemento-griglia")
  elementoGriglia.innerText = i;
  elementoGriglia.addEventListener('click', gestisciClick);
  contenitoreGriglia.appendChild(elementoGriglia);

}

// impostiamo le dimensioni del contenitore della griglia in base al numero di righe e colonne

contenitoreGriglia.style.gridTemplateColumns = `repeat(${numColonne}, 1fr)`;
contenitoreGriglia.style.gridTemplateRows = `repeat(${numRighe}, 1fr)`;
}


// definiamo la funzione gestisciClick che avviene per ogni click della cella

function gestisciClick(event) {
  const elementoCliccato = event.target;
  elementoCliccato.classList.add('clicked');

  const elementoG = elementoCliccato.innerText;

  console.log("Hai cliccato sulla cella numero : " + elementoG);
}