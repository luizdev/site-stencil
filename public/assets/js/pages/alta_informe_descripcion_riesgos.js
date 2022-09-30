let handleAIEstadoConservacionVal;
let handleAIContinuidadVal;
let handleAICapitalContinenteCheckVal;
let handleAICapitalContenidoCheckVal;

const handleAIEstadoConservacion = event => {
  const colHandleAIEstadoConservacion = document.querySelector(".col-handleAIEstadoConservacion");
  handleAIEstadoConservacionVal = event.target.value;
  if (handleAIEstadoConservacionVal === "1") {
    colHandleAIEstadoConservacion.classList.add("display-n");
  } else {
    colHandleAIEstadoConservacion.classList.remove("display-n");
  }
};

const handleAIContinuidad = event => {
  const colHandleAIContinuidad = document.querySelector(".col-handleAIContinuidad");
  handleAIContinuidadVal = event.target.value;
  if (handleAIContinuidadVal === "1") {
    colHandleAIContinuidad.classList.add("display-n");
  } else {
    colHandleAIContinuidad.classList.remove("display-n");
  }
};

const handleAICapitalContinente = event => {
  const colHandleAICapitalContinenteCheck = document.querySelector(
    ".col-handleAICapitalContinenteCheck"
  );
  const colHandleAICapitalContinenteMotivo = document.querySelector(
    ".col-handleAICapitalContinenteMotivo"
  );
  const inputAITasacionViviendaRead = document.querySelector(".inputAITasacionViviendaRead");
  const inputAITasacionViviendaWrite = document.querySelector(".inputAITasacionViviendaWrite");
  handleAICapitalContinenteCheckVal = event.target.value;
  if (handleAICapitalContinenteCheckVal === "1") {
    colHandleAICapitalContinenteCheck.classList.remove("display-n");
    colHandleAICapitalContinenteMotivo.classList.add("display-n");
    inputAITasacionViviendaRead.classList.remove("display-n");
    inputAITasacionViviendaWrite.classList.add("display-n");
  } else {
    colHandleAICapitalContinenteCheck.classList.add("display-n");
    colHandleAICapitalContinenteMotivo.classList.remove("display-n");
    inputAITasacionViviendaRead.classList.add("display-n");
    inputAITasacionViviendaWrite.classList.remove("display-n");
  }
};

const handleAICapitalContenido = event => {
  const colHandleAICapitalContenidoCheck = document.querySelector(
    ".col-handleAICapitalContenidoCheck"
  );
  const colHandleAICapitalContenidoMotivo = document.querySelector(
    ".col-handleAICapitalContenidoMotivo"
  );
  const inputAITasacionMobiliarioRead = document.querySelector(".inputAITasacionMobiliarioRead");
  const inputAITasacionMobiliarioWrite = document.querySelector(".inputAITasacionMobiliarioWrite");
  handleAICapitalContenidoCheckVal = event.target.value;
  if (handleAICapitalContenidoCheckVal === "1") {
    colHandleAICapitalContenidoCheck.classList.remove("display-n");
    colHandleAICapitalContenidoMotivo.classList.add("display-n");
    inputAITasacionMobiliarioRead.classList.remove("display-n");
    inputAITasacionMobiliarioWrite.classList.add("display-n");
  } else {
    colHandleAICapitalContenidoCheck.classList.add("display-n");
    colHandleAICapitalContenidoMotivo.classList.remove("display-n");
    inputAITasacionMobiliarioRead.classList.add("display-n");
    inputAITasacionMobiliarioWrite.classList.remove("display-n");
  }
};

const switchVivienda = event => {
  const switchViviendaVal = event.target.checked;
  const colHandleAICInfraseguroVivienda = document.querySelector(
    ".col-handleAICInfraseguroVivienda"
  );
  if (switchViviendaVal) {
    colHandleAICInfraseguroVivienda.classList.remove("display-n");
  } else {
    colHandleAICInfraseguroVivienda.classList.add("display-n");
  }
};

const switchMobilario = event => {
  const switchMobilarioVal = event.target.checked;
  const colHandleAICInfraseguroMobilario = document.querySelector(
    ".col-handleAICInfraseguroMobilario"
  );
  if (switchMobilarioVal) {
    colHandleAICInfraseguroMobilario.classList.remove("display-n");
  } else {
    colHandleAICInfraseguroMobilario.classList.add("display-n");
  }
};

window.addEventListener("load", () => {}, false);
