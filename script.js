var attackOnTitan = document.getElementById("attackOnTitan");

// Flag per controllare se l'animazione è in corso
var isAnimating = false;

// Aggiungi un listener per l'evento mouseenter all'elemento <li>
attackOnTitan.addEventListener("mouseenter", function () {
  // Se l'animazione è già in corso, esci
  if (isAnimating) return;

  // Altrimenti, imposta il flag per indicare che l'animazione è in corso
  isAnimating = true;

  // Aggiungi la classe per l'animazione
  attackOnTitan.classList.add("rotateForward");
});

// Aggiungi un listener per l'evento mouseleave all'elemento <li>
attackOnTitan.addEventListener("mouseleave", function () {
  // Rimuovi la classe per l'animazione
  attackOnTitan.classList.remove("rotateForward");

  // Resetta il flag per indicare che l'animazione non è più in corso
  isAnimating = false;
});
