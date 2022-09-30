window.addEventListener(
  "load",
  () => {
    var btn7 = document.querySelector("#gestionarCita");
    var lateral7 = document.querySelector("#sidesheetGestionarCita");
    btn7.addEventListener("click", () => lateral7.toggle());

    //clearRequiereVisita();
    //clearContactoAsegurado();
    clearHabidoContacto();
    clearFijarVisita();
  },
  false
);

let handleRequiereVisitaVal;
let handleContactoAseguradoVal;
let handleFijarVisitaVal;

let urlValid = "";

const clearRequiereVisita = () => {
  const requiereVisita = document.querySelectorAll('button[name="requiere_visita"]');
  requiereVisita.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearContactoAsegurado = () => {
  const contactoAsegurado = document.querySelectorAll('button[name="contacto_asegurado"]');
  contactoAsegurado.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearHabidoContacto = () => {
  const habidoContacto = document.querySelectorAll('button[name="habido_contacto"]');
  habidoContacto.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearFijarVisita = () => {
  const fijarVisita = document.querySelectorAll('button[name="fijar_visita"]');
  fijarVisita.forEach(element => {
    element.classList.remove("selected");
  });
};

const handleRequiereVisita = event => {
  const rowStep2 = document.querySelector(".row-step2");
  const rowStep1 = document.querySelector(".col-step1");
  handleRequiereVisitaVal = event.target.value;
  if (handleRequiereVisitaVal === "0") {
    rowStep2.classList.add("display-n");
    rowStep1.classList.add("display-n");
    clearContactoAsegurado();
    clearHabidoContacto();
    urlValid = "../detalle_siniestro/detalle_siniestro_pte_informe.html";
  } else {
    rowStep2.classList.remove("display-n");
    rowStep1.classList.remove("display-n");
  }
};

const handleContactoAsegurado = event => {
  handleContactoAseguradoVal = event.target.value;
  const colStep2Select = document.querySelector(".col-step2-select");
  const colStep2Date = document.querySelector(".col-step2-date");
  if (handleContactoAseguradoVal === "0") {
    colStep2Select.classList.remove("display-n");
    colStep2Date.classList.add("display-n");
    urlValid = "gestionar_cita_pte_visita.html";
  } else {
    colStep2Select.classList.add("display-n");
    colStep2Date.classList.remove("display-n");
    urlValid = "gestionar_cita_pte_visita_realizado.html";
  }
};

const handleFijarVisita = event => {
  handleFijarVisitaVal = event.target.value;
  const colStep3Select = document.querySelector(".col-step3-select");
  const colStep3Date = document.querySelector(".col-step3-date");
  if (handleFijarVisitaVal === "0") {
    colStep3Select.classList.remove("display-n");
    colStep3Date.classList.add("display-n");
    urlValid = "gestionar_cita_pte_visita_guardado.html";
  } else {
    colStep3Select.classList.add("display-n");
    colStep3Date.classList.remove("display-n");
    urlValid = "gestionar_cita_pte_visita_realizado.html";
  }
};

const validSideSheet = event => {
  location.href = urlValid;
};
