const enableUploader = (event, selector) => {
  const uploaderButton = document.querySelector(`${selector} input[type='button']`);
  uploaderButton.disabled = Boolean(!event.target.value);
};

const setDisabledUploader = selector => {
  const uploaderButton = document.querySelector(`${selector} input[type='button']`);
  if (uploaderButton) uploaderButton.disabled = true;
};

const docsFields = (id, change) => {
  return `
  <article class="col-12 w100 mb-xs" id=${id}>
    <div class="row">
      <div class="col-4">
        <mm-combobox up class="form-index mandatorySelectField">
          <select onchange=${change || undefined}>
            <option value="">Selecciona una opción…</option>
            <option value="opt1">Imágenes</option>
            <option value="opt2">PDF</option>
          </select>
        </mm-combobox>
      </div>
      <div class="col-4">
        <mm-combobox up class="form-index mandatorySelectField">
          <select onchange=${change || undefined}>
            <option value="">Selecciona una opción…</option>
            <option value="opt1">Prespuesto asegurado</option>
            <option value="opt2">Presupuesto reparador</option>
            <option value="opt3">Ahorro</option>
          </select>
        </mm-combobox>
      </div>
      
    </div>
  </article>
  `;
};

const fieldsUploaderHeading = () => {
  const rowUploaderHeading = document.querySelector(".row-content-uploader");
  const fieldsLength = document.querySelectorAll("#uploaderFields article");
  if (fieldsLength.length) {
    rowUploaderHeading.classList.add("display-f");
    rowUploaderHeading.classList.remove("display-n");
  } else {
    rowUploaderHeading.classList.add("display-n");
    rowUploaderHeading.classList.remove("display-f");
  }
};

const insertDocsFields = (selectorButton, id) => {
  const fields = document.querySelector("#uploaderFields");

  const button = document.querySelector(selectorButton);
  const changeCallback = selectorButton ? "handleEnableNextButton()" : "";

  fields.insertAdjacentHTML("beforeend", docsFields(id, changeCallback));
  fieldsUploaderHeading();
};

const removeDocsFields = (selectorButton, selector) => {
  const button = document.querySelector(selectorButton);

  document.querySelector(`#${selector}`).remove();
  fieldsUploaderHeading();
};

const uploadFileListener = async selectorButton => {
  const uploader = document.querySelector("#uploaderButton");

  if (uploader) {
    uploader.addEventListener("addFile", async event => {
      let fileName = event.detail.name.split(".")[0];
      insertDocsFields(selectorButton, `docsField${fileName}`);
    });

    uploader.addEventListener("fileRemoved", event => {
      let fileName = event.detail.item.name.split(".")[0];
      removeDocsFields(selectorButton, `docsField${fileName}`);
    });
  }
};

window.addEventListener("load", () => {
  uploadFileListener("#nextButton");
});
