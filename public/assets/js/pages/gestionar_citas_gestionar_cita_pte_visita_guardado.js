window.addEventListener(
  "load",
  () => {
    var btn7 = document.querySelector("#gestionarCita");
    var lateral7 = document.querySelector("#sidesheetGestionarCita");
    btn7.addEventListener("click", () => lateral7.toggle());
  },
  false
);

let handleFijarVisitaVal;
let urlValid = "gestionar_cita_pte_visita_realizado.html";

const handleFijarVisita = event => {
  handleFijarVisitaVal = event.target.value;
  const colStep3Select = document.querySelector(".col-step3-select");
  const colStep3Date = document.querySelector(".col-step3-datetext");
  const colStept4 = document.querySelector(".row-step4");
  if (handleFijarVisitaVal === "0") {
    colStep3Select.classList.remove("display-n");
    colStept4.classList.remove("display-n");
    colStep3Date.classList.add("display-n");
    urlValid = "gestionar_cita_pte_visita_realizado.html";
  } else {
    colStep3Select.classList.add("display-n");
    colStept4.classList.add("display-n");
    colStep3Date.classList.remove("display-n");
    urlValid = "gestionar_cita_pte_avance.html";
  }
};

const validSideSheet = event => {
  location.href = urlValid;
};
