window.addEventListener(
  "load",
  () => {
    var buttonModoConsultivoPrev = document.getElementById("buttonModoConsultivoPrev");
    var buttonModoConsultivoNext = document.getElementById("buttonModoConsultivoNext");

    if (document.layers) {
      document.captureEvents(Event.KEYDOWN);
    }

    document.onkeydown = function (event) {
      var keyCode = event.keyCode ? event.keyCode : event.which;
      if (keyCode == 37) {
        if (buttonModoConsultivoPrev) {
          buttonModoConsultivoPrev.click();
        }
      }
      if (keyCode == 39) {
        if (buttonModoConsultivoNext) {
          buttonModoConsultivoNext.click();
        }
      } else {
        return true;
      }
    };
  },
  false
);

var mmUserProfile = document.querySelector("mm-user-profile#userExample");
mmUserProfile.data = {
  user: "RGAMA5H",
  name: "Raúl García Mateos",
  role: "Administrador",
  ext: "E324",
  version: "2.0.1-SNAPSHOT",
};

const expandPage = e => {
  e.preventDefault();
  var content = document.getElementById("content-page-sidebar");
  content.classList.toggle("expanded");
};
