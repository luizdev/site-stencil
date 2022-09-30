const lightbox = document.querySelector("[id-lightbox='altaInformeTercerosImplicadosLightbox']");

const buttonCancel = document.querySelector(
  "[id-lightbox='altaInformeTercerosImplicadosLightbox'] .btn-cancel"
);
const buttonAdd = document.querySelector(
  "[id-lightbox='altaInformeTercerosImplicadosLightbox'] .btn-add"
);
const buttonUpdate = document.querySelector(
  "[id-lightbox='altaInformeTercerosImplicadosLightbox'] .btn-update"
);

window.addEventListener(
  "load",
  () => {
    const table = document.getElementById("tableTercerosImplicadosAltaInforme");
    const tableBody = document.querySelector("#tableTercerosImplicadosAltaInforme tbody");
    table.actionButtons = ["delete", "show"];

    //buttonAdd.addEventListener("click", addDataToTable);
  },
  false
);

let counterId = 1;
let editIndex;
let provinciaItem = "";
let asumeDanosItem = "";

const closeModal = event => {
  event.stopPropagation();
  lightbox.close();
};

buttonCancel.addEventListener("click", closeModal);

const setTableTooltip = event => {
  document.querySelector(`#tooltip_${event.currentTarget.id}`).show();
};

const removeTableTooltip = event => {
  document.querySelector(`#tooltip_${event.currentTarget.id}`).hide();
};

const clearValues = nameField => {
  document.querySelectorAll(`[name^='${nameField}']`).forEach(field => (field.value = ""));
  document.querySelectorAll(".option[data-value='']").forEach(option => option.click());
};

const actionsIconTable = (tableSelector, index) => {
  return `
  <div class="display-f flex--justify-evenly actionsButtons text-align-r">
    <div class="action-pos-relative">
      <i
        id="editIcon_tercerosImplicados${index}"
        class="fas fa-edit text--brand_accent_500 fs-16 pointer ml-s"
        onclick="editRow(event, '${tableSelector}', ${index})"
        onmouseover="setTableTooltip(event)"
        onmouseleave="removeTableTooltip(event)"
      ></i>
      <mm-tooltip id="tooltip_editIcon_tercerosImplicados${index}" class="w-fitContent">Editar fila</mm-tooltip>
    </div>
    <div class="action-pos-relative">
      <i
        id="deleteIcon_tercerosImplicados${index}"
        class="fas fa-trash-alt text--brand_accent_500 fs-16 pointer ml-s"
        onclick="deleteRow(event, '${tableSelector}')"
        onmouseover="setTableTooltip(event)"
        onmouseleave="removeTableTooltip(event)"
      ></i>
      <mm-tooltip id="tooltip_deleteIcon_tercerosImplicados${index}" class="w-fitContent">Eliminar fila</mm-tooltip>
    </div>
  </div>
    `;
};

const editRow = (event, selectorId, index) => {
  const tableInstance = document.querySelector(selectorId).api;
  const row = tableInstance.row($(event.target).closest("tr"));

  const calidad = document.querySelector("[name='altaInformeTercerosImplicadosLightbox_calidad']");
  const nombre = document.querySelector("[name='altaInformeTercerosImplicadosLightbox_nombre']");
  const dni = document.querySelector("[name='altaInformeTercerosImplicadosLightbox_dni']");
  const telefono = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_telefono']"
  );
  const direccion = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_direccion']"
  );

  const provinciaCombobox = document.querySelector(
    "#mm-comboboxAltaInformeTercerosImplicadosProvincia"
  );

  const provincia = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_provincia']"
  );

  const poliza = document.querySelector("[name='altaInformeTercerosImplicadosLightbox_poliza']");

  const siniestro = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_siniestro']"
  );
  const compania = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_compania']"
  );

  const asumeDanosCombobox = document.querySelector(
    "#mm-comboboxAltaInformeTercerosImplicadosDanos"
  );

  const asumeDanos = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_asumeDanos']"
  );

  const observacion = document.querySelector(
    "[name='altaInformeTercerosImplicadosLightbox_observacion']"
  );

  calidad.value = row.data()[1];
  nombre.value = row.data()[2];
  dni.value = row.data()[3];
  telefono.value = row.data()[4];
  direccion.value = row.data()[5];
  provinciaCombobox.value = row.data()[6];
  provincia.value = row.data()[6];
  poliza.value = row.data()[7];
  siniestro.value = row.data()[8];
  compania.value = row.data()[9];
  asumeDanosCombobox.value = row.data()[10];
  asumeDanos.value = row.data()[10];
  observacion.value = row.data()[11];
  setTimeout(() => {
    document.querySelector(`[id-lightbox='altaInformeTercerosImplicadosLightbox']`).open();
  }, 25);

  editIndex = index;
  buttonAdd.classList.add("display-n");
  buttonUpdate.classList.remove("display-n");
};

const deleteRow = (event, selectorId) => {
  const tableInstance = document.querySelector(selectorId).api;
  tableInstance.row(event.target.closest("tr")).remove().draw();
};

const getAltaInformeTercerosImplicadosProvincia = event => {
  provinciaItem = event.target.value;
};
const getAltaInformeTercerosImplicadosDanos = event => {
  asumeDanosItem = event.target.value;
};

const addDataToTable = (tableName, event) => {
  event.stopPropagation();
  const tableSelector = `mm-listing#tableTercerosImplicadosAltaInforme`;
  const fieldValuesArray = [...document.querySelectorAll(`[name^='${tableName}']`)].map(
    field => field.value || ""
  );

  fieldValuesArray.unshift("");
  addRow(fieldValuesArray, tableSelector, "tercerosImplicados");
  clearValues(tableName);
  lightbox.close();
};

const addRow = (data, selectorId, tableName) => {
  const tableInstance = document.querySelector(selectorId).api;
  const indexRow = tableInstance.rows().count();
  data = data.concat(actionsIconTable(selectorId, indexRow));

  let rowNode = tableInstance.row.add(data).draw().node();
  let rowIndex = [...rowNode.parentElement.querySelectorAll("tr")].indexOf(rowNode);
  rowNode.id = `row_${tableName + rowIndex}`;
  counterId++;
};

const updateRow = (tableName, event) => {
  event.stopPropagation();
  const tableNameID = `mm-listing#tableTercerosImplicadosAltaInforme`;
  const tableInstance = document.querySelector(tableNameID).api;
  let fieldValuesArray = [...document.querySelectorAll(`[name^='${tableName}']`)].map(
    field => field.value || ""
  );

  fieldValuesArray.unshift("");
  fieldValuesArray = fieldValuesArray.concat(actionsIconTable(tableNameID, editIndex));
  tableInstance.row(editIndex).data(fieldValuesArray).draw();
  buttonAdd.classList.remove("display-n");
  buttonUpdate.classList.add("display-n");
  clearValues(tableName);
  lightbox.close();
};
