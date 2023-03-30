const bottoneGeneraGriglia = document.getElementById("genera-griglia");
const contenitoreGriglia = document.getElementById("contenitore-griglia");
let bombe = [];


// impostiamo l'evento click sul bottone Genera Griglia
bottoneGeneraGriglia.addEventListener('click', generatoreGriglia);

// funzione per generare la griglia
function generatoreGriglia() {
  contenitoreGriglia.innerHTML = ''; // svuotiamo il contenitore della griglia

  // selezioniamo la select con la difficoltà
  const selectDifficoltaGriglia = document.getElementById("difficolta-griglia");
  const livelloDifficolta = selectDifficoltaGriglia.value;

  let numCelle = 0;
  let numRighe = 0;
  let numColonne = 0;

  if (livelloDifficolta === '1') {
    numCelle = 100;
    numRighe = 10;
    numColonne = 10;
  } else if (livelloDifficolta == '2') {
    numCelle = 81;
    numRighe = 9;
    numColonne = 9;
  } else if (livelloDifficolta === '3') {
    numCelle = 49;
    numRighe = 7;
    numColonne = 7;
  }

  // generiamo l'array delle bombe
  bombe = [];
  while (bombe.length < 16) {
    const numeroCasuale = Math.floor(Math.random() * numCelle) + 1;
    if (!bombe.includes(numeroCasuale)) {
      bombe.push(numeroCasuale);
    }
  }
  console.log("Bombe: ", bombe);

  // creiamo le celle e le aggiungiamo al contenitore della griglia
  for (let i = 1; i <= numCelle; i++) {
    const elementoGriglia = document.createElement('div');
    elementoGriglia.classList.add("elemento-griglia");
    elementoGriglia.innerText = i;
    elementoGriglia.addEventListener('click', gestisciClick);
    contenitoreGriglia.appendChild(elementoGriglia);
  }

  // impostiamo le dimensioni del contenitore della griglia in base al numero di righe e colonne
  contenitoreGriglia.style.gridTemplateColumns = `repeat(${numColonne}, 1fr)`;
  contenitoreGriglia.style.gridTemplateRows = `repeat(${numRighe}, 1fr)`;
}

// funzione per gestire il click su una cella
function gestisciClick(event) {
  const elementoCliccato = event.target;
  const elementoG = elementoCliccato.innerText;

  if (bombe.includes(parseInt(elementoG))) {
    // abbiamo cliccato su una bomba, terminiamo la partita
    alert("Hai preso una bomba! Gioco terminato.");
    elementoCliccato.style.backgroundColor = "red";
    contenitoreGriglia.removeEventListener('click', gestisciClick);

    // resettiamo la griglia per una nuova partita
    contenitoreGriglia.innerHTML = '';
    bombe = [];
  } else {
    //quando  la cella cliccata non è una bomba, la coloriamo di azzurro
    console.log("Hai cliccato sulla cella numero: " + elementoG);
    elementoCliccato.classList.add('clicked');
    elementoCliccato.style.backgroundColor = "lightblue";

    // controllo se l'utente ha vinto la partita
    const celleCliccate = document.querySelectorAll('.clicked');
    const numCelleCliccate = celleCliccate.length;
    const numCelleSenzaBomba = contenitoreGriglia.children.length - bombe.length;

    if (numCelleCliccate === numCelleSenzaBomba) {
      alert("Complimenti, hai vinto! Hai trovato tutte le celle che non erano delle bombe.");
      contenitoreGriglia.removeEventListener('click', gestisciClick);

      // reset griglia
      contenitoreGriglia.innerHTML = '';
      bombe = [];
    }
  }
}


