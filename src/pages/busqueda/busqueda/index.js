window.addEventListener("load", () => {}, false);

const oneCheckboxSituationFilter = (event, col) => {
  console.log(event, col);
};

const oneCheckboxActionFilter = (event, col) => {
  console.log(event, col);
};

const searchTable = () => {
  const table = $("#searchTable").DataTable();
  const situations = $('input:checkbox[name="situacion"]:checked')
    .map(function () {
      return this.value;
    })
    .get()
    .join("|");

  const actions = $('input:checkbox[name="acciones"]:checked')
    .map(function () {
      return this.value;
    })
    .get()
    .join("|");

  table.column(0).search(actions, true, false).draw();
  table.column(2).search(situations, true, false).draw();
};

const clearTable = () => {
  $('input:checkbox[name="situacion"], input:checkbox[name="acciones"]').prop("checked", false);
  $("mm-checkbox").removeClass("checkbox--active").addClass("checkbox--inactive");
  const table = $("#searchTable").DataTable();
  table.search("").columns().search("").draw();
};
