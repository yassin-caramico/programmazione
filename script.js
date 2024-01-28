// Variabile per l'elemento "attack_on_titan"
var attack_on_titan = document.getElementById("attack_on_titan");

// Flag per controllare se il cursore è all'interno dell'elemento <li>
var isInside = false;

// Flag per controllare se l'animazione è attiva
var isAnimating = false;

// Funzione per avviare l'animazione
function startAnimation() {
  attack_on_titan.classList.add("attack-animation");
}

// Funzione per interrompere l'animazione
function stopAnimation() {
  attack_on_titan.classList.remove("attack-animation");
}

// Aggiungi event listener per mouseover all'elemento <li>
attack_on_titan.addEventListener("mouseover", startAnimation);

// Aggiungi event listener per mouseout all'elemento <li>
attack_on_titan.addEventListener("mouseout", stopAnimation);

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
attack_on_titan.classList.remove("anime");
