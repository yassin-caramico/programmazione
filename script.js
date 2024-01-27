// Variabile per l'elemento "attack_on_titan"
var attack_on_titan = document.getElementById("attack_on_titan");

// Flag per controllare se il cursore è all'interno dell'elemento <li>
var isInside = false;

// Flag per controllare se l'animazione è attiva
var isAnimating = false;

// Funzione per avviare l'animazione
function startAnimation() {
  if (!isAnimating) {
    attack_on_titan.classList.add("rotateForward");
    isAnimating = true;
  }
}

// Funzione per interrompere l'animazione
function stopAnimation() {
  if (isAnimating && !isInside) {
    attack_on_titan.classList.remove("rotateForward");
    isAnimating = false;
  }
}

// Aggiungi event listener per mouseenter all'elemento <li>
attack_on_titan.addEventListener("mouseenter", function () {
  isInside = true;
  startAnimation();
});

// Aggiungi event listener per mouseleave all'elemento <li>
attack_on_titan.addEventListener("mouseleave", function () {
  isInside = false;
  stopAnimation();
});

// Aggiungi event listener per mousemove all'elemento <li>
attack_on_titan.addEventListener("mousemove", function () {
  if (isInside) {
    startAnimation();
  } else {
    stopAnimation();
  }
});

// Verifica se l'elemento "attack_on_titan" esiste
if (attack_on_titan !== null) {
  console.log("L'elemento con ID 'attack_on_titan' esiste nel documento.");
} else {
  console.log("L'elemento con ID 'attack_on_titan' non esiste nel documento.");
}
