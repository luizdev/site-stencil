window.addEventListener(
  "load",
  () => {
    var btn7 = document.querySelector("#gestionarCita");
    var lateral7 = document.querySelector("#sidesheetGestionarCita");
    btn7.addEventListener("click", () => lateral7.toggle());
  },
  false
);
