window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      clearCoberturaDanosAI();
      clearTerceroCausanteAI();
      clearConcurreciaAI();
      clearDanosConsorciablesAI();
    }, 250);
  },
  false
);

const clearCoberturaDanosAI = () => {
  const coberturaDanosAI = document.querySelectorAll('button[name="cobertura_danos_ai"]');
  coberturaDanosAI.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearTerceroCausanteAI = () => {
  const terceroCausanteAI = document.querySelectorAll('button[name="tercero_causante_ai"]');
  terceroCausanteAI.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearConcurreciaAI = () => {
  const concurreciaAI = document.querySelectorAll('button[name="concurrecia_ai"]');
  concurreciaAI.forEach(element => {
    element.classList.remove("selected");
  });
};

const clearDanosConsorciablesAI = () => {
  const danosConsorciablesAI = document.querySelectorAll('button[name="danos_consorciables_ai"]');
  danosConsorciablesAI.forEach(element => {
    element.classList.remove("selected");
  });
};

let handleHayDanosConsorciablesAIVal;
let handleAseguradoConformeAIVal;

const handleHayDanosConsorciablesAI = event => {
  const colDanosConsorciablesAI = document.querySelector(".col-danosConsorciablesAI");
  const colEstimacionDanosConsorciablesAI = document.querySelector(
    ".col-estimacionDanosConsorciablesAI"
  );
  handleHayDanosConsorciablesAIVal = event.target.value;
  if (handleHayDanosConsorciablesAIVal === "1") {
    colDanosConsorciablesAI.classList.remove("display-n");
    colEstimacionDanosConsorciablesAI.classList.remove("display-n");
  } else {
    colDanosConsorciablesAI.classList.add("display-n");
    colEstimacionDanosConsorciablesAI.classList.add("display-n");
  }
};

const handleAseguradoConformeAI = event => {
  const colRazonConformidadAI = document.querySelector(".col-razonConformidadAI");
  const statusHandleAseguradoConformeAICheck = document.querySelector(
    ".statusHandleAseguradoConformeAICheck"
  );
  const statusHandleAseguradoConformeAITimes = document.querySelector(
    ".statusHandleAseguradoConformeAITimes"
  );
  handleAseguradoConformeAIVal = event.target.value;
  if (handleAseguradoConformeAIVal === "1") {
    colRazonConformidadAI.classList.remove("display-n");
    statusHandleAseguradoConformeAICheck.classList.add("display-f");
    statusHandleAseguradoConformeAICheck.classList.remove("display-n");
    statusHandleAseguradoConformeAITimes.classList.add("display-n");
    statusHandleAseguradoConformeAITimes.classList.remove("display-f");
  } else {
    colRazonConformidadAI.classList.add("display-n");
    statusHandleAseguradoConformeAICheck.classList.add("display-n");
    statusHandleAseguradoConformeAICheck.classList.remove("display-f");
    statusHandleAseguradoConformeAITimes.classList.add("display-f");
    statusHandleAseguradoConformeAITimes.classList.remove("display-n");
  }
};
